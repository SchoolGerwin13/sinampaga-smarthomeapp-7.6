import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

import {
  Device,
  SensorData,
} from "../models/IoTModels";

import {
  getDevices,
  getSensorData,
  updateDeviceStatus,
} from "../services/IoTService";

type IoTContextType = {
  devices: Device[];
  sensorData: SensorData;

  gatewayConnected: boolean;

  deviceLoading: boolean;
  sensorLoading: boolean;

  error: string | null;

  updatingDevices: number[];

  loadDevices: () => void;
  refreshSensors: () => void;
  toggleDevice: (id: number) => void;
  clearError: () => void;
};

const IoTContext = createContext<
  IoTContextType | undefined
>(undefined);

type IoTProviderProps = {
  children: ReactNode;
};

export const IoTProvider = ({
  children,
}: IoTProviderProps) => {
  const [devices, setDevices] =
    useState<Device[]>([]);

  const [sensorData, setSensorData] =
    useState<SensorData>({
      temperature: 28,
      humidity: 65,
      lightLevel: 720,
    });

  const [gatewayConnected] =
    useState<boolean>(true);

  // Loading states
  const [deviceLoading, setDeviceLoading] =
    useState<boolean>(false);

  const [sensorLoading, setSensorLoading] =
    useState<boolean>(false);

  // Error state
  const [error, setError] =
    useState<string | null>(null);

  // Devices currently being updated
  const [updatingDevices, setUpdatingDevices] =
    useState<number[]>([]);

  // --------------------------------
  // LOAD DEVICES
  // --------------------------------

  const loadDevices = async () => {
    try {
      setDeviceLoading(true);
      setError(null);

      const data = await getDevices();

      setDevices(data);
    } catch (err) {
      setError("Unable to load devices.");
    } finally {
      setDeviceLoading(false);
    }
  };

  // Load devices when the Provider starts
  useEffect(() => {
    loadDevices();
  }, []);

  // --------------------------------
  // REFRESH SENSORS
  // --------------------------------

  const refreshSensors = async () => {
    try {
      setSensorLoading(true);
      setError(null);

      const data = await getSensorData();

      setSensorData(data);
    } catch (err) {
      setError(
        "Unable to retrieve sensor data."
      );
    } finally {
      setSensorLoading(false);
    }
  };

  // --------------------------------
  // UPDATE DEVICE
  // --------------------------------

  const toggleDevice = async (id: number) => {
    // Gateway check
    if (!gatewayConnected) {
      setError(
        "IoT Gateway is disconnected."
      );

      return;
    }

    // Prevent duplicate requests
    if (updatingDevices.includes(id)) {
      return;
    }

    const device = devices.find(
      (item) => item.id === id
    );

    if (!device) {
      setError("Device not found.");

      return;
    }

    const newStatus = !device.status;

    try {
      setError(null);

      // Mark device as updating
      setUpdatingDevices((current) => [
        ...current,
        id,
      ]);

      // Send command to IoT service
      const updatedDevice =
        await updateDeviceStatus(
          id,
          newStatus
        );

      // Update device using service response
      setDevices((currentDevices) =>
        currentDevices.map((item) =>
          item.id === id
            ? updatedDevice
            : item
        )
      );
    } catch (err) {
      setError(
        `Unable to update ${device.name}.`
      );
    } finally {
      // Remove device from updating list
      setUpdatingDevices((current) =>
        current.filter(
          (deviceId) => deviceId !== id
        )
      );
    }
  };

  // --------------------------------
  // CLEAR ERROR
  // --------------------------------

  const clearError = () => {
    setError(null);
  };

  return (
    <IoTContext.Provider
      value={{
        devices,
        sensorData,
        gatewayConnected,

        deviceLoading,
        sensorLoading,

        error,

        updatingDevices,

        loadDevices,
        refreshSensors,
        toggleDevice,
        clearError,
      }}
    >
      {children}
    </IoTContext.Provider>
  );
};

export const useIoT = () => {
  const context = useContext(IoTContext);

  if (!context) {
    throw new Error(
      "useIoT must be used inside an IoTProvider"
    );
  }

  return context;
};
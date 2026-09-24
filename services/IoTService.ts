import { Device, SensorData } from "../models/IoTModels";

const delay = (ms: number): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

// Simulated devices stored by the IoT backend
let devices: Device[] = [
  {
    id: 1,
    name: "Living Room Light",
    type: "Light",
    icon: "bulb",
    status: true,
  },
  {
    id: 2,
    name: "Bedroom Fan",
    type: "Fan",
    icon: "aperture",
    status: false,
  },
  {
    id: 3,
    name: "Front Door Lock",
    type: "Lock",
    icon: "lock-closed",
    status: true,
  },
  {
    id: 4,
    name: "Air Conditioner",
    type: "Air Conditioner",
    icon: "snow",
    status: false,
  },
];

const simulateFailure = () => {
  // 10% chance of failure
  if (Math.random() < 0.1) {
    throw new Error("IoT API request failed.");
  }
};

/**
 * Get all IoT devices.
 */
export const getDevices = async (): Promise<Device[]> => {
  await delay(1500);

  simulateFailure();

  return devices.map((device) => ({
    ...device,
  }));
};

/**
 * Get the latest sensor readings.
 */
export const getSensorData = async (): Promise<SensorData> => {
  await delay(1500);

  simulateFailure();

  const sensorData: SensorData = {
    temperature:
      Math.floor(Math.random() * 6) + 25,

    humidity:
      Math.floor(Math.random() * 21) + 55,

    lightLevel:
      Math.floor(Math.random() * 401) + 500,
  };

  return sensorData;
};

/**
 * Update the status of an IoT device.
 */
export const updateDeviceStatus = async (
  id: number,
  status: boolean
): Promise<Device> => {
  await delay(1000);

  simulateFailure();

  const deviceIndex = devices.findIndex(
    (device) => device.id === id
  );

  if (deviceIndex === -1) {
    throw new Error("Device not found.");
  }

  devices[deviceIndex] = {
    ...devices[deviceIndex],
    status: status,
  };

  return {
    ...devices[deviceIndex],
  };
};
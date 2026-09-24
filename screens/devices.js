import {
  View,
  Text,
  StatusBar,
  Switch,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import { Ionicons } from "@expo/vector-icons";

import styles from "../styles/styles.js";

import { useIoT } from "../context/IoTContext";

export default function DevicesScreen() {
  const {
    devices,
    toggleDevice,
    updatingDevices,
    gatewayConnected,
    deviceLoading,
    error,
    loadDevices,
  } = useIoT();

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#FFFFFF"
      />

      <ScrollView
        contentContainerStyle={styles.screenContainer}
      >
        <Text style={styles.screenTitle}>
          My Devices
        </Text>

        {/* GATEWAY STATUS */}
        <View style={styles.gatewayStatus}>
          <Ionicons
            name={
              gatewayConnected
                ? "wifi"
                : "wifi-outline"
            }
            size={20}
          />

          <Text style={styles.gatewayStatusText}>
            {gatewayConnected
              ? "Gateway Connected"
              : "IoT Gateway is disconnected."}
          </Text>
        </View>

        {/* DEVICE LOADING */}
        {deviceLoading && (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="small" />

            <Text style={styles.loadingText}>
              Loading devices...
            </Text>
          </View>
        )}

        {/* DEVICE ERROR */}
        {!deviceLoading && error && (
          <View style={styles.errorContainer}>
            <Text style={styles.errorText}>
              {error}
            </Text>

            <TouchableOpacity
              style={styles.retryButton}
              onPress={loadDevices}
            >
              <Ionicons
                name="refresh"
                size={18}
                color="#FFFFFF"
              />

              <Text style={styles.retryButtonText}>
                Retry
              </Text>
            </TouchableOpacity>
          </View>
        )}

        {/* DEVICES */}
        {!deviceLoading &&
          !error &&
          devices.map((device) => {
            const isUpdating =
              updatingDevices.includes(device.id);

            return (
              <View
                key={device.id}
                style={styles.listCard}
              >
                <View style={styles.listIcon}>
                  <Ionicons
                    name={device.icon}
                    size={32}
                  />
                </View>

                <View style={styles.deviceInfo}>
                  <Text
                    style={styles.listDeviceName}
                  >
                    {device.name}
                  </Text>

                  <Text style={styles.deviceType}>
                    {device.type}
                  </Text>

                  <Text
                    style={
                      styles.listDeviceStatus
                    }
                  >
                    {isUpdating
                      ? "Updating..."
                      : `Turned ${
                          device.status
                            ? "ON"
                            : "OFF"
                        }`}
                  </Text>
                </View>

                <Switch
                  trackColor={{
                    false: "#767577",
                    true: "#81b0ff",
                  }}
                  thumbColor={
                    device.status
                      ? "#f5dd4b"
                      : "#f4f3f4"
                  }
                  ios_backgroundColor="#3e3e3e"
                  value={device.status}
                  disabled={
                    !gatewayConnected ||
                    isUpdating
                  }
                  onValueChange={() =>
                    toggleDevice(device.id)
                  }
                />
              </View>
            );
          })}
      </ScrollView>
    </SafeAreaView>
  );
}
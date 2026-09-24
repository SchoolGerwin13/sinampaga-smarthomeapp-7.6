import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import { Ionicons } from "@expo/vector-icons";

import styles from "../styles/styles.js";

import { useIoT } from "../context/IoTContext";

export default function SensorsScreen() {
  const {
    sensorData,
    sensorLoading,
    error,
    refreshSensors,
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
          Sensors
        </Text>

        {/* TEMPERATURE */}
        <View style={styles.sensorCard}>
          <Ionicons
            name="thermometer-outline"
            size={32}
          />

          <View style={styles.sensorInfo}>
            <Text style={styles.sensorName}>
              Temperature
            </Text>

            <Text style={styles.sensorValue}>
              {sensorData.temperature} °C
            </Text>
          </View>
        </View>

        {/* HUMIDITY */}
        <View style={styles.sensorCard}>
          <Ionicons
            name="water-outline"
            size={32}
          />

          <View style={styles.sensorInfo}>
            <Text style={styles.sensorName}>
              Humidity
            </Text>

            <Text style={styles.sensorValue}>
              {sensorData.humidity} %
            </Text>
          </View>
        </View>

        {/* LIGHT LEVEL */}
        <View style={styles.sensorCard}>
          <Ionicons
            name="sunny-outline"
            size={32}
          />

          <View style={styles.sensorInfo}>
            <Text style={styles.sensorName}>
              Light Level
            </Text>

            <Text style={styles.sensorValue}>
              {sensorData.lightLevel} lux
            </Text>
          </View>
        </View>

        {/* SENSOR ERROR */}
        {error && (
          <View style={styles.errorContainer}>
            <Text style={styles.errorText}>
              {error}
            </Text>

            <TouchableOpacity
              style={styles.retryButton}
              onPress={refreshSensors}
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

        {/* REFRESH BUTTON */}
        <TouchableOpacity
          style={styles.refreshButton}
          onPress={refreshSensors}
          disabled={sensorLoading}
        >
          {sensorLoading ? (
            <>
              <ActivityIndicator
                size="small"
                color="#FFFFFF"
              />

              <Text style={styles.refreshButtonText}>
                Refreshing Sensors...
              </Text>
            </>
          ) : (
            <>
              <Ionicons
                name="refresh"
                size={20}
                color="#FFFFFF"
              />

              <Text style={styles.refreshButtonText}>
                Refresh Sensors
              </Text>
            </>
          )}
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
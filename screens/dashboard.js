import { View, Text, StatusBar, Pressable, ScrollView, } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

import styles from "../styles/styles.js";
import { useIoT } from "../context/IoTContext";

export default function DashboardScreen({ navigation }) {
  const {
    devices,
    sensorData,
    sensorLoading,
  } = useIoT();

  const light = devices.find(
    (device) => device.type === "Light"
  );

  const fan = devices.find(
    (device) => device.type === "Fan"
  );

  const door = devices.find(
    (device) => device.type === "Lock"
  );

  const airConditioner = devices.find(
    (device) => device.type === "Air Conditioner"
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#FFFFFF"
      />

      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >

        <View style={styles.titleRow}>

          <Text style={styles.title}>
            Smart Home
          </Text>

        </View>

        <View style={styles.temperatureCard}>

          <View style={styles.temperatureIcon}>

            <Ionicons
              name="thermometer"
              size={52}
              color="#2196F3"
            />

            <Ionicons
              name="snow"
              size={30}
              color="#64B5F6"
              style={styles.snowIcon}
            />

          </View>

          {sensorLoading ? (
            <Text style={styles.temperature}>
              ...
            </Text>
          ) : (
            <Text style={styles.temperature}>
              {sensorData.temperature}
              <Text style={styles.degree}>°</Text>
              C
            </Text>
          )}

          <Text style={styles.roomName}>
            Living Room
          </Text>

        </View>

        <View style={styles.deviceGrid}>

          <Pressable style={styles.deviceCard}>
            <View>
              {light
                ? light.status
                ? <Ionicons
                  name="bulb"
                  size={46}
                  color="#168EEA"
                  />
                : <Ionicons
                  name="bulb-outline"
                  size={46}
                  color="#168EEA"
                  />
                : "--"}
            </View>

            <Text style={styles.deviceName}>
              Light
            </Text>

            <Text style={styles.deviceStatus}>
              {light
                ? light.status
                  ? "ON"
                  : "OFF"
                : "--"}
            </Text>
          </Pressable>

          <Pressable style={styles.deviceCard}>
            <View>
                {airConditioner
                  ? airConditioner.status
                  ? <Ionicons
                    name="snow"
                    size={46}
                    color="#168EEA"
                    />
                  : <Ionicons
                    name="snow-outline"
                    size={46}
                    color="#168EEA"
                    />
                  : "--"}
              </View>

            <Text style={styles.deviceName}>
              AC
            </Text>

            <Text style={styles.deviceStatus}>
              {airConditioner
                ? airConditioner.status
                  ? "ON"
                  : "OFF"
                : "--"}
            </Text>
          </Pressable>

          <Pressable style={styles.deviceCard}>
            {door
              ? door.status
                ? <Ionicons
                  name="lock-closed"
                  size={46}
                  color="#168EEA"
                  />
                : <Ionicons
                  name="lock-open-outline"
                  size={46}
                  color="#168EEA"
                  />
                : "--"}
            

            <Text style={styles.deviceName}>
              Door
            </Text>

            <Text style={styles.deviceStatus}>
              {door
                ? door.status
                  ? "LOCKED"
                  : "UNLOCKED"
                : "--"}
            </Text>
          </Pressable>


          {/* FAN */}
          <Pressable style={styles.deviceCard}>
            <View>
              {fan
                ? fan.status
                ? <Ionicons
                  name="aperture"
                  size={46}
                  color="#168EEA"
                  />
                : <Ionicons
                  name="aperture-outline"
                  size={46}
                  color="#168EEA"
                  />
                : "--"}
            </View>

            <Text style={styles.deviceName}>
              Fan
            </Text>

            <Text style={styles.deviceStatus}>
              {fan
                ? fan.status
                  ? "ON"
                  : "OFF"
                : "--"}
            </Text>
          </Pressable>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}


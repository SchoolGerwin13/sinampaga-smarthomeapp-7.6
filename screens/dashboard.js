import { View, Text, StatusBar, Pressable, ScrollView, } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

import styles from "../styles/styles.js";

export default function DashboardScreen({ navigation }) {
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

        {/* TITLE */}
        <View style={styles.titleRow}>

          <Text style={styles.title}>
            Smart Home
          </Text>

        </View>


        {/* TEMPERATURE CARD */}
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


          <Text style={styles.temperature}>
            26<Text style={styles.degree}>°</Text>C
          </Text>


          <Text style={styles.roomName}>
            Living Room
          </Text>

        </View>


        {/* DEVICE GRID */}
        <View style={styles.deviceGrid}>

          {/* LIGHT */}
          <Pressable style={styles.deviceCard}>

            <View style={styles.deviceIconCircle}>
              <Ionicons
                name="bulb-outline"
                size={32}
                color="#FFFFFF"
              />
            </View>

            <Text style={styles.deviceName}>
              Light
            </Text>

            <Text style={styles.deviceStatus}>
              ON
            </Text>

          </Pressable>


          {/* AC */}
          <Pressable style={styles.deviceCard}>

            <Ionicons
              name="snow-outline"
              size={48}
              color="#5DA5D5"
            />

            <Text style={styles.deviceName}>
              AC
            </Text>

            <Text style={styles.deviceStatus}>
              24°C
            </Text>

          </Pressable>


          {/* DOOR */}
          <Pressable style={styles.deviceCard}>

            <Ionicons
              name="lock-closed"
              size={46}
              color="#168EEA"
            />

            <Text style={styles.deviceName}>
              Door
            </Text>

            <Text style={styles.deviceStatus}>
              LOCKED
            </Text>

          </Pressable>


          {/* CAMERA */}
          <Pressable style={styles.deviceCard}>

            <Ionicons
              name="camera"
              size={46}
              color="#F5A623"
            />

            <Text style={styles.deviceName}>
              Camera
            </Text>

            <Text style={styles.deviceStatus}>
              ON
            </Text>

          </Pressable>

        </View>

      </ScrollView>

    </SafeAreaView>
  );
}


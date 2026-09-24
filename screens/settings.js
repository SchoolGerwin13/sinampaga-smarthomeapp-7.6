import { useState } from "react";
import { View, Text, StatusBar, Pressable, Switch, ScrollView, } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

import styles from "../styles/styles.js";

export default function SettingsScreen() {
  const [isEnabled, setIsEnabled] = useState(true);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

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
          Settings
        </Text>

        <Text style={styles.sectionTitle}>
          General
        </Text>

        <View style={styles.settingCard}>

          <View style={styles.settingIcon}>
            <Ionicons
              name="notifications"
              size={26}
              color="#2196F3"
            />
          </View>

          <View style={styles.settingInfo}>
            <Text style={styles.settingName}>
              Notifications
            </Text>

            <Text style={styles.settingDescription}>
              Receive device alerts
            </Text>
          </View>

          <Switch
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            value={isEnabled}
            onValueChange={toggleSwitch} 
          />
        </View>


        <View style={styles.settingCard}>
          <View style={styles.settingIcon}>

            <Ionicons
              name="thermometer-outline"
              size={26}
              color="#2196F3"
            />

          </View>

          <View style={styles.settingInfo}>
            <Text style={styles.settingName}>
              Temperature Unit
            </Text>
          </View>

          <View>
            <Text style={styles.settingName}>
              °C
            </Text>
          </View>

        </View>

        <Text style={styles.sectionTitle}>
          System
        </Text>

        <Pressable style={styles.menuCard}>

          <Ionicons
            name="wifi"
            size={28}
            color="#2196F3"
          />

          <Text style={styles.menuText}>
            Wi-Fi Connection
          </Text>

          <Ionicons
            name="chevron-forward"
            size={24}
            color="#777"
          />

        </Pressable>

        <Pressable style={styles.menuCard}>

          <Ionicons
            name="information-circle"
            size={28}
            color="#2196F3"
          />

          <Text style={styles.menuText}>
            About Smart Home
          </Text>

          <Ionicons
            name="chevron-forward"
            size={24}
            color="#777"
          />

        </Pressable>

      </ScrollView>

    </SafeAreaView>
  );
}
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { IoTProvider } from "./context/IoTContext";

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from "@expo/vector-icons";

import DashboardScreen from "./screens/dashboard.js"
import DevicesScreen from "./screens/devices.js"
import SensorsScreen from "./screens/sensors.js"
import SettingsScreen from "./screens/settings.js"

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <IoTProvider>
      <SafeAreaProvider>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen
              name="Dashboard"
              component={DashboardScreen}
              options={{
                headerShown: false,
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="thermometer-outline" color={color} size={size} />
                )
              }}
            />
            <Tab.Screen
              name="Devices"
              component={DevicesScreen}
              options={{
                headerShown: false,
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="phone-portrait-outline" color={color} size={size} />
                )
              }}
            />
            <Tab.Screen
              name="Sensors"
              component={SensorsScreen}
              options={{
                headerShown: false,
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="pulse-outline" color={color} size={size} />
                )
              }}
            />
            <Tab.Screen
              name="Settings"
              component={SettingsScreen}
              options={{
                headerShown: false,
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="settings-outline" color={color} size={size} />
                )
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </IoTProvider>
  );
}
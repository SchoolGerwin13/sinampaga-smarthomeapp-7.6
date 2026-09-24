import { Device } from "../models/IoTModels";
import { Ionicons } from "@expo/vector-icons";

export const sampleDevices: Device[] = [
  {
    id: 1,
    name: "Living Room Light",
    type: "Light",
    icon: "bulb-outline",
    status: true,
  },
  {
    id: 2,
    name: "Bedroom Fan",
    type: "Fan",
    icon: "aperture-outline",
    status: false,
  },
  {
    id: 3,
    name: "Front Door Lock",
    type: "Lock",
    icon: "lock-closed-outline",
    status: true,
  },
];
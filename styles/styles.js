import { StyleSheet } from "react-native";

export default StyleSheet.create({

  safeArea: {
    flex: 1,
    backgroundColor: "#F3F3F3",
  },

  header: {
    height: 68,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#D8D8D8",
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 3,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },


  headerTitle: {
    fontSize: 23,
    fontWeight: "900",
    color: "#111111",
  },


  // DASHBOARD

  container: {
    paddingHorizontal: 24,
    paddingTop: 56,
    paddingBottom: 30,
  },


  titleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },


  title: {
    fontSize: 34,
    fontWeight: "900",
    color: "#050505",
  },


  temperatureCard: {
    height: 343,
    borderWidth: 1.3,
    borderColor: "#000000",
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F5F5F5",
    marginBottom: 18,
  },


  temperatureIcon: {
    position: "relative",
    height: 70,
    width: 70,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 5,
  },


  snowIcon: {
    position: "absolute",
    right: -5,
    top: 0,
  },


  temperature: {
    fontSize: 52,
    fontWeight: "900",
    color: "#050505",
  },


  degree: {
    fontSize: 38,
  },


  roomName: {
    fontSize: 18,
    fontWeight: "800",
    color: "#111111",
    marginTop: 10,
  },


  // DEVICE GRID

  deviceGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 12,
  },


  deviceCard: {
    width: "48.2%",
    height: 114,
    borderWidth: 1.3,
    borderColor: "#000000",
    borderRadius: 17,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F5F5F5",
  },


  deviceIconCircle: {
    width: 43,
    height: 43,
    borderRadius: 22,
    backgroundColor: "#168ED0",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 5,
  },


  deviceName: {
    fontSize: 19,
    fontWeight: "900",
    color: "#080808",
    marginTop: 2,
  },


  deviceStatus: {
    fontSize: 16,
    fontWeight: "800",
    color: "#080808",
    marginTop: 4,
  },


  // VIEW ALL

  viewAll: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 25,
  },


  viewAllText: {
    fontSize: 19,
    fontWeight: "900",
    color: "#050505",
    marginRight: 5,
  },


  // OTHER SCREENS

  screenContainer: {
    padding: 24,
    paddingBottom: 40,
  },


  screenTitle: {
    fontSize: 32,
    fontWeight: "900",
    color: "#050505",
    marginBottom: 25,
  },


  // DEVICE LIST

  listCard: {
    minHeight: 90,
    backgroundColor: "#F5F5F5",
    borderWidth: 1.2,
    borderColor: "#000000",
    borderRadius: 16,
    marginBottom: 14,
    paddingHorizontal: 18,
    paddingVertical: 14,
    flexDirection: "row",
    alignItems: "center",
  },

  listIcon: {
    width: 40,
    alignItems: "center",
    justifyContent: "center",
  },


  deviceInfo: {
    flex: 1,
    marginLeft: 15,
  },


  listDeviceName: {
    fontSize: 18,
    fontWeight: "900",
    color: "#000000",
  },

  deviceType: {
    fontSize: 14,
    color: "#333333",
    marginTop: 2,
  },


  listDeviceStatus: {
    fontSize: 14,
    fontWeight: "600",
    color: "#666666",
    marginTop: 4,
  },

  gatewayStatus: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },

  gatewayStatusText: {
    marginLeft: 8,
    fontSize: 14,
    fontWeight: "700",
  },


  // SETTINGS

  sectionTitle: {
    fontSize: 20,
    fontWeight: "900",
    marginTop: 15,
    marginBottom: 12,
  },


  settingCard: {
    minHeight: 75,
    backgroundColor: "#F5F5F5",
    borderWidth: 1.2,
    borderColor: "#000000",
    borderRadius: 16,
    paddingHorizontal: 15,
    marginBottom: 12,
    flexDirection: "row",
    alignItems: "center",
  },


  settingIcon: {
    width: 45,
    alignItems: "center",
  },


  settingInfo: {
    flex: 1,
    marginLeft: 10,
  },


  settingName: {
    fontSize: 17,
    fontWeight: "900",
    color: "#000000",
  },


  settingDescription: {
    fontSize: 12,
    color: "#777777",
    marginTop: 3,
  },


  menuCard: {
    height: 65,
    backgroundColor: "#F5F5F5",
    borderWidth: 1.2,
    borderColor: "#000000",
    borderRadius: 16,
    paddingHorizontal: 18,
    marginBottom: 12,
    flexDirection: "row",
    alignItems: "center",
  },


  menuText: {
    flex: 1,
    marginLeft: 15,
    fontSize: 16,
    fontWeight: "800",
    color: "#000000",
  },

/* SENSOR LIST */

sensorCard: {
  minHeight: 90,
  backgroundColor: "#F5F5F5",
  borderWidth: 1.2,
  borderColor: "#000000",
  borderRadius: 16,
  marginBottom: 14,
  paddingHorizontal: 18,
  paddingVertical: 14,
  flexDirection: "row",
  alignItems: "center",
},

sensorInfo: {
  flex: 1,
  marginLeft: 15,
},

sensorName: {
  fontSize: 18,
  fontWeight: "900",
  color: "#000000",
},

sensorValue: {
  fontSize: 16,
  fontWeight: "600",
  color: "#666666",
  marginTop: 4,
},

refreshButton: {
  height: 52,
  backgroundColor: "#168ED0",
  borderRadius: 14,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  marginTop: 10,
},

refreshButtonText: {
  fontSize: 16,
  fontWeight: "800",
  color: "#FFFFFF",
  marginLeft: 8,
},

errorText: {
  fontSize: 14,
  color: "#D00000",
  marginTop: 5,
  marginBottom: 10,
},

/* LOADING */

loadingContainer: {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  paddingVertical: 20,
},

loadingText: {
  fontSize: 15,
  fontWeight: "600",
  color: "#666666",
  marginLeft: 8,
},

/* ERROR */

errorContainer: {
  alignItems: "center",
  padding: 18,
  marginBottom: 14,
  borderWidth: 1.2,
  borderColor: "#000000",
  borderRadius: 16,
  backgroundColor: "#F5F5F5",
},

errorText: {
  fontSize: 15,
  fontWeight: "700",
  color: "#D00000",
  textAlign: "center",
  marginBottom: 12,
},

retryButton: {
  height: 42,
  paddingHorizontal: 20,
  borderRadius: 12,
  backgroundColor: "#168ED0",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
},

retryButtonText: {
  fontSize: 15,
  fontWeight: "800",
  color: "#FFFFFF",
  marginLeft: 7,
},

/* GATEWAY */

gatewayStatus: {
  flexDirection: "row",
  alignItems: "center",
  marginBottom: 18,
},

gatewayStatusText: {
  fontSize: 14,
  fontWeight: "700",
  marginLeft: 8,
},

});
import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("screen");

export const globalStyles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    width,
    height,
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
  alignCenter: {
    flexDirection: "row",
    alignItems: "center",
  },
  justifyBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

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
  rowCenter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

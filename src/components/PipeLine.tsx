import React from "react";
import { StyleSheet, View } from "react-native";
import { SMALL_SPACING } from "../config/dimensions";
import { COLORS } from "../config/colors";

interface Props {
  backgroundColor: string;
}

export const PipeLine: React.FC<Props> = ({ backgroundColor }) => {
  return <View style={[styles.pipeLine, { backgroundColor }]} />;
};

const styles = StyleSheet.create({
  pipeLine: {
    width: 4,
    height: 15,
    marginLeft: SMALL_SPACING / 4,
    backgroundColor: COLORS.orange,
  },
});

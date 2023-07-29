import React from "react";
import { StyleSheet, View } from "react-native";
import { SMALL_SPACING } from "../config/dimensions";
import { COLORS } from "../config/colors";

interface Props {
  height?: number;
  backgroundColor: string;
  marginRight?: number;
}

export const PipeLine: React.FC<Props> = ({
  backgroundColor,
  height,
  marginRight,
}) => {
  return (
    <View
      style={[
        styles.pipeLine,
        { backgroundColor, height: height ? height : 15, marginRight },
      ]}
    />
  );
};

const styles = StyleSheet.create({
  pipeLine: {
    width: 4,
    marginLeft: SMALL_SPACING / 4,
    backgroundColor: COLORS.orange,
  },
});

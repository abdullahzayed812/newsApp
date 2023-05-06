import React from "react";
import { StyleSheet, Text, TouchableOpacity, ViewStyle } from "react-native";
import { SMALL_SPACING } from "../../constants/dimensions";
import { COLORS } from "../../helpers/colors";
import { globalStyles } from "../../helpers/globalStyles";
import { HEADER_2, HEADER_3 } from "../../constants/fonts";

interface Props {
  buttonStyle?: ViewStyle;
  text: string;
}

export const Button: React.FC<Props> = ({ buttonStyle, text }) => {
  return (
    <TouchableOpacity style={[styles.container, buttonStyle]}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    ...globalStyles.center,
    paddingVertical: SMALL_SPACING - 5,
    backgroundColor: COLORS.mainColor,
    borderRadius: SMALL_SPACING / 2,
  },
  text: {
    ...HEADER_2,
    color: COLORS.black,
  },
});

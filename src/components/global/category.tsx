import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { BORDER_RADIUS } from "../../constants/dimensions";
import { COLORS } from "../../helpers/colors";
import { TEXT_12, TEXT_14 } from "../../constants/fonts";
import { globalStyles } from "../../helpers/globalStyles";

interface Props {
  text: string;
}

export const Category: React.FC<Props> = ({ text }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const { width } = Dimensions.get("screen");

const styles = StyleSheet.create({
  container: {
    ...globalStyles.center,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 1.2,
    borderRadius: BORDER_RADIUS + 15,
    borderColor: COLORS.mainColor,
  },
  text: {
    ...TEXT_12,
    color: COLORS.white,
  },
});

import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { PipeLine } from "./PipeLine";
import { IMAGES } from "../config/images";
import { globalStyles } from "../config/globalStyles";
import { TEXT_12 } from "../config/fonts";
import { COLORS } from "../config/colors";
interface Props {
  text: string | undefined;
}

export const NewsCategoryTitle: React.FC<Props> = ({ text }) => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{text}</Text>
        <PipeLine backgroundColor="#00f" />
      </View>
      <Image source={IMAGES.moreDark} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...globalStyles.justifyBetween,
    flexDirection: "row-reverse",
  },
  textContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    ...TEXT_12,
    color: COLORS.black,
  },
});

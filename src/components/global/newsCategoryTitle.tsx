import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { COLORS } from "../../helpers/colors";
import { globalStyles } from "../../helpers/globalStyles";
import { TEXT_12 } from "../../constants/fonts";
import { PipeLine } from "./pipeLine";
import { IMAGES } from "../../helpers/images";

interface Props {
  text: string;
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
    ...globalStyles.rowBetween,
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

import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { TEXT_14 } from "../config/fonts";
import { SMALL_SPACING } from "../config/dimensions";
import { PipeLine } from "./PipeLine";
import { COLORS } from "../config/colors";
import { IMAGES } from "../config/images";

interface Props {
  views?: number;
}

export const ViewsCount: React.FC<Props> = ({ views }) => {
  return (
    // <View style={styles.container}>
    <>
      <PipeLine
        backgroundColor={COLORS.mainColor}
        height={40}
        marginRight={SMALL_SPACING}
      />
      <View style={styles.container}>
        <Image source={IMAGES.view} style={styles.image} />
        <Text style={styles.text}>{views}</Text>
        <Text>مشاهدة</Text>
      </View>
    </>
    // </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row-reverse",
    alignItems: "center",
  },
  text: { ...TEXT_14, fontWeight: "bold", marginHorizontal: 10 },
  image: {
    width: 30,
    height: 30,
    resizeMode: "contain",
    marginRight: SMALL_SPACING / 2,
  },
});

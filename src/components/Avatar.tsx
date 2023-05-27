import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { IMAGES } from "../config/images";
import { SMALL_SPACING } from "../config/dimensions";
import { TEXT_12 } from "../config/fonts";

interface Props {
  username: string;
}

export const Avatar: React.FC<Props> = ({ username }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.username}>{username}</Text>
      <Image source={IMAGES.user} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: SMALL_SPACING / 2,
  },
  username: {
    ...TEXT_12,
  },
  image: {
    width: 35,
    height: 35,
    resizeMode: "cover",
  },
});

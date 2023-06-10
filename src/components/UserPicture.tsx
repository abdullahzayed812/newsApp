import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { COLORS } from "../config/colors";

interface Props {
  imageSource: string;
}

export const UserPicture: React.FC<Props> = ({ imageSource }) => {
  return (
    <View style={styles.container}>
      {imageSource ? (
        <Image source={{ uri: imageSource }} style={styles.image} />
      ) : null}
      <View style={styles.overlay} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: -35,
    right: 25,
    width: 70,
    height: 70,
    borderRadius: 35,
    resizeMode: "cover",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  overlay: {
    position: "absolute",
    bottom: 0,
    width: 70,
    height: 35,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    opacity: 0.4,
    backgroundColor: COLORS.darkAuthHeader,
  },
});

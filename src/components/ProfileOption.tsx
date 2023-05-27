import React from "react";
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SMALL_SPACING } from "../config/dimensions";
import { TEXT_14 } from "../config/fonts";

interface Props {
  text: string;
  imageSource: ImageSourcePropType;
}

export const ProfileOption: React.FC<Props> = ({ text, imageSource }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={imageSource} />
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row-reverse",
    alignItems: "center",
    marginVertical: SMALL_SPACING / 1.7,
  },
  text: {
    ...TEXT_14,
    marginRight: SMALL_SPACING,
  },
});

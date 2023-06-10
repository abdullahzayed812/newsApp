import React from "react";
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { SMALL_SPACING } from "../config/dimensions";

interface Props {
  image: ImageSourcePropType;
  onPress: () => void;
}

export const SocialItem: React.FC<Props> = ({ image, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={image} style={styles.image} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
  },
  image: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },
});

import React from "react";
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { globalStyles } from "../config/globalStyles";
import { TEXT_14 } from "../config/fonts";
import { SMALL_SPACING } from "../config/dimensions";

interface Props {
  text: string;
  flagImage: ImageSourcePropType;
  selectedImage?: ImageSourcePropType;
}

export const ChooseLangItem: React.FC<Props> = ({
  text,
  flagImage,
  selectedImage,
}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={selectedImage!} />
      <View style={styles.leftContainer}>
        <Text style={styles.text}>{text}</Text>
        <Image source={flagImage} style={styles.rightImage} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    ...globalStyles.justifyBetween,
    marginBottom: SMALL_SPACING,
  },
  leftContainer: {
    ...globalStyles.alignCenter,
  },
  text: {
    ...TEXT_14,
  },
  rightImage: {
    marginLeft: SMALL_SPACING,
  },
});

import React from "react";
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { IMAGES } from "../config/images";
import { globalStyles } from "../config/globalStyles";
import { TEXT_14 } from "../config/fonts";
import { SMALL_SPACING } from "../config/dimensions";

interface Props {
  image: ImageSourcePropType;
  text: string;
  onPress: () => void;
}

export const SettingsItem: React.FC<Props> = ({ image, text, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Image source={IMAGES.leftArrow} />
      <View style={styles.leftContainer}>
        <Text style={styles.text}>{text}</Text>
        <Image source={image} style={styles.rightImage} />
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

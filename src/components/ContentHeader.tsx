import React from "react";
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { TEXT_14 } from "../config/fonts";
import { globalStyles } from "../config/globalStyles";
import { SMALL_SPACING } from "../config/dimensions";

interface Props {
  text: string;
  imageSource: ImageSourcePropType;
}

export const ContentHeader: React.FC<Props> = ({ text, imageSource }) => {
  return (
    <View style={styles.header}>
      <Text style={TEXT_14}>{text}</Text>
      <Image source={imageSource} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    ...globalStyles.justifyBetween,
    justifyContent: "flex-end",
    marginBottom: SMALL_SPACING / 2,
  },
  image: {
    marginLeft: SMALL_SPACING / 3,
  },
});

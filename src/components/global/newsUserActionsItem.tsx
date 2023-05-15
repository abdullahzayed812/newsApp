import React from "react";
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SMALL_SPACING } from "../../constants/dimensions";
import { COLORS } from "../../helpers/colors";
import { TEXT_12 } from "../../constants/fonts";

interface Props {
  text?: string;
  imageSource: ImageSourcePropType;
}

export const NewsUserActionsItem: React.FC<Props> = ({ text, imageSource }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      <Image source={imageSource} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: SMALL_SPACING / 4,
    paddingVertical: SMALL_SPACING / 1.5,
    paddingHorizontal: SMALL_SPACING,
    borderRadius: 30,
    backgroundColor: COLORS.mainGray,
  },
  text: {
    ...TEXT_12,
    color: COLORS.white,
  },
  like: {
    flexDirection: "row",
    alignItems: "center",
    gap: SMALL_SPACING / 5,
  },
  line: {
    width: 5,
    height: 10,
    backgroundColor: "red",
  },
});

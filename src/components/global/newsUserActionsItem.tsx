import React from "react";
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SMALL_SPACING } from "../../config/dimensions";
import { COLORS } from "../../config/colors";
import { TEXT_12 } from "../../config/fonts";

interface Props {
  text?: string;
  imageSource: ImageSourcePropType;
  onPress?: () => void;
}

export const NewsUserActionsItem: React.FC<Props> = ({
  text,
  imageSource,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
      <Image source={imageSource} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: SMALL_SPACING / 4,
    paddingVertical: SMALL_SPACING / 1.4,
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

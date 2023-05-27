import React, { Dispatch, SetStateAction } from "react";
import {
  Dimensions,
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { COLORS } from "../config/colors";
import { BORDER_RADIUS, SMALL_SPACING } from "../config/dimensions";
import { globalStyles } from "../config/globalStyles";
import { TEXT_12 } from "../config/fonts";

interface Props {
  index: number;
  text: string;
  onPress: Dispatch<SetStateAction<number | undefined>>;
  imageSource?: ImageSourcePropType;
  selectedCategoryIndex?: number;
}

export const Category: React.FC<Props> = ({
  index,
  text,
  onPress,
  imageSource,
  selectedCategoryIndex,
}) => {
  return (
    <TouchableOpacity
      onPress={() => onPress(index)}
      style={[
        styles.container,
        {
          backgroundColor:
            index === selectedCategoryIndex
              ? COLORS.mainColor
              : COLORS.lightMainColor,
        },
      ]}
    >
      <Text
        style={[
          styles.text,
          {
            color:
              index === selectedCategoryIndex ? COLORS.white : COLORS.mainGray,
          },
        ]}
      >
        {text}
      </Text>
      {imageSource ? (
        <Image source={imageSource} style={{ marginLeft: SMALL_SPACING / 4 }} />
      ) : null}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    ...globalStyles.justifyBetween,
    marginHorizontal: SMALL_SPACING / 6,
    justifyContent: "flex-end",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 1.2,
    borderRadius: BORDER_RADIUS + 15,
    borderColor: COLORS.mainColor,
  },
  text: {
    ...TEXT_12,
    textAlign: "center",
    color: COLORS.white,
  },
});

import React, { Dispatch, SetStateAction } from "react";
import {
  Dimensions,
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { BORDER_RADIUS, SMALL_SPACING } from "../../constants/dimensions";
import { COLORS } from "../../helpers/colors";
import { TEXT_12, TEXT_14 } from "../../constants/fonts";
import { globalStyles } from "../../helpers/globalStyles";

interface Props {
  text: string;
  index: number;
  setSelectedCategoryIndex: Dispatch<SetStateAction<number | undefined>>;
  selectedCategoryIndex: number | undefined;
  imageSource?: ImageSourcePropType;
  isListItem?: boolean;
}

export const Category: React.FC<Props> = ({
  text,
  index,
  setSelectedCategoryIndex,
  selectedCategoryIndex,
  imageSource,
  isListItem,
}) => {
  return (
    <TouchableOpacity
      onPress={() => setSelectedCategoryIndex(index)}
      style={[
        styles.container,
        {
          backgroundColor:
            index === selectedCategoryIndex
              ? COLORS.black
              : isListItem
              ? COLORS.mainColor
              : "transparent",
        },
      ]}
    >
      <Text style={styles.text}>{text}</Text>
      {imageSource ? (
        <Image source={imageSource} style={{ marginLeft: SMALL_SPACING / 4 }} />
      ) : null}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    ...globalStyles.rowBetween,
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

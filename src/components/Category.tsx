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
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { setCategoryId } from "../redux/categories/categoriesSlice";

interface Props {
  index: number;
  text: string;

  imageSource?: ImageSourcePropType;

  isStartScreen?: boolean;
}

export const Category: React.FC<Props> = ({
  index,
  text,
  imageSource,
  isStartScreen,
}) => {
  const dispatch = useAppDispatch();

  const { categoryID } = useAppSelector((state) => state.categories);

  return (
    <TouchableOpacity
      onPress={() => dispatch(setCategoryId(index))}
      style={[
        styles.container,
        {
          backgroundColor:
            index === categoryID
              ? COLORS.mainColor
              : isStartScreen
              ? "transparent"
              : COLORS.lightMainColor,
        },
      ]}
    >
      <Text
        style={[
          styles.text,
          {
            color:
              index === categoryID
                ? COLORS.white
                : isStartScreen
                ? "white"
                : COLORS.mainGray,
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

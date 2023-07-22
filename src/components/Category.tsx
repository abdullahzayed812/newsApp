import React, { Dispatch, SetStateAction } from "react";
import {
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  Text,
} from "react-native";
import { COLORS } from "../config/colors";
import { BORDER_RADIUS, SMALL_SPACING } from "../config/dimensions";
import { globalStyles } from "../config/globalStyles";
import { TEXT_12 } from "../config/fonts";
import { useAppDispatch } from "../redux/hooks";
import { getPostsByCategoryID } from "../redux/postsByCategory";
import { setCategoryId } from "../redux/categories/categoriesSlice";

interface Props {
  categoryID: number;
  index: number;
  text: string;

  imageSource?: ImageSourcePropType;

  isStartScreen?: boolean;
  setActiveIndex?: Dispatch<SetStateAction<number>>;
  activeIndex?: number;
}

export const Category: React.FC<Props> = ({
  categoryID,
  index,
  text,
  imageSource,
  isStartScreen,
  setActiveIndex,
  activeIndex,
}) => {
  const dispatch = useAppDispatch();

  const handleCategoryPress = React.useCallback(async () => {
    if (isStartScreen) {
      return null;
    }
    setActiveIndex?.(index);
    dispatch(setCategoryId(categoryID));
    try {
      await getPostsByCategoryID(dispatch, categoryID, 10);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <Pressable
      onPress={handleCategoryPress}
      style={[
        styles.container,
        {
          backgroundColor:
            index === activeIndex ? COLORS.mainColor : COLORS.lightMainColor,
        },
      ]}
    >
      <Text
        style={[
          styles.text,
          {
            color: index === activeIndex ? COLORS.white : COLORS.mainGray,
          },
        ]}
      >
        {text}
      </Text>
      {imageSource ? (
        <Image source={imageSource} style={{ marginLeft: SMALL_SPACING / 4 }} />
      ) : null}
    </Pressable>
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

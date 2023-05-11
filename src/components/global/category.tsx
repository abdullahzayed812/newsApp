import React, { Dispatch, SetStateAction } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { BORDER_RADIUS } from "../../constants/dimensions";
import { COLORS } from "../../helpers/colors";
import { TEXT_12, TEXT_14 } from "../../constants/fonts";
import { globalStyles } from "../../helpers/globalStyles";

interface Props {
  text: string;
  index: number;
  setSelectedCategoryIndex: Dispatch<SetStateAction<number | undefined>>;
  selectedCategoryIndex: number | undefined;
}

export const Category: React.FC<Props> = ({
  text,
  index,
  setSelectedCategoryIndex,
  selectedCategoryIndex,
}) => {
  return (
    <TouchableOpacity
      onPress={() => setSelectedCategoryIndex(index)}
      style={[
        styles.container,
        {
          backgroundColor:
            index === selectedCategoryIndex ? COLORS.mainColor : "transparent",
        },
      ]}
    >
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const { width } = Dimensions.get("screen");

const styles = StyleSheet.create({
  container: {
    ...globalStyles.center,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 1.2,
    borderRadius: BORDER_RADIUS + 15,
    borderColor: COLORS.mainColor,
  },
  text: {
    ...TEXT_12,
    color: COLORS.white,
  },
});

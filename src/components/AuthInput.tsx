import React, { Dispatch, SetStateAction } from "react";
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { globalStyles } from "../config/globalStyles";
import { SMALL_SPACING } from "../config/dimensions";
import { COLORS } from "../config/colors";
import { TEXT_12 } from "../config/fonts";

interface Props {
  leftImageSource?: ImageSourcePropType;
  fieldTitle?: string;
  value: string;
  onChangeText: (text: string) => void;
  rightImageSource?: ImageSourcePropType;
  placeholder?: string;
}

export const AuthInput: React.FC<Props> = ({
  leftImageSource,
  rightImageSource,
  fieldTitle,
  value,
  onChangeText,
  placeholder,
}) => {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <Text style={styles.fieldTitle}>{fieldTitle}</Text>
        <TextInput
          value={value}
          onChangeText={onChangeText}
          style={{ padding: 0, textAlign: "right" }}
          placeholder={placeholder}
          placeholderTextColor={COLORS.black}
        />
        {rightImageSource ? (
          <Image source={rightImageSource} style={styles.image} />
        ) : null}
      </View>
      {leftImageSource ? (
        <Image source={leftImageSource} style={styles.image} />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...globalStyles.alignCenter,
    justifyContent: "flex-end",
    paddingHorizontal: SMALL_SPACING,
    paddingVertical: SMALL_SPACING / 4,
    marginBottom: SMALL_SPACING,
    borderWidth: 1,
    borderRadius: SMALL_SPACING,
    borderColor: COLORS.lightMainColor,
    backgroundColor: COLORS.white,
  },
  fieldTitle: {
    ...TEXT_12,
    color: COLORS.mediumGray,
  },
  image: {
    marginLeft: SMALL_SPACING / 2,
  },
});

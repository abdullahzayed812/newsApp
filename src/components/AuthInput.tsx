import React, { Dispatch, SetStateAction } from "react";
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TextInput,
  View,
  ViewStyle,
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
  containerStyle?: ViewStyle;
  secureTextEntry?: boolean;
}

export const AuthInput: React.FC<Props> = ({
  leftImageSource,
  rightImageSource,
  fieldTitle,
  value,
  onChangeText,
  placeholder,
  containerStyle,
  secureTextEntry,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <View style={{ flex: 1 }}>
        {fieldTitle ? (
          <Text style={styles.fieldTitle}>{fieldTitle}</Text>
        ) : null}
        <TextInput
          value={value}
          onChangeText={onChangeText}
          style={{ padding: 0, textAlign: "right", color: COLORS.mainGray }}
          placeholder={placeholder}
          placeholderTextColor={COLORS.mediumGray}
          secureTextEntry={secureTextEntry}
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

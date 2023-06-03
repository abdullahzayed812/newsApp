import React, { Dispatch, SetStateAction } from "react";
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  TextInput,
  View,
  ViewStyle,
} from "react-native";
import { COLORS } from "../config/colors";
import { TEXT_14 } from "../config/fonts";

interface Props {
  rightImageSource?: ImageSourcePropType;
  placeholder?: string;
  containerStyle?: ViewStyle;
  inputStyle?: ViewStyle;
  multiline?: boolean;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}

export const Input: React.FC<Props> = ({
  rightImageSource,
  placeholder,
  containerStyle,
  multiline,
  inputStyle,
  value,
  setValue,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {rightImageSource ? (
        <Image source={rightImageSource} style={{ width: 20, height: 20 }} />
      ) : null}
      <TextInput
        placeholder={placeholder}
        style={[styles.input, inputStyle]}
        placeholderTextColor={COLORS.placeholder}
        multiline={multiline}
        value={value}
        onChangeText={(text) => setValue(text)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    paddingHorizontal: 15,
    borderRadius: 12,
    backgroundColor: COLORS.lightGray,
  },
  input: {
    ...TEXT_14,
    flex: 1,
  },
});

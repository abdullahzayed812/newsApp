import React from "react";
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  TextInput,
  View,
  ViewStyle,
} from "react-native";
import { COLORS } from "../../helpers/colors";
import { TEXT_14 } from "../../constants/fonts";

interface Props {
  rightImageSource?: ImageSourcePropType;
  placeholder: string;
  containerStyle?: ViewStyle;
}

export const Input: React.FC<Props> = ({
  rightImageSource,
  placeholder,
  containerStyle,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {rightImageSource ? (
        <Image source={rightImageSource} style={{ width: 20, height: 20 }} />
      ) : null}
      <TextInput
        placeholder={placeholder}
        style={styles.input}
        placeholderTextColor={COLORS.placeholder}
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

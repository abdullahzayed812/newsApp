import React from "react";
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
import { SMALL_SPACING } from "../../config/dimensions";
import { COLORS } from "../../config/colors";
import { globalStyles } from "../../config/globalStyles";
import { HEADER_2, HEADER_3 } from "../../config/fonts";

interface Props {
  buttonStyle?: ViewStyle;
  text: string;
  onPress: () => void;
  buttonImageSource?: ImageSourcePropType;
}

export const Button: React.FC<Props> = ({
  buttonStyle,
  text,
  onPress,
  buttonImageSource,
}) => {
  return (
    <TouchableOpacity style={[styles.container, buttonStyle]} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
      {buttonImageSource ? (
        <Image source={buttonImageSource} style={styles.image} />
      ) : null}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    ...globalStyles.center,
    flexDirection: "row",
    paddingVertical: SMALL_SPACING - 5,
    backgroundColor: COLORS.mainColor,
    borderRadius: SMALL_SPACING / 2,
  },
  text: {
    ...HEADER_2,
    color: COLORS.black,
  },
  image: {
    marginLeft: SMALL_SPACING / 2,
  },
});

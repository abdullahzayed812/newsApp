import { PropsWithChildren } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { SMALL_SPACING } from "../config/dimensions";
import { COLORS } from "../config/colors";

interface Props {
  containerStyle?: ViewStyle;
}

export const Container: React.FC<PropsWithChildren<Props>> = ({
  children,
  containerStyle,
}) => {
  return <View style={[styles.container, containerStyle]}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: SMALL_SPACING - 5,
    paddingVertical: SMALL_SPACING / 2,
    backgroundColor: COLORS.lightGray,
  },
});

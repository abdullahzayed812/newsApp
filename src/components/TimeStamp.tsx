import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { IMAGES } from "../config/images";
import { COLORS } from "../config/colors";
import { SMALL_SPACING } from "../config/dimensions";
import { TEXT_12 } from "../config/fonts";

interface Props {
  text: string;
  isCardComponent?: boolean;
}

export const TimeStamp: React.FC<Props> = ({ text, isCardComponent }) => {
  return (
    <View style={styles.container}>
      <Image source={IMAGES.clock} />
      <Text
        style={[
          styles.time,
          { color: isCardComponent ? COLORS.lightGray : COLORS.mediumGray },
        ]}
      >
        {text}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row-reverse",
    alignItems: "center",
    gap: SMALL_SPACING / 2,
  },
  time: {
    ...TEXT_12,
  },
});

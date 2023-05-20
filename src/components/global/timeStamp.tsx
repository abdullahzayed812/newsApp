import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { SMALL_SPACING } from "../../config/dimensions";
import { IMAGES } from "../../config/images";
import { TEXT_12 } from "../../config/fonts";
import { COLORS } from "../../config/colors";

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

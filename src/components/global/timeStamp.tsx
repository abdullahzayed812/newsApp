import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { SMALL_SPACING } from "../../constants/dimensions";
import { IMAGES } from "../../helpers/images";
import { TEXT_12 } from "../../constants/fonts";
import { COLORS } from "../../helpers/colors";

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
          { color: isCardComponent ? COLORS.lightGray : COLORS.mainGray },
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

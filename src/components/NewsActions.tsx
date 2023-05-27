import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { IMAGES } from "../config/images";
import { COLORS } from "../config/colors";
import { globalStyles } from "../config/globalStyles";
import { SMALL_SPACING } from "../config/dimensions";
import { TEXT_12 } from "../config/fonts";

interface Props {
  dark?: boolean;
}

export const NewsActions: React.FC<Props> = ({ dark }) => {
  const [activeIcon, setActiveIcon] = React.useState<boolean>(false);

  return (
    <View style={styles.container}>
      <Image source={dark ? IMAGES.moreDark : IMAGES.more} />
      <View style={styles.likeContainer}>
        <View style={styles.like}>
          <Text
            style={[styles.text, { color: dark ? COLORS.black : COLORS.white }]}
          >
            50
          </Text>
          <Image source={IMAGES.like} />
        </View>
        <View style={styles.like}>
          <Text style={styles.text}>10</Text>
          <Image source={IMAGES.dislike} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...globalStyles.justifyBetween,
    marginTop: SMALL_SPACING,
  },
  likeContainer: {
    ...globalStyles.justifyBetween,
    justifyContent: "flex-end",
    gap: SMALL_SPACING / 2,
  },
  like: {
    ...globalStyles.justifyBetween,
    justifyContent: "flex-end",
  },
  text: {
    ...TEXT_12,
    marginRight: SMALL_SPACING / 4,
  },
});

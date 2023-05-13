import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { globalStyles } from "../../helpers/globalStyles";
import { IMAGES } from "../../helpers/images";
import { TEXT_12 } from "../../constants/fonts";
import { COLORS } from "../../helpers/colors";
import { SMALL_SPACING } from "../../constants/dimensions";

interface Props {
  dark?: boolean;
}

export const NewsActions: React.FC<Props> = ({ dark }) => {
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
    ...globalStyles.rowBetween,
    marginTop: SMALL_SPACING,
  },
  likeContainer: {
    ...globalStyles.rowBetween,
    justifyContent: "flex-end",
    gap: SMALL_SPACING / 2,
  },
  like: {
    ...globalStyles.rowBetween,
    justifyContent: "flex-end",
  },
  text: {
    ...TEXT_12,
    marginRight: SMALL_SPACING / 4,
  },
});

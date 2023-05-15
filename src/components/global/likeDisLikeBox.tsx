import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { globalStyles } from "../../helpers/globalStyles";
import { IMAGES } from "../../helpers/images";
import { TEXT_12 } from "../../constants/fonts";
import { SMALL_SPACING } from "../../constants/dimensions";
import { COLORS } from "../../helpers/colors";

export const LikeDisLikeBox: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.like}>
        <Image source={IMAGES.like} />
        <Text style={styles.text}>50</Text>
      </View>
      <View style={styles.line} />
      <View style={styles.like}>
        <Text style={styles.text}>10</Text>
        <Image source={IMAGES.dislike} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: SMALL_SPACING / 4,
    paddingVertical: SMALL_SPACING / 1.5,
    paddingHorizontal: SMALL_SPACING,
    borderRadius: 30,
    backgroundColor: COLORS.mainGray,
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
  line: {
    width: 3,
    height: 30,
    backgroundColor: COLORS.mainGray,
  },
  text: {
    ...TEXT_12,
  },
});

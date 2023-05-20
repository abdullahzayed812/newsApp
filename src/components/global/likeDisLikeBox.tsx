import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { globalStyles } from "../../config/globalStyles";
import { IMAGES } from "../../config/images";
import { TEXT_12 } from "../../config/fonts";
import { SMALL_SPACING } from "../../config/dimensions";
import { COLORS } from "../../config/colors";

export const LikeDisLikeBox: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.like}>
        <Text style={styles.text}>10</Text>
        <TouchableOpacity>
          <Image source={IMAGES.dislike} />
        </TouchableOpacity>
      </View>
      <View style={styles.line} />
      <View style={styles.like}>
        <Text style={styles.text}>50</Text>
        <TouchableOpacity>
          <Image source={IMAGES.like} />
        </TouchableOpacity>
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
    paddingVertical: SMALL_SPACING / 2,
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
    backgroundColor: COLORS.mediumGray,
  },
  text: {
    ...TEXT_12,
    marginRight: SMALL_SPACING / 4,
    color: COLORS.lightGray,
  },
});

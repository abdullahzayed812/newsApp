import React from "react";
import { StyleSheet, View } from "react-native";
import { globalStyles } from "../../helpers/globalStyles";
import { IMAGES } from "../../helpers/images";
import { SMALL_SPACING } from "../../constants/dimensions";
import { NewsUserActionsItem } from "./newsUserActionsItem";
import { LikeDisLikeBox } from "./likeDisLikeBox";

interface Props {
  text?: boolean;
}

export const NewsUserActions: React.FC<Props> = ({ text }) => {
  return (
    <View style={styles.container}>
      <NewsUserActionsItem text="مشراكة" imageSource={IMAGES.share} />
      <NewsUserActionsItem text="تعليق" imageSource={IMAGES.share} />
      <LikeDisLikeBox />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...globalStyles.rowBetween,
    flexDirection: "row-reverse",
    paddingVertical: SMALL_SPACING / 2,
  },
});

import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View } from "react-native";
import { RootStackParamList } from "../navigation/types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { NewsUserActionsItem } from "./NewsUserActionsItem";
import { IMAGES } from "../config/images";
import { LikeDisLikeBox } from "./LikeDisLikeBox";
import { globalStyles } from "../config/globalStyles";
import { SMALL_SPACING } from "../config/dimensions";

interface Props {
  text?: boolean;
}

export const NewsUserActions: React.FC<Props> = ({ text }) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <NewsUserActionsItem text="مشراكة" imageSource={IMAGES.share2} />
      <NewsUserActionsItem
        text="تعليق"
        imageSource={IMAGES.message}
        onPress={() => navigation.navigate("CommentScreen")}
      />
      <LikeDisLikeBox />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...globalStyles.justifyBetween,
    flexDirection: "row-reverse",
    justifyContent: "space-around",
    paddingVertical: SMALL_SPACING / 2,
  },
});

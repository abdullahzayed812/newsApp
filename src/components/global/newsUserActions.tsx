import React from "react";
import { StyleSheet, View } from "react-native";
import { globalStyles } from "../../config/globalStyles";
import { IMAGES } from "../../config/images";
import { SMALL_SPACING } from "../../config/dimensions";
import { NewsUserActionsItem } from "./newsUserActionsItem";
import { LikeDisLikeBox } from "./likeDisLikeBox";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/types";

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
    ...globalStyles.rowBetween,
    flexDirection: "row-reverse",
    justifyContent: "space-around",
    paddingVertical: SMALL_SPACING / 2,
  },
});

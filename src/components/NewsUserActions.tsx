import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Modal, Share, StyleSheet, View } from "react-native";
import { RootStackParamList } from "../navigation/types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { NewsUserActionsItem } from "./NewsUserActionsItem";
import { IMAGES } from "../config/images";
import { LikeDisLikeBox } from "./LikeDisLikeBox";
import { globalStyles } from "../config/globalStyles";
import { SMALL_SPACING } from "../config/dimensions";
import { ShareModal } from "./ShareModal";

interface Props {
  newsID: number | undefined;
  newsLikes: number | undefined;
  newsDislikes: number | undefined;
  comments: [];
  twitter: string;
  whatsapp: string;
  telegram: string;
}

export const NewsUserActions: React.FC<Props> = ({
  newsID,
  newsLikes,
  newsDislikes,
  comments,
}) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const [showShareModal, setShowShareModal] = React.useState<boolean>(false);

  return (
    <View style={styles.container}>
      <NewsUserActionsItem
        text="مشراكة"
        imageSource={IMAGES.share2}
        onPress={() => setShowShareModal(true)}
      />
      <NewsUserActionsItem
        text="تعليق"
        imageSource={IMAGES.message}
        onPress={() =>
          navigation.navigate("CommentScreen", { comments, newsID })
        }
      />
      <LikeDisLikeBox
        likes={newsLikes}
        dislikes={newsDislikes}
        newsID={newsID}
      />
      <ShareModal isOpen={showShareModal} setIsOpen={setShowShareModal} />
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

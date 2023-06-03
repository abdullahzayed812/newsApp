import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { IMAGES } from "../config/images";
import { SMALL_SPACING } from "../config/dimensions";
import { COLORS } from "../config/colors";
import { globalStyles } from "../config/globalStyles";
import { TEXT_12 } from "../config/fonts";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { instance } from "../config/api";
import {
  DECREMENT_POST_LIKE_ENDPOINT_URL,
  INCREMENT_POST_LIKE_ENDPOINT_URL,
} from "../config/urls";
import { saveDislikesCount, saveLikesCount } from "../redux/likesDislikes";

interface Props {
  likes: number | undefined;
  dislikes: number | undefined;
  newsID: number | undefined;
}

export const LikeDisLikeBox: React.FC<Props> = ({
  likes,
  dislikes,
  newsID,
}) => {
  const dispatch = useAppDispatch();

  const { likesCount, dislikesCount } = useAppSelector(
    (state) => state.likesDislikes,
  );

  const [isLike, setIsLike] = React.useState<boolean>(false);
  const [isDislike, setIsDislike] = React.useState<boolean>(false);

  const onLikeDislikePress = async (buttonName: string) => {
    if (buttonName === "like") {
      if (likes !== likesCount) {
        if (!isLike) {
          setIsLike(true);
          dispatch(saveLikesCount(likes! + 1));
          await instance.post(`${INCREMENT_POST_LIKE_ENDPOINT_URL}${newsID}`);
        }
      }
    } else {
      if (dislikes !== dislikesCount) {
        if (!isDislike) {
          setIsDislike(true);
          dispatch(saveDislikesCount(dislikes! + 1));
          await instance.post(`${DECREMENT_POST_LIKE_ENDPOINT_URL}${newsID}`);
        }
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.like}>
        <Text style={styles.text}>{isDislike ? dislikes! + 1 : dislikes}</Text>
        <TouchableOpacity onPress={() => onLikeDislikePress("dislike")}>
          <Image source={IMAGES.dislike} />
        </TouchableOpacity>
      </View>
      <View style={styles.line} />
      <View style={styles.like}>
        <Text style={styles.text}>{isLike ? likes! + 1 : likes}</Text>
        <TouchableOpacity onPress={() => onLikeDislikePress("like")}>
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
    ...globalStyles.justifyBetween,
    justifyContent: "flex-end",
    gap: SMALL_SPACING / 2,
  },
  like: {
    ...globalStyles.justifyBetween,
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

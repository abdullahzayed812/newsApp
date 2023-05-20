import React from "react";
import { HeaderBackButton } from "../../components/global/headerBackButton";
import { Comment } from "../../components/global/comment";
import { ScrollView, StyleSheet } from "react-native";
import { Button } from "../../components/global/button";
import { SMALL_SPACING } from "../../config/dimensions";
import { IMAGES } from "../../config/images";
import { CommentModal } from "../../components/global/commentModal";

interface CommentListItemProp {
  username: string;
  timeStamp: string;
  content: string;
}

export const CommentScreen: React.FC = () => {
  const [showCommentModal, setShowCommentModal] =
    React.useState<boolean>(false);
  const [comment, setComment] = React.useState<string>("");

  const COMMENT_LIST_DATA: CommentListItemProp[] = [
    {
      username: "حسين ناصر",
      timeStamp: "15 دقيقة",
      content:
        "ما دام رئيس التحرير بالصحيفة الاعلامي أحمد الخبراني .. الصحيفة راح تنافس ويكون لها حضور مميز.. الله يوفقكم.",
    },
    {
      username: "محمد مشرف",
      timeStamp: "15 دقيقة",
      content:
        "ما دام رئيس التحرير بالصحيفة الاعلامي أحمد الخبراني .. الصحيفة راح تنافس ويكون لها حضور مميز.. الله يوفقكم.",
    },
    {
      username: "محمد الشريق",
      timeStamp: "15 دقيقة",
      content:
        "ما دام رئيس التحرير بالصحيفة الاعلامي أحمد الخبراني .. الصحيفة راح تنافس ويكون لها حضور مميز.. الله يوفقكم.",
    },
    {
      username: "أسامة الزيرو",
      timeStamp: "15 دقيقة",
      content:
        "ما دام رئيس التحرير بالصحيفة الاعلامي أحمد الخبراني .. الصحيفة راح تنافس ويكون لها حضور مميز.. الله يوفقكم.",
    },
    {
      username: "محمد الدسوقي",
      timeStamp: "15 دقيقة",
      content:
        "ما دام رئيس التحرير بالصحيفة الاعلامي أحمد الخبراني .. الصحيفة راح تنافس ويكون لها حضور مميز.. الله يوفقكم.",
    },
    {
      username: "اسلام هشام",
      timeStamp: "15 دقيقة",
      content:
        "ما دام رئيس التحرير بالصحيفة الاعلامي أحمد الخبراني .. الصحيفة راح تنافس ويكون لها حضور مميز.. الله يوفقكم.",
    },
    {
      username: "حسين ناصر",
      timeStamp: "15 دقيقة",
      content:
        "ما دام رئيس التحرير بالصحيفة الاعلامي أحمد الخبراني .. الصحيفة راح تنافس ويكون لها حضور مميز.. الله يوفقكم.",
    },
  ];

  return (
    <>
      <HeaderBackButton title="التعليقات" />
      <ScrollView contentContainerStyle={{ paddingBottom: SMALL_SPACING * 4 }}>
        {COMMENT_LIST_DATA.map(({ username, timeStamp, content }, index) => (
          <Comment
            key={index}
            username={username}
            timeStamp={timeStamp}
            content={content}
          />
        ))}
      </ScrollView>
      <Button
        text="إضافة تعليق"
        buttonStyle={styles.button}
        buttonImageSource={IMAGES.messageAdd}
        onPress={() => setShowCommentModal(true)}
      />
      <CommentModal
        comment={comment}
        setComment={setComment}
        isOpen={showCommentModal}
        setIsOpen={setShowCommentModal}
      />
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    bottom: SMALL_SPACING,
    width: "85%",
    alignSelf: "center",
  },
});

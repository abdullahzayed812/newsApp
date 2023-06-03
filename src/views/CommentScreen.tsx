import React from "react";
import { HeaderBackButton } from "../components/HeaderButtonBack";
import { ScrollView, StyleSheet, Text } from "react-native";
import { SMALL_SPACING } from "../config/dimensions";
import { Comment } from "../components/Comment";
import { Button } from "../components/Button";
import { IMAGES } from "../config/images";
import { CommentModal } from "../components/CommentModal";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../navigation/types";
import { TEXT_12 } from "../config/fonts";

export interface CommentListItemProp {
  name: string;
  comment: string;
  created_at: string;
}

interface Props {
  route: RouteProp<RootStackParamList, "CommentScreen">;
}

export const CommentScreen: React.FC<Props> = ({ route }) => {
  const [commentsList, setCommentsList] = React.useState<CommentListItemProp[]>(
    [],
  );

  const [showCommentModal, setShowCommentModal] =
    React.useState<boolean>(false);
  const [commentValue, setCommentValue] = React.useState<string>("");

  const { comments, newsID } = route.params;

  React.useEffect(() => {
    setCommentsList(comments);
  }, []);

  return (
    <>
      <HeaderBackButton title="التعليقات" />
      <ScrollView contentContainerStyle={{ paddingBottom: SMALL_SPACING * 4 }}>
        {commentsList.length > 0 ? (
          commentsList.map(({ name, comment, created_at }, index) => (
            <Comment
              key={index}
              username={name}
              timeStamp={created_at}
              content={comment}
            />
          ))
        ) : (
          <Text
            style={{
              ...TEXT_12,
              textAlign: "center",
              marginBottom: SMALL_SPACING,
            }}
          >
            No Comments...
          </Text>
        )}
      </ScrollView>
      <Button
        text="إضافة تعليق"
        buttonStyle={styles.button}
        buttonImageSource={IMAGES.messageAdd}
        onPress={() => setShowCommentModal(true)}
      />
      <CommentModal
        commentsList={commentsList}
        setCommentsList={setCommentsList}
        newsID={newsID}
        comment={commentValue}
        setComment={setCommentValue}
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

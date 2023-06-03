import React, { Dispatch, SetStateAction } from "react";
import { Dimensions, Modal, StyleSheet, Text, View } from "react-native";
import { CommentModalHeader } from "./CommentModalHeader";
import { Input } from "./Input";
import { Button } from "./Button";
import { COLORS } from "../config/colors";
import { SMALL_SPACING } from "../config/dimensions";
import { TEXT_12 } from "../config/fonts";
import { loadUserData, updateError } from "../config/helpers";
import { CommentListItemProp } from "../views/CommentScreen";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/types";
import { instance } from "../config/api";
import { SAVE_COMMENT_ENDPOINT_URL } from "../config/urls";

interface Props {
  comment: string;
  isOpen: boolean;
  setComment: Dispatch<SetStateAction<string>>;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  newsID: number | undefined;
  commentsList: CommentListItemProp[];
  setCommentsList: Dispatch<SetStateAction<CommentListItemProp[]>>;
}

export const CommentModal: React.FC<Props> = ({
  comment,
  setComment,
  isOpen,
  setIsOpen,
  newsID,
  commentsList,
  setCommentsList,
}) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [user, setUser] = React.useState<{
    id: number | undefined;
    first_name: string;
    last_name: string;
    email: string;
  }>({
    id: undefined,
    first_name: "",
    last_name: "",
    email: "",
  });
  const [error, setError] = React.useState<string>("");

  React.useEffect(() => {
    (async () => {
      const user = await loadUserData();
      setUser(user);
    })();
  }, []);

  const handleAddCommentPress = async () => {
    if (!comment) {
      updateError("Empty Comment!", setError);
    } else {
      // check if user is logged in
      if (!user?.email) {
        navigation.navigate("AuthStackScreen", { screen: "SignInUpScreen" });
        return;
      }
      setIsOpen(false);
      setCommentsList([
        ...commentsList,
        {
          name: `${user.first_name}${user.last_name}`,
          comment,
          created_at: "Now",
        },
      ]);
      // save comment in database
      try {
        await instance.post(SAVE_COMMENT_ENDPOINT_URL, {
          newsID,
          name: user.first_name,
          email: user.email,
          comment,
        });
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <Modal visible={isOpen} animationType="slide" transparent>
      <View style={styles.overlay}>
        <View style={styles.container}>
          <CommentModalHeader setShowCommentModal={setIsOpen} />
          {error ? <Text style={styles.error}>{error}</Text> : null}
          <Input
            value={comment}
            setValue={setComment}
            containerStyle={styles.inputContainer}
            inputStyle={styles.input}
            multiline
          />
          <Button
            text="تأكيد"
            buttonStyle={styles.button}
            onPress={handleAddCommentPress}
          />
        </View>
      </View>
    </Modal>
  );
};

const { width, height } = Dimensions.get("screen");

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: COLORS.lightBlack,
  },
  container: {
    paddingVertical: SMALL_SPACING / 2,
    paddingHorizontal: SMALL_SPACING,
    width: width * 0.95,
    alignSelf: "center",
    position: "absolute",
    bottom: 0,
    borderTopLeftRadius: SMALL_SPACING,
    borderTopRightRadius: SMALL_SPACING,
    backgroundColor: COLORS.white,
  },
  error: {
    ...TEXT_12,
    textAlign: "center",
    color: "red",
  },
  inputContainer: {
    alignItems: "flex-start",
    height: height * 0.3,
    backgroundColor: COLORS.commentInput,
  },
  input: {
    paddingBottom: SMALL_SPACING * 3,
  },
  button: {
    alignSelf: "center",
    width: width * 0.7,
    marginVertical: 20,
  },
});

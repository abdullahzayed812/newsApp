import React, { Dispatch, SetStateAction } from "react";
import { Dimensions, Modal, StyleSheet, View } from "react-native";
import { CommentModalHeader } from "./CommentModalHeader";
import { Input } from "./Input";
import { Button } from "./Button";
import { COLORS } from "../config/colors";
import { SMALL_SPACING } from "../config/dimensions";

interface Props {
  comment: string;
  isOpen: boolean;
  setComment: Dispatch<SetStateAction<string>>;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const CommentModal: React.FC<Props> = ({
  comment,
  setComment,
  isOpen,
  setIsOpen,
}) => {
  return (
    <Modal visible={isOpen} animationType="slide" transparent>
      <View style={styles.overlay}>
        <View style={styles.container}>
          <CommentModalHeader setShowCommentModal={setIsOpen} />
          <Input
            multiline
            containerStyle={styles.inputContainer}
            inputStyle={styles.input}
          />
          <Button
            text="تأكيد"
            buttonStyle={styles.button}
            onPress={() => setIsOpen(false)}
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
    height: height * 0.7,
    transform: [{ translateY: height * 0.2 }],
    borderTopLeftRadius: SMALL_SPACING,
    borderTopRightRadius: SMALL_SPACING,
    backgroundColor: COLORS.white,
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
    marginTop: height * 0.2,
  },
});

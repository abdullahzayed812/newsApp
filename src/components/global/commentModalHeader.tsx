import React, { Dispatch, SetStateAction } from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { IMAGES } from "../../config/images";
import { TEXT_14 } from "../../config/fonts";
import { SMALL_SPACING } from "../../config/dimensions";

interface Props {
  setShowCommentModal: Dispatch<SetStateAction<boolean>>;
}

export const CommentModalHeader: React.FC<Props> = ({
  setShowCommentModal,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>إضافة تعليق</Text>
      <TouchableOpacity onPress={() => setShowCommentModal(false)}>
        <Image source={IMAGES.close} />
      </TouchableOpacity>
    </View>
  );
};

const { width } = Dimensions.get("screen");

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: SMALL_SPACING,
  },
  text: {
    ...TEXT_14,
    marginRight: width * 0.3,
  },
});

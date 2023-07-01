import React, { Dispatch, SetStateAction } from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { IMAGES } from "../config/images";
import { SMALL_SPACING } from "../config/dimensions";
import { TEXT_14 } from "../config/fonts";

interface Props {
  setShowModal: Dispatch<SetStateAction<boolean>>;
  title: string;
  shareModal?: boolean;
}

export const ModalHeader: React.FC<Props> = ({
  setShowModal,
  title,
  shareModal,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      {!shareModal ? (
        <TouchableOpacity onPress={() => setShowModal(false)}>
          <Image source={IMAGES.close} />
        </TouchableOpacity>
      ) : null}
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

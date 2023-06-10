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
}

export const ModalHeader: React.FC<Props> = ({ setShowModal, title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      <TouchableOpacity onPress={() => setShowModal(false)}>
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

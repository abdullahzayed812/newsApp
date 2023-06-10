import React, { Dispatch, SetStateAction } from "react";
import { Dimensions, Modal, StyleSheet, View } from "react-native";
import { ModalHeader } from "./ModalHeader";
import { COLORS } from "../config/colors";
import { SMALL_SPACING } from "../config/dimensions";
import { IMAGES } from "../config/images";
import { globalStyles } from "../config/globalStyles";
import { SocialItem } from "./SocialItem";

interface Props {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const ShareModal: React.FC<Props> = ({ isOpen, setIsOpen }) => {
  return (
    <Modal visible={isOpen} animationType="slide" transparent>
      <View style={styles.overlay}>
        <View style={styles.container}>
          <ModalHeader setShowModal={setIsOpen} title="شارك الخبر على" />
          <View style={styles.socialContainer}>
            <SocialItem onPress={() => {}} image={IMAGES.facebook} />
            <SocialItem onPress={() => {}} image={IMAGES.twitter} />
            <SocialItem onPress={() => {}} image={IMAGES.telegram} />
            <SocialItem onPress={() => {}} image={IMAGES.whatsapp} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const { width } = Dimensions.get("window");

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
  socialContainer: {
    ...globalStyles.justifyBetween,
  },
});

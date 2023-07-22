import React, { Dispatch, SetStateAction } from "react";
import {
  Dimensions,
  Linking,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { ModalHeader } from "./ModalHeader";
import { COLORS } from "../config/colors";
import { SMALL_SPACING } from "../config/dimensions";
import { useAppSelector } from "../redux/hooks";
import { Toast } from "react-native-toast-message/lib/src/Toast";

interface Props {
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
}

export const ShareAppModal: React.FC<Props> = ({ showModal, setShowModal }) => {
  const { settings } = useAppSelector((state) => state.settings);

  const shareApp = async (type: string) => {
    const shareURL =
      type === "android" ? settings.android_link : settings.ios_link;

    try {
      const canOpen = await Linking.canOpenURL(shareURL);

      if (canOpen) return Linking.openURL(shareURL);
    } catch (error) {
      Toast.show({ type: "error", text1: "URL not valid" });
    }
  };

  return (
    <Modal visible={showModal} animationType="slide" transparent>
      <Pressable style={styles.overlay} onPress={() => setShowModal(false)}>
        <Pressable style={styles.container}>
          <ModalHeader
            setShowModal={setShowModal}
            title="شارك التطبيق"
            shareModal
          />
          <TouchableOpacity onPress={() => shareApp("android")}>
            <Text>Android</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => shareApp("ios")}>
            <Text>ios</Text>
          </TouchableOpacity>
        </Pressable>
      </Pressable>
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
});

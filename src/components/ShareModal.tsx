import React, { Dispatch, SetStateAction } from "react";
import {
  Dimensions,
  Linking,
  Modal,
  Pressable,
  StyleSheet,
  TouchableHighlight,
  View,
} from "react-native";
import { ModalHeader } from "./ModalHeader";
import { COLORS } from "../config/colors";
import { SMALL_SPACING } from "../config/dimensions";
import { IMAGES } from "../config/images";
import { globalStyles } from "../config/globalStyles";
import { SocialItem } from "./SocialItem";
import { useAppSelector } from "../redux/hooks";

interface Props {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const ShareModal: React.FC<Props> = ({ isOpen, setIsOpen }) => {
  const { singleNews } = useAppSelector((state) => state.singleNews);

  const shareNews = async (url: string) => {
    try {
      await Linking.openURL(url);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal visible={isOpen} animationType="slide" transparent>
      <Pressable style={styles.overlay} onPress={() => setIsOpen(false)}>
        <Pressable style={styles.container}>
          <ModalHeader
            setShowModal={setIsOpen}
            title="شارك الخبر على"
            shareModal
          />
          <View style={styles.socialContainer}>
            <SocialItem
              onPress={() => shareNews(singleNews?.facebook)}
              image={IMAGES.facebook}
            />
            <SocialItem
              onPress={() => shareNews(singleNews?.twitter)}
              image={IMAGES.twitter}
            />
            <SocialItem
              onPress={() => shareNews(singleNews?.telegram)}
              image={IMAGES.telegram}
            />
            <SocialItem
              onPress={() => shareNews(singleNews?.whatsapp)}
              image={IMAGES.whatsapp}
            />
          </View>
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
  socialContainer: {
    ...globalStyles.justifyBetween,
  },
});

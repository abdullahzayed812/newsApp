import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import { IMAGES } from "../config/images";
import { SMALL_SPACING } from "../config/dimensions";
import { TEXT_16 } from "../config/fonts";

interface Props {
  onPress?: () => void;
}

export const UserInfo: React.FC<Props> = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={IMAGES.user} />

      <Text style={styles.text}>انقر لتسجيل الدخول</Text>
      <Image source={IMAGES.arrowLeft} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row-reverse",
    alignItems: "center",
    marginBottom: SMALL_SPACING,
  },
  text: {
    ...TEXT_16,
    marginHorizontal: SMALL_SPACING,
  },
});

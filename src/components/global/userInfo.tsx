import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import { IMAGES } from "../../config/images";
import { SMALL_SPACING } from "../../config/dimensions";
import { TEXT_16 } from "../../config/fonts";

export const UserInfo: React.FC = () => {
  return (
    <TouchableOpacity style={styles.container}>
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

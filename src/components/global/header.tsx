import { Dimensions, Image, StyleSheet, View } from "react-native";
import { Input } from "./input";
import { IMAGES } from "../../config/images";
import { globalStyles } from "../../config/globalStyles";
import { COLORS } from "../../config/colors";

export const Header: React.FC = () => {
  return (
    <View style={styles.container}>
      <Input
        placeholder="ابحث عن خبر"
        rightImageSource={IMAGES.search}
        containerStyle={styles.inputContainer}
      />
      <Image source={IMAGES.logo} />
    </View>
  );
};

const { width } = Dimensions.get("screen");

const styles = StyleSheet.create({
  container: {
    ...globalStyles.rowBetween,
    padding: 15,
    backgroundColor: COLORS.white,
  },
  inputContainer: {
    width: width * 0.63,
  },
});

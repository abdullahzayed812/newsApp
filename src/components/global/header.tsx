import { Dimensions, Image, StyleSheet, View } from "react-native";
import { Input } from "./input";
import { IMAGES } from "../../helpers/images";
import { globalStyles } from "../../helpers/globalStyles";
import { COLORS } from "../../helpers/colors";

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

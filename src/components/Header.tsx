import { Dimensions, Image, StyleSheet, View } from "react-native";
import { Input } from "./Input";
import { IMAGES } from "../config/images";
import { globalStyles } from "../config/globalStyles";
import { COLORS } from "../config/colors";
import React from "react";

export const Header: React.FC = () => {
  const [search, setSearch] = React.useState<string>("");

  return (
    <View style={styles.container}>
      <Input
        placeholder="ابحث عن خبر"
        rightImageSource={IMAGES.search}
        containerStyle={styles.inputContainer}
        value={search}
        setValue={setSearch}
      />
      <Image source={IMAGES.logo} />
    </View>
  );
};

const { width } = Dimensions.get("screen");

const styles = StyleSheet.create({
  container: {
    ...globalStyles.justifyBetween,
    padding: 15,
    backgroundColor: COLORS.white,
  },
  inputContainer: {
    width: width * 0.63,
  },
});

import React from "react";
import { Input } from "../components/Input";
import { Container } from "../components/Container";
import { IMAGES } from "../config/images";
import { Dimensions, Image, StyleSheet, View } from "react-native";
import { SMALL_SPACING } from "../config/dimensions";
import { globalStyles } from "../config/globalStyles";
import { COLORS } from "../config/colors";

export const SearchScreen: React.FC = () => {
  const [search, setSearch] = React.useState<string>("");
  return (
    <>
      <View style={styles.container}>
        <Input
          placeholder="ابحث عن خبر"
          rightImageSource={IMAGES.search}
          containerStyle={styles.inputContainer}
          value={search}
          setValue={setSearch}
        />
        <Image source={IMAGES.logo} style={{ marginLeft: SMALL_SPACING / 2 }} />
      </View>
      <Container containerStyle={{ backgroundColor: COLORS.white }}></Container>
    </>
  );
};

const { width } = Dimensions.get("window");

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

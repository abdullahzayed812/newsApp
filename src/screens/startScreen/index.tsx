import React from "react";
import {
  Dimensions,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { IMAGES } from "../../helpers/images";
import { globalStyles } from "../../helpers/globalStyles";
import { COLORS } from "../../helpers/colors";
import LinearGradient from "react-native-linear-gradient";
import { GreetingBox } from "../../components/startScreenComponents/greeting";
import { SMALL_SPACING } from "../../constants/dimensions";
import { Category } from "../../components/global/category";
import { Button } from "../../components/global/button";

export const StartScreen: React.FC = () => {
  return (
    <ImageBackground
      source={IMAGES.startScreenBg}
      style={globalStyles.pageContainer}
    >
      <StatusBar backgroundColor="#00211C" />
      <LinearGradient
        colors={[
          // COLORS.startScreenGradient.color1,
          "#00211C",
          COLORS.startScreenGradient.color2,
        ]}
        style={styles.overlay}
      >
        <GreetingBox />
        <View style={styles.categoryContainer}>
          <Category text="المحليات" />
          <Category text="السياسه" />
          <Category text="الرياضة" />
          <Category text="الإقتصاد" />
          <Category text="الإقتصاد" />
          <Category text="الثقافة" />
          <Category text="المجتمع" />
          <Category text="أخر الأخبار" />
        </View>
        <Button text="إبدا الأن" buttonStyle={styles.button} />
      </LinearGradient>
    </ImageBackground>
  );
};

const { width, height } = Dimensions.get("screen");

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    width,
    height,
    backgroundColor: COLORS.lightBlack,
  },
  categoryContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-end",
    gap: 10,
    paddingLeft: SMALL_SPACING * 8,
    paddingRight: SMALL_SPACING,
  },
  button: {
    width: 350,
    alignSelf: "center",
    marginTop: 150,
  },
});

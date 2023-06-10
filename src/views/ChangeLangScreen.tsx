import React from "react";
import { StatusBar, View, useWindowDimensions } from "react-native";
import { SMALL_SPACING } from "../config/dimensions";
import { COLORS } from "../config/colors";
import LinearGradient from "react-native-linear-gradient";
import { HeaderBackButton } from "../components/HeaderButtonBack";
import { IMAGES } from "../config/images";
import { ChooseLangItem } from "../components/ChooseLangItem";

export const ChangeLangScreen: React.FC = () => {
  const { width, height } = useWindowDimensions();

  return (
    <>
      <StatusBar backgroundColor={COLORS.statusBar} barStyle="dark-content" />
      <LinearGradient
        colors={[
          COLORS.statusBar,
          COLORS.lightGradient.color1,
          COLORS.lightGradient.color2,
        ]}
        start={{ x: 0.1, y: 0.0 }}
        end={{ x: 0.8, y: 1 }}
        locations={[0.04, 0.5, 1]}
        style={{ width, height }}
      >
        <HeaderBackButton title="تغير اللغة" />
        <View style={{ padding: SMALL_SPACING }}>
          <ChooseLangItem
            text="العربية"
            flagImage={IMAGES.arabic}
            selectedImage={IMAGES.true}
          />
          <ChooseLangItem text="English" flagImage={IMAGES.english} />
        </View>
      </LinearGradient>
    </>
  );
};

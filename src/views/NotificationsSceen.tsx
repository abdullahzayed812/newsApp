import React from "react";
import LinearGradient from "react-native-linear-gradient";
import { ScrollView, StatusBar, useWindowDimensions } from "react-native";
import { COLORS } from "../config/colors";
import { LARGE_SPACING } from "../config/dimensions";
import { HeaderBackButton } from "../components/HeaderButtonBack";

export const NotificationScreen: React.FC = () => {
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
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: LARGE_SPACING }}
        >
          <HeaderBackButton title="الإشعارات" />
        </ScrollView>
      </LinearGradient>
    </>
  );
};

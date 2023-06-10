import React from "react";
import { ScrollView, StatusBar, View, useWindowDimensions } from "react-native";
import { LARGE_SPACING, SMALL_SPACING } from "../config/dimensions";
import { COLORS } from "../config/colors";
import LinearGradient from "react-native-linear-gradient";
import { HeaderBackButton } from "../components/HeaderButtonBack";
import { Container } from "../components/Container";
import { IMAGES } from "../config/images";
import { SettingsItem } from "../components/SettingsItem";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ProfileStackScreenParamsList } from "../navigation/types";

export const SettingsScreen: React.FC = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<ProfileStackScreenParamsList>>();

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
        <HeaderBackButton title="الإعدادات" />
        <View style={{ padding: SMALL_SPACING }}>
          <SettingsItem
            text="تغير كلمة المرور"
            image={IMAGES.refresh}
            onPress={() => navigation.navigate("UpdatePasswordScreen")}
          />
          <SettingsItem
            text="تغيير اللغة"
            image={IMAGES.lang}
            onPress={() => navigation.navigate("ChangeLangScreen")}
          />
        </View>
      </LinearGradient>
    </>
  );
};

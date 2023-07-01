import React from "react";
import LinearGradient from "react-native-linear-gradient";
import { COLORS } from "../config/colors";
import { Image, StatusBar, useWindowDimensions } from "react-native";
import { IMAGES } from "../config/images";
import { globalStyles } from "../config/globalStyles";
import { useAppDispatch } from "../redux/hooks";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getSettings } from "../redux/settings/settingsSlice";

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamList, "SplashScreen">;
}

export const SplashScreen: React.FC<Props> = ({ navigation }) => {
  const dispatch = useAppDispatch();

  const { width } = useWindowDimensions();

  React.useEffect(() => {
    (async () => {
      await getSettings(dispatch);
    })();
  }, []);

  React.useEffect(() => {
    const checkVisiting = async () => {
      const firstVisiting = await AsyncStorage.getItem("firstVisitingStatus");
      if (!firstVisiting) {
        navigation.navigate("StartScreen");
      } else {
        navigation.navigate("TabStackScreen", {
          screen: "MainStackScreen",
          params: { screen: "MainScreen" },
        });
      }
    };

    const timerID = setTimeout(checkVisiting, 2000);
    return () => clearTimeout(timerID);
  }, []);

  return (
    <>
      <StatusBar backgroundColor={COLORS.statusBar} />
      <LinearGradient
        colors={[
          COLORS.statusBar,
          COLORS.lightGradient.color1,
          COLORS.lightGradient.color2,
        ]}
        start={{ x: 0.1, y: 0.0 }}
        end={{ x: 0.8, y: 1 }}
        locations={[0.04, 0.5, 1]}
        style={{ ...globalStyles.center, width, flex: 1 }}
      >
        <Image source={IMAGES.logo} />
      </LinearGradient>
    </>
  );
};

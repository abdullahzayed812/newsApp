import React from "react";
import {
  Dimensions,
  ImageBackground,
  StatusBar,
  StyleSheet,
  ToastAndroid,
  View,
} from "react-native";
import { IMAGES } from "../../config/images";
import { globalStyles } from "../../config/globalStyles";
import { COLORS } from "../../config/colors";
import LinearGradient from "react-native-linear-gradient";
import { GreetingBox } from "../../components/startScreenComponents/greeting";
import { SMALL_SPACING } from "../../config/dimensions";
import { Category } from "../../components/global/category";
import { Button } from "../../components/global/button";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/types";
import { Toast } from "react-native-toast-message/lib/src/Toast";

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamList>;
}

const CATEGORIES: string[] = [
  "المحليات",
  "السياسه",
  "الرياضة",
  "الإقتصاد",
  "الإقتصاد",
  "الثقافة",
  "المجتمع",
  "أخر الأخبار",
];

export const StartScreen: React.FC<Props> = ({ navigation }) => {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState<
    number | undefined
  >(undefined);

  const handleStartNowPress = () => {
    console.log("start now pressed");
    if (selectedCategoryIndex) {
      navigation.reset({ routes: [{ name: "TabStackScreen" }] });
    } else {
      Toast.show({ type: "error", text1: "إختر تصنيفاً إخبارياً أولاً" });
    }
  };

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
          {CATEGORIES.map((category, index) => (
            <Category
              key={index}
              text={category}
              index={index}
              setSelectedCategoryIndex={setSelectedCategoryIndex}
              selectedCategoryIndex={selectedCategoryIndex}
            />
          ))}
        </View>
        <Button
          text="إبدا الأن"
          buttonStyle={styles.button}
          onPress={handleStartNowPress}
        />
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
    width: "90%",
    alignSelf: "center",
    transform: [{ translateY: height * 0.15 }],
  },
});

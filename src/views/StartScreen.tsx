import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import {
  Dimensions,
  ImageBackground,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";
import { RootStackParamList } from "../navigation/types";
import { IMAGES } from "../config/images";
import { globalStyles } from "../config/globalStyles";
import LinearGradient from "react-native-linear-gradient";
import { Button } from "../components/Button";
import { Category } from "../components/Category";
import { GreetingBox } from "../components/Greeting";
import { COLORS } from "../config/colors";
import { SMALL_SPACING } from "../config/dimensions";
import { useAppSelector } from "../redux/hooks";
import { getAllCategories } from "../redux/categories/categoriesSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamList>;
}

export const StartScreen: React.FC<Props> = ({ navigation }) => {
  const { categories } = useAppSelector(getAllCategories);

  React.useEffect(() => {
    (async () => {
      await AsyncStorage.setItem("firstVisitingStatus", "true");
    })();
  }, []);

  const handleStartNowPress = () => {
    navigation.reset({ routes: [{ name: "TabStackScreen" }] });
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
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            gap: 20,
            alignItems: "flex-end",
          }}
        >
          <GreetingBox />
          <View style={styles.categoryContainer}>
            {categories.map((category, index) => (
              <Category
                index={index + 1}
                key={`${category.id}-${category.key}`}
                text={category.name}
                isStartScreen
              />
            ))}
          </View>
          <Button
            text="إبدا الأن"
            buttonStyle={styles.button}
            onPress={handleStartNowPress}
          />
        </View>
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
    width: width * 0.7,
    flexDirection: "row-reverse",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    gap: 10,
  },
  button: {
    width: "90%",
    alignSelf: "center",
    marginTop: SMALL_SPACING * 2,
  },
});

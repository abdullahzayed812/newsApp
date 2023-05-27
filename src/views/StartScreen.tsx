import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import {
  Dimensions,
  FlatList,
  ImageBackground,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import { RootStackParamList } from "../navigation/types";
import { IMAGES } from "../config/images";
import { globalStyles } from "../config/globalStyles";
import LinearGradient from "react-native-linear-gradient";
import { Button } from "../components/Button";
import { Category } from "../components/Category";
import { GreetingBox } from "../components/Greeting";
import { COLORS } from "../config/colors";
import { SMALL_SPACING } from "../config/dimensions";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import {
  getAllCategories,
  getCategories,
} from "../redux/categories/categoriesSlice";
import { Loading } from "../components/Loading";

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamList>;
}

export const StartScreen: React.FC<Props> = ({ navigation }) => {
  const dispatch = useAppDispatch();

  const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState<
    number | undefined
  >(undefined);

  React.useEffect(() => {
    (async () => await getCategories(dispatch))();
  }, []);

  const { loading: loadingCategories, categories } =
    useAppSelector(getAllCategories);

  const handleStartNowPress = () => {
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
          {loadingCategories ? (
            <Loading />
          ) : (
            categories.map((category, index) => (
              <Category
                index={index}
                key={`${category.id}-${category.key}`}
                text={category.name}
                selectedCategoryIndex={selectedCategoryIndex}
                onPress={setSelectedCategoryIndex}
              />
            ))
          )}
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
    marginTop: SMALL_SPACING * 2,
  },
});

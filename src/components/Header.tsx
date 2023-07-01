import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { IMAGES } from "../config/images";
import { globalStyles } from "../config/globalStyles";
import { COLORS } from "../config/colors";
import React from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { MainStackScreenParamsList } from "../navigation/types";
import { useNavigation } from "@react-navigation/native";
import { TEXT_14 } from "../config/fonts";
import { SMALL_SPACING } from "../config/dimensions";

export const Header: React.FC = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<MainStackScreenParamsList>>();

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.searchContainer}
        onPress={() => navigation.navigate("SearchScreen")}
      >
        <Image source={IMAGES.search} style={{ width: 20, height: 20 }} />
        <Text style={styles.input}>ابحث عن خبر</Text>
      </Pressable>
      <Image source={IMAGES.logo} style={{ marginLeft: SMALL_SPACING / 2 }} />
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
  searchContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: SMALL_SPACING / 2,
    paddingHorizontal: 15,
    borderRadius: 12,
    backgroundColor: COLORS.lightGray,
  },
  input: {
    ...TEXT_14,
    color: COLORS.mainGray,
  },
});

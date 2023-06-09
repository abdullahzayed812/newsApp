import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import { TabStackScreenParamsList } from "../navigation/types";
import { IMAGES } from "../config/images";
import { TEXT_16 } from "../config/fonts";
import { SMALL_SPACING } from "../config/dimensions";
import { COLORS } from "../config/colors";

interface Props {
  title?: string;
  isProfileScreen?: boolean;
  backgroundColor?: string;
  paddingTop?: number;
  isHeaderDark?: boolean;
}

export const HeaderBackButton: React.FC<Props> = ({
  title,
  isProfileScreen,
  backgroundColor,
  paddingTop,
  isHeaderDark,
}) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<TabStackScreenParamsList>>();

  const handleBackButtonPress = () => {
    if (isProfileScreen) {
      navigation.navigate("MainStackScreen", { screen: "MainScreen" });
    } else {
      navigation.goBack();
    }
  };

  return (
    <View style={[styles.container, { backgroundColor, paddingTop }]}>
      <TouchableOpacity
        onPress={handleBackButtonPress}
        style={styles.imageContainer}
      >
        <Image
          source={isHeaderDark ? IMAGES.backArrowWhite : IMAGES.backDark}
        />
      </TouchableOpacity>
      {title ? <Text style={TEXT_16}>{title}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row-reverse",
    alignItems: "center",
    paddingHorizontal: SMALL_SPACING,
    paddingVertical: SMALL_SPACING,
    backgroundColor: COLORS.statusBar,
  },
  imageContainer: {
    marginLeft: SMALL_SPACING / 2,
  },
});

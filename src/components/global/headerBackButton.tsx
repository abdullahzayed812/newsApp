import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { IMAGES } from "../../helpers/images";
import { TEXT_16 } from "../../constants/fonts";
import { SMALL_SPACING } from "../../constants/dimensions";
import { COLORS } from "../../helpers/colors";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { TabStackScreenParamsList } from "../../routes/types";

interface Props {
  title?: string;
}

export const HeaderBackButton: React.FC<Props> = ({ title }) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<TabStackScreenParamsList>>();

  return (
    <View style={styles.container}>
      {title ? <Text style={TEXT_16}>{title}</Text> : null}
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("MainStackScreen", { screen: "MainScreen" })
        }
      >
        <Image source={IMAGES.backDark} />
      </TouchableOpacity>
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
});

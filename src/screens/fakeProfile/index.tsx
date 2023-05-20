import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { RootStackParamList } from "../../navigation/types";
import { useFocusEffect } from "@react-navigation/native";

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamList>;
}

export const FakeProfileScreen: React.FC<Props> = ({ navigation }) => {
  useFocusEffect(
    React.useCallback(() => {
      navigation.navigate("ProfileStackScreen", { screen: "ProfileScreen" });
    }, []),
  );

  return null;
};

import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MainStackScreenParamsList } from "../../types";
import { MainScreen } from "../../../views/MainScreen";

const MainStack = createNativeStackNavigator<MainStackScreenParamsList>();

export const MainStackScreen: React.FC = () => {
  return (
    <MainStack.Navigator
      initialRouteName="MainScreen"
      screenOptions={{ headerShown: false }}
    >
      <MainStack.Screen name="MainScreen" component={MainScreen} />
    </MainStack.Navigator>
  );
};
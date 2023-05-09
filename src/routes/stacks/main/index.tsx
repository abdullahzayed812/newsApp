import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MainStackScreenParamsList } from "../../types";
import { MainScreen } from "../../../screens/main/Main";

const MainStack = createNativeStackNavigator<MainStackScreenParamsList>();

export const MainStackScreen: React.FC = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name="MainScreen" component={MainScreen} />
    </MainStack.Navigator>
  );
};

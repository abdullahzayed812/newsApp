import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StartScreen } from "../../../screens/startScreen";
import { StartStackScreenParamList } from "../../types";

const StartStack = createNativeStackNavigator<StartStackScreenParamList>();

export const StartStackScreen: React.FC = () => {
  return (
    <StartStack.Navigator>
      <StartStack.Screen name="StartScreen" component={StartScreen} />
    </StartStack.Navigator>
  );
};

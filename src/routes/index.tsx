import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { RootStackParamList } from "./types";
import React from "react";
import { RootTagContext } from "react-native/types";
import { TabStackScreen } from "./tab";
import { ProfileStackScreen } from "./stacks/profile";
import { StartStackScreen } from "./stacks/start";

const RootStack = createNativeStackNavigator<RootStackParamList>();

export const RootStackScreen: React.FC = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="StartStackScreen">
        <RootStack.Screen
          name="StartStackScreen"
          component={StartStackScreen}
        />
        <RootStack.Screen name="TabStackScreen" component={TabStackScreen} />
        <RootStack.Screen
          name="ProfileStackScreen"
          component={ProfileStackScreen}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

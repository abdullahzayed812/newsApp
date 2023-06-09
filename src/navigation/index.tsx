import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { RootStackParamList } from "./types";
import { TabStackScreen } from "./tab";
import { AuthStackScreen } from "./stacks/auth";
import { ProfileStackScreen } from "./stacks/profile";
import { CommentScreen } from "../views/CommentScreen";
import { SplashScreen } from "../views/SplashScreen";
import { StartScreen } from "../views/StartScreen";

const RootStack = createNativeStackNavigator<RootStackParamList>();

export const RootStackScreen: React.FC = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{ headerShown: false }}
      >
        <RootStack.Screen name="SplashScreen" component={SplashScreen} />
        <RootStack.Screen name="StartScreen" component={StartScreen} />
        <RootStack.Screen name="TabStackScreen" component={TabStackScreen} />
        <RootStack.Screen name="AuthStackScreen" component={AuthStackScreen} />
        <RootStack.Screen
          name="ProfileStackScreen"
          component={ProfileStackScreen}
        />
        <RootStack.Screen name="CommentScreen" component={CommentScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

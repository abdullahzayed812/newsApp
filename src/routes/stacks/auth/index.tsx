import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthStackScreenParamsList } from "../../types";
import { SignUpScreen } from "../../../screens/signUp/signUp";
import { SignInScreen } from "../../../screens/signIn";

const AuthStack = createNativeStackNavigator<AuthStackScreenParamsList>();

export const AuthStackScreen: React.FC = () => {
  return (
    <AuthStack.Navigator
      initialRouteName="SignUpScreen"
      screenOptions={{ headerShown: false }}
    >
      <AuthStack.Screen name="SignUpScreen" component={SignUpScreen} />
      <AuthStack.Screen name="SignInScreen" component={SignInScreen} />
    </AuthStack.Navigator>
  );
};

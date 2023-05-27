import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthStackScreenParamsList } from "../../types";
import { SignUpScreen } from "../../../views/SignUpScreen";
import { SignInScreen } from "../../../views/SignInScreen";

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

import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthStackScreenParamsList } from "../../types";
import { SignInUpScreen } from "../../../views/SignInInUpcreen";

const AuthStack = createNativeStackNavigator<AuthStackScreenParamsList>();

export const AuthStackScreen: React.FC = () => {
  return (
    <AuthStack.Navigator
      initialRouteName="SignInUpScreen"
      screenOptions={{ headerShown: false }}
    >
      <AuthStack.Screen name="SignInUpScreen" component={SignInUpScreen} />
    </AuthStack.Navigator>
  );
};

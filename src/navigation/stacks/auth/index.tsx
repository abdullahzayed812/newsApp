import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthStackScreenParamsList } from "../../types";
import { SignInUpScreen } from "../../../views/SignInInUpcreen";
import { ForgotPasswordScreen } from "../../../views/ForgotPasswordScreen";

const AuthStack = createNativeStackNavigator<AuthStackScreenParamsList>();

export const AuthStackScreen: React.FC = () => {
  return (
    <AuthStack.Navigator
      initialRouteName="SignInUpScreen"
      screenOptions={{ headerShown: false }}
    >
      <AuthStack.Screen name="SignInUpScreen" component={SignInUpScreen} />
      <AuthStack.Screen
        name="ForgotPasswordScreen"
        component={ForgotPasswordScreen}
      />
    </AuthStack.Navigator>
  );
};

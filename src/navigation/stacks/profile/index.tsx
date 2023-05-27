import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ProfileStackScreenParamsList } from "../../types";
import { ProfileScreen } from "../../../views/ProfileScreen";

const ProfileStack = createNativeStackNavigator<ProfileStackScreenParamsList>();

export const ProfileStackScreen: React.FC = () => {
  return (
    <ProfileStack.Navigator
      initialRouteName="ProfileScreen"
      screenOptions={{ headerShown: false }}
    >
      <ProfileStack.Screen name="ProfileScreen" component={ProfileScreen} />
    </ProfileStack.Navigator>
  );
};

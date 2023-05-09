import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ProfileScreen } from "../../../screens/profile/Profile";
import { ProfileStackScreenParamsList } from "../../types";

const ProfileStack = createNativeStackNavigator<ProfileStackScreenParamsList>();

export const ProfileStackScreen: React.FC = () => {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name="ProfileScreen" component={ProfileScreen} />
    </ProfileStack.Navigator>
  );
};
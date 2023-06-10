import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ProfileStackScreenParamsList } from "../../types";
import { ProfileScreen } from "../../../views/ProfileScreen";
import { NotificationScreen } from "../../../views/NotificationsSceen";
import { UpdateProfileScreen } from "../../../views/UpdateProfileScreen";
import { SettingsScreen } from "../../../views/SettingsScreen";
import { UpdatePasswordScreen } from "../../../views/UpdatePasswordScreen";
import { ChangeLangScreen } from "../../../views/ChangeLangScreen";

const ProfileStack = createNativeStackNavigator<ProfileStackScreenParamsList>();

export const ProfileStackScreen: React.FC = () => {
  return (
    <ProfileStack.Navigator
      initialRouteName="ProfileScreen"
      screenOptions={{ headerShown: false }}
    >
      <ProfileStack.Screen name="ProfileScreen" component={ProfileScreen} />
      <ProfileStack.Screen
        name="NotificationScreen"
        component={NotificationScreen}
      />
      <ProfileStack.Screen
        name="UpdateProfileScreen"
        component={UpdateProfileScreen}
      />
      <ProfileStack.Screen name="SettingsScreen" component={SettingsScreen} />
      <ProfileStack.Screen
        name="UpdatePasswordScreen"
        component={UpdatePasswordScreen}
      />
      <ProfileStack.Screen
        name="ChangeLangScreen"
        component={ChangeLangScreen}
      />
    </ProfileStack.Navigator>
  );
};

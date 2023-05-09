import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TabStackScreenParamsList } from "../types";
import { MainStackScreen } from "../stacks/main";
import { NewsStackScreen } from "../stacks/news";
import { COLORS } from "../../helpers/colors";
import { Image } from "react-native/types";
import { ProfileStackScreen } from "../stacks/profile";

const TabStack = createBottomTabNavigator<TabStackScreenParamsList>();

export const TabStackScreen: React.FC = () => {
  return (
    <TabStack.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarLabelStyle: { fontSize: 18 },
        tabBarStyle: { backgroundColor: "#333" },
        tabBarActiveTintColor: COLORS.mainColor,
        tabBarInactiveTintColor: COLORS.mainGray,
        // tabBarIcon: ({ focused, size }) => {
        //   let imageSource;
        //   switch (route.name) {
        //     case "MainStackScreen":
        //       imageSource = focused ? IMAGES.homeActive : IMAGES.homeActive;
        //       break;
        //     case "NewsStackScreen":
        //       imageSource = focused
        //         ? IMAGES.activePickup
        //         : IMAGES.pickupInActive;
        //       break;
        //     case "FakeProfileScreen":
        //       imageSource = focused ? IMAGES.scanInActive : IMAGES.scanInActive;
        //       break;
        //   }
        //   return (
        //     <Image
        //     source={imageSource}
        //     style={{ width: size, height: size, resizeMode: "contain" }}
        //   />
        //   )
        // }
      })}
    >
      <TabStack.Screen
        name="MainStackScreen"
        component={MainStackScreen}
        options={{ tabBarLabel: "ألرئيسة" }}
      />
      <TabStack.Screen
        name="NewsStackScreen"
        component={NewsStackScreen}
        options={{ tabBarLabel: "الإخبار" }}
      />
      <TabStack.Screen
        name="ProfileStackScreen"
        component={ProfileStackScreen}
        options={{ tabBarLabel: "حسابي" }}
      />
    </TabStack.Navigator>
  );
};

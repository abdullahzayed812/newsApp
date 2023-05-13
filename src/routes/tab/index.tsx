import React from "react";
import { Dimensions, Image, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TabStackScreenParamsList } from "../types";
import { MainStackScreen } from "../stacks/main";
import { NewsStackScreen } from "../stacks/news";
import { COLORS } from "../../helpers/colors";
import { IMAGES } from "../../helpers/images";
import { ProfileStackScreen } from "../stacks/profile";
import { TEXT_12 } from "../../constants/fonts";

const TabStack = createBottomTabNavigator<TabStackScreenParamsList>();

export const TabStackScreen: React.FC = () => {
  return (
    <TabStack.Navigator
      initialRouteName="MainStackScreen"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarLabelStyle: { ...styles.tabBarLabelStyle },
        tabBarStyle: { ...styles.tabBarStyle },
        tabBarActiveTintColor: COLORS.mainColor,
        tabBarInactiveTintColor: COLORS.mediumGray,
        tabBarIcon: ({ focused, size }) => {
          let imageSource;
          switch (route.name) {
            case "MainStackScreen":
              imageSource = focused ? IMAGES.homeActive : IMAGES.homeInactive;
              break;
            case "NewsStackScreen":
              imageSource = focused ? IMAGES.newsActive : IMAGES.newsInactive;
              break;
            case "ProfileStackScreen":
              imageSource = focused ? IMAGES.profileActive : IMAGES.profile;
              break;
          }
          return (
            <Image
              source={imageSource}
              style={{ width: size, height: size, resizeMode: "contain" }}
            />
          );
        },
      })}
    >
      <TabStack.Screen
        name="ProfileStackScreen"
        component={ProfileStackScreen}
        options={{ tabBarLabel: "حسابي" }}
      />
      <TabStack.Screen
        name="NewsStackScreen"
        component={NewsStackScreen}
        options={{ tabBarLabel: "الأخبار" }}
      />
      <TabStack.Screen
        name="MainStackScreen"
        component={MainStackScreen}
        options={{ tabBarLabel: "ألرئيسة" }}
      />
    </TabStack.Navigator>
  );
};

const { height } = Dimensions.get("screen");

const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: "#000",
    height: height * 0.06,
  },
  tabBarLabelStyle: {
    ...TEXT_12,
    color: COLORS.white,
  },
});

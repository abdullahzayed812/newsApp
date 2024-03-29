import React from "react";
import { Dimensions, Image, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TabStackScreenParamsList } from "../types";
import { MainStackScreen } from "../stacks/main";
import { NewsStackScreen } from "../stacks/news";
import { COLORS } from "../../config/colors";
import { IMAGES } from "../../config/images";
import { FakeProfileScreen } from "../../views/FakeProfileScreen";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

const TabStack = createBottomTabNavigator<TabStackScreenParamsList>();

export const TabStackScreen: React.FC = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<TabStackScreenParamsList>>();

  return (
    <TabStack.Navigator
      initialRouteName="MainStackScreen"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarLabelStyle: { fontFamily: "cairo-bold", fontSize: 12 },
        tabBarStyle: { ...styles.tabBarStyle },
        tabBarActiveTintColor: COLORS.mainColor,
        tabBarInactiveTintColor: COLORS.lightGray,
        tabBarIcon: ({ focused, size }) => {
          let imageSource;
          switch (route.name) {
            case "MainStackScreen":
              imageSource = focused ? IMAGES.homeActive : IMAGES.homeInactive;
              break;
            case "NewsStackScreen":
              imageSource = focused ? IMAGES.newsActive : IMAGES.newsInactive;
              break;
            case "FakeProfileScreen":
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
        name="FakeProfileScreen"
        component={FakeProfileScreen}
        options={{ tabBarLabel: "حسابي" }}
      />
      <TabStack.Screen
        name="NewsStackScreen"
        component={NewsStackScreen}
        options={{ tabBarLabel: "الأخبار" }}
        listeners={{
          tabPress: (e) => {
            e.preventDefault();
            navigation.navigate("NewsStackScreen", { screen: "NewsTabScreen" });
          },
        }}
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
});

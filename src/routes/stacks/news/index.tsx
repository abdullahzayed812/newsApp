import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NewsStackScreenParamsList } from "../../types";
import { NewsScreen } from "../../../screens/news/News";

const NewsStack = createNativeStackNavigator<NewsStackScreenParamsList>();

export const NewsStackScreen: React.FC = () => {
  return (
    <NewsStack.Navigator
      initialRouteName="NewsScreen"
      screenOptions={{ headerShown: false }}
    >
      <NewsStack.Screen name="NewsScreen" component={NewsScreen} />
    </NewsStack.Navigator>
  );
};

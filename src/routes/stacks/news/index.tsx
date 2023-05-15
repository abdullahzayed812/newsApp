import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NewsStackScreenParamsList } from "../../types";
import { NewsTabScreen } from "../../../screens/newsTabScreens/NewsTabScreen";
import { NewsScreen } from "../../../screens/newsTabScreens/NewsScreen";

const NewsStack = createNativeStackNavigator<NewsStackScreenParamsList>();

export const NewsStackScreen: React.FC = () => {
  return (
    <NewsStack.Navigator
      initialRouteName="NewsTabScreen"
      screenOptions={{ headerShown: false }}
    >
      <NewsStack.Screen name="NewsTabScreen" component={NewsTabScreen} />
      <NewsStack.Screen name="NewsScreen" component={NewsScreen} />
    </NewsStack.Navigator>
  );
};

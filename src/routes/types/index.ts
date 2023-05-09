import { NavigatorScreenParams } from "@react-navigation/native";

export type StartStackScreenParamList = {
  StartScreen: undefined;
};
export type MainStackScreenParamsList = {
  MainScreen: undefined;
};
export type NewsStackScreenParamsList = {
  NewsScreen: undefined;
};
export type ProfileStackScreenParamsList = {
  ProfileScreen: undefined;
};
export type AuthStackScreenParamsList = {
  SignUpScreen: undefined;
  SignInScreen: undefined;
};
export type TabStackScreenParamsList = {
  MainStackScreen: NavigatorScreenParams<MainStackScreenParamsList>;
  NewsStackScreen: NavigatorScreenParams<NewsStackScreenParamsList>;
  ProfileStackScreen: NavigatorScreenParams<ProfileStackScreenParamsList>;
};
export type RootStackParamList = {
  StartStackScreen: NavigatorScreenParams<StartStackScreenParamList>;
  TabStackScreen: NavigatorScreenParams<TabStackScreenParamsList>;
  AuthStackScreen: NavigatorScreenParams<AuthStackScreenParamsList>;
};

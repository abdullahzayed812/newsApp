import { NavigatorScreenParams } from "@react-navigation/native";

export type StartStackScreenParamList = {
  StartScreen: undefined;
};
export type MainStackScreenParamsList = {
  MainScreen: undefined;
};
export type NewsStackScreenParamsList = {
  NewsTabScreen: undefined;
  NewsScreen: { newsID: number | undefined };
};
export type ProfileStackScreenParamsList = {
  ProfileScreen: undefined;
};
export type AuthStackScreenParamsList = {
  SignInUpScreen: undefined;
};
export type TabStackScreenParamsList = {
  MainStackScreen: NavigatorScreenParams<MainStackScreenParamsList>;
  NewsStackScreen: NavigatorScreenParams<NewsStackScreenParamsList>;
  FakeProfileScreen: undefined;
};
export type RootStackParamList = {
  StartStackScreen: NavigatorScreenParams<StartStackScreenParamList>;
  TabStackScreen: NavigatorScreenParams<TabStackScreenParamsList>;
  AuthStackScreen: NavigatorScreenParams<AuthStackScreenParamsList>;
  ProfileStackScreen: NavigatorScreenParams<ProfileStackScreenParamsList>;
  CommentScreen: { comments: []; newsID: number | undefined };
  SplashScreen: undefined;
};

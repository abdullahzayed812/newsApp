import { NavigatorScreenParams } from "@react-navigation/native";

export type MainStackScreenParamsList = {
  MainScreen: undefined;
  SearchScreen: undefined;
};
export type NewsStackScreenParamsList = {
  NewsTabScreen: undefined;
  NewsScreen: {
    newsID: number | undefined;
    videoURL: string | undefined;
    location: "News" | "Main";
  };
};
export type ProfileStackScreenParamsList = {
  ProfileScreen: undefined;
  NotificationScreen: undefined;
  UpdateProfileScreen: undefined;
  SettingsScreen: undefined;
  UpdatePasswordScreen: undefined;
  ChangeLangScreen: undefined;
  EditorialBoard: undefined;
};
export type AuthStackScreenParamsList = {
  SignInUpScreen: undefined;
  ForgotPasswordScreen: undefined;
};
export type TabStackScreenParamsList = {
  MainStackScreen: NavigatorScreenParams<MainStackScreenParamsList>;
  NewsStackScreen: NavigatorScreenParams<NewsStackScreenParamsList>;
  FakeProfileScreen: undefined;
};
export type RootStackParamList = {
  StartScreen: undefined;
  TabStackScreen: NavigatorScreenParams<TabStackScreenParamsList>;
  AuthStackScreen: NavigatorScreenParams<AuthStackScreenParamsList>;
  ProfileStackScreen: NavigatorScreenParams<ProfileStackScreenParamsList>;
  CommentScreen: { comments: []; newsID: number | undefined };
  SplashScreen: undefined;
};

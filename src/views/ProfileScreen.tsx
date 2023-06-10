import {
  BackHandler,
  ImageSourcePropType,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { IMAGES } from "../config/images";
import { COLORS } from "../config/colors";
import { HeaderBackButton } from "../components/HeaderButtonBack";
import { UserInfo } from "../components/UserInfo";
import { LARGE_SPACING, SMALL_SPACING } from "../config/dimensions";
import { ProfileOption } from "../components/ProfileOption";
import { SocialContainer } from "../components/SocialContainer";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/types";
import React from "react";
import { loadUserData } from "../config/helpers";
import { useFocusEffect } from "@react-navigation/native";

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamList>;
}

export const ProfileScreen: React.FC<Props> = ({ navigation }) => {
  const { width, height } = useWindowDimensions();

  const [username, setUsername] = React.useState<string>("");

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        navigation.navigate("TabStackScreen", {
          screen: "MainStackScreen",
          params: { screen: "MainScreen" },
        });
        return true;
      };
      BackHandler.addEventListener("hardwareBackPress", onBackPress);
      return () =>
        BackHandler.removeEventListener("hardwareBackPress", onBackPress);
    }, []),
  );

  React.useEffect(() => {
    (async () => {
      try {
        const user = await loadUserData();
        setUsername(user?.first_name);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const handleNavigation = () =>
    !username
      ? navigation.navigate("AuthStackScreen", { screen: "SignInUpScreen" })
      : null;

  return (
    <>
      <StatusBar backgroundColor={COLORS.statusBar} barStyle="dark-content" />
      <LinearGradient
        colors={[
          COLORS.statusBar,
          COLORS.lightGradient.color1,
          COLORS.lightGradient.color2,
        ]}
        start={{ x: 0.1, y: 0.0 }}
        end={{ x: 0.8, y: 1 }}
        locations={[0.04, 0.5, 1]}
        style={{ width, height }}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: LARGE_SPACING }}
        >
          <HeaderBackButton isProfileScreen />
          <UserInfo onPress={handleNavigation} />
          <View style={{ paddingRight: SMALL_SPACING * 1.5 }}>
            <ProfileOption
              text="الإشعارات"
              imageSource={IMAGES.notification}
              onPress={() =>
                navigation.navigate("ProfileStackScreen", {
                  screen: "NotificationScreen",
                })
              }
            />
            {username ? (
              <>
                <ProfileOption text="إضافة خبر" imageSource={IMAGES.add} />
                <ProfileOption
                  text="تعديل الملف الشخصي"
                  imageSource={IMAGES.add}
                  onPress={() =>
                    navigation.navigate("ProfileStackScreen", {
                      screen: "UpdateProfileScreen",
                    })
                  }
                />
                <ProfileOption
                  text="الإعدادات"
                  imageSource={IMAGES.add}
                  onPress={() =>
                    navigation.navigate("ProfileStackScreen", {
                      screen: "SettingsScreen",
                    })
                  }
                />
                <ProfileOption text="أخباري" imageSource={IMAGES.add} />
              </>
            ) : null}
            <ProfileOption
              text="الشروط والأحطام"
              imageSource={IMAGES.noteText}
            />
            <ProfileOption text="مشاركة التطبيق" imageSource={IMAGES.share1} />
            <ProfileOption text="من نحن" imageSource={IMAGES.information} />
            <ProfileOption text="هيئة التحرير" imageSource={IMAGES.box} />
          </View>
          <SocialContainer title="تابعنا على" />
        </ScrollView>
      </LinearGradient>
    </>
  );
};

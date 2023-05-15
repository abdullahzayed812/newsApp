import {
  ImageSourcePropType,
  StatusBar,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { COLORS } from "../../helpers/colors";
import { HeaderBackButton } from "../../components/global/headerBackButton";
import { UserInfo } from "../../components/global/userInfo";
import { IMAGES } from "../../helpers/images";
import { ProfileOption } from "../../components/global/profileOption";
import { SMALL_SPACING } from "../../constants/dimensions";
import { SocialContainer } from "../../components/global/socialContainer";

interface ProfileOptionPropType {
  text: string;
  imageSource: ImageSourcePropType;
}

const PROFILE_OPTION_DATA: ProfileOptionPropType[] = [
  { text: "الإشعارات", imageSource: IMAGES.notification },
  { text: "الإعدادات", imageSource: IMAGES.setting },
  { text: "الشروط والأحكام", imageSource: IMAGES.noteText },
  { text: "مشاركة التطبيق", imageSource: IMAGES.share1 },
  { text: "من نحن", imageSource: IMAGES.information },
  { text: "هيئة التحرير", imageSource: IMAGES.box },
];

export const ProfileScreen: React.FC = () => {
  const { width, height } = useWindowDimensions();

  return (
    <>
      <StatusBar backgroundColor={COLORS.statusBar} barStyle="dark-content" />
      <HeaderBackButton />
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
        <UserInfo />
        <View style={{ paddingRight: SMALL_SPACING * 1.5 }}>
          {PROFILE_OPTION_DATA.map((option, index) => (
            <ProfileOption
              key={`${option.text}-${index}`}
              text={option.text}
              imageSource={option.imageSource}
            />
          ))}
        </View>
        <SocialContainer />
      </LinearGradient>
    </>
  );
};

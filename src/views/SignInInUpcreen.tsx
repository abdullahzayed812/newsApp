import {
  KeyboardAvoidingView,
  ScrollView,
  StatusBar,
  Text,
  useWindowDimensions,
} from "react-native";
import { AuthHeader } from "../components/AuthHeader";
import LinearGradient from "react-native-linear-gradient";
import { COLORS } from "../config/colors";
import { Container } from "../components/Container";
import { AuthButtons } from "../components/AuthButtons";
import React from "react";
import { AuthInput } from "../components/AuthInput";
import { IMAGES } from "../config/images";
import { Button } from "../components/Button";
import { SMALL_SPACING } from "../config/dimensions";

export const SignInUpScreen: React.FC = () => {
  const { width, height } = useWindowDimensions();
  const [fullName, setFullName] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  const [signInButtonStyle, setSignInButtonStyle] = React.useState<{
    backgroundColor: string;
    color: string;
  }>({
    backgroundColor: COLORS.mainColor,
    color: COLORS.white,
  });

  const [signUpButtonStyle, setSignUpButtonStyle] = React.useState<{
    backgroundColor: string;
    color: string;
  }>({
    backgroundColor: COLORS.lightMainColor,
    color: COLORS.lightBlack,
  });

  const handleButtonPress = (type: string) => {
    if (type === "signIn") {
      setSignInButtonStyle({
        backgroundColor: COLORS.mainColor,
        color: COLORS.white,
      });
      setSignUpButtonStyle({
        backgroundColor: COLORS.lightMainColor,
        color: COLORS.lightBlack,
      });
      return;
    } else {
      setSignInButtonStyle({
        backgroundColor: COLORS.lightMainColor,
        color: COLORS.lightBlack,
      });
      setSignUpButtonStyle({
        backgroundColor: COLORS.mainColor,
        color: COLORS.white,
      });
      return;
    }
  };

  return (
    <>
      <StatusBar
        backgroundColor={COLORS.darkAuthHeader}
        barStyle="light-content"
      />
      <AuthHeader pageHeaderTitle="تسجيل الدخول إلى حسابك" />
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
        <Container containerStyle={{ backgroundColor: "transparent" }}>
          <AuthButtons
            signInButtonStyle={signInButtonStyle}
            signUpButtonStyle={signUpButtonStyle}
            handleButtonPress={handleButtonPress}
          />

          <AuthInput
            value={fullName}
            setValue={setFullName}
            fieldTitle="الإسم بالكامل"
            leftImageSource={IMAGES.ball}
            placeholder="محمود عصام عثمان"
          />
          <AuthInput
            value={email}
            setValue={setEmail}
            fieldTitle="البريد الإلكتروني"
            leftImageSource={IMAGES.ball}
            placeholder="محمود عصام عثمان"
          />
          <AuthInput
            value={password}
            setValue={setPassword}
            fieldTitle="كلمةالمرور"
            leftImageSource={IMAGES.ball}
            placeholder="*********"
          />
          <Button
            text="إنشاء حساب"
            onPress={() => {}}
            buttonStyle={{ marginTop: SMALL_SPACING * 2 }}
          />
        </Container>
      </LinearGradient>
    </>
  );
};

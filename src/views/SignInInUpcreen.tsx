import { ScrollView, StatusBar, Text, useWindowDimensions } from "react-native";
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
import {
  isInputsFilled,
  saveToken,
  saveUserData,
  updateError,
  validEmailPattern,
  validPasswordPattern,
  verifyInput,
} from "../config/helpers";
import { instance } from "../config/api";
import { LOGIN_ENDPOINT_URL } from "../config/urls";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/types";

export interface InputsValueType {
  fullName?: string;
  email: string;
  password: string;
}

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamList>;
}

export const SignInUpScreen: React.FC<Props> = ({ navigation }) => {
  const { width } = useWindowDimensions();
  const [userInfo, setUserInfo] = React.useState<InputsValueType>({
    fullName: "",
    email: "",
    password: "",
  });
  const [error, setError] = React.useState<string>("");
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
  const [showFullName, setShowFullName] = React.useState<boolean>(false);

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
      setShowFullName(false);
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
      setShowFullName(true);
      return;
    }
  };

  const { fullName, email, password } = userInfo;

  const handleOnChangeInputText = (value: string, fieldName: string) => {
    setUserInfo({ ...userInfo, [fieldName]: value });
  };

  const onCreateAccountSubmit = () => {
    // check all input is filled with not empty string
    if (!isInputsFilled(userInfo))
      return updateError("Inputs must be filled", setError);
    // check if fullName is valid value
    if (!fullName!.trim() || fullName!.length < 6)
      return updateError(
        "Full Name must be grate than 6 characters!",
        setError,
      );
    // check if email is valid
    if (!verifyInput(email, validEmailPattern))
      return updateError("Invalid email!", setError);
    // check if password is valid
    if (!verifyInput(password, validPasswordPattern))
      return updateError("Password must be grater than 6 characters", setError);
    // send data to the server
  };

  const onSignInSubmit = async () => {
    // check all input is filled with not empty string
    if (!isInputsFilled({ email, password }))
      return updateError("Inputs must be filled", setError);
    // check if email is valid
    if (!verifyInput(email, validEmailPattern))
      return updateError("Invalid email!", setError);
    // check if password is valid
    if (!verifyInput(password, validPasswordPattern))
      return updateError(
        "Password must be at least 1 digit, 1 uppercase, 1 lowercase and length from 6 to 20 chars",
        setError,
      );
    // send data to the server
    try {
      const signInResponse = await instance.post(LOGIN_ENDPOINT_URL, {
        email,
        password,
      });
      const user = signInResponse?.data?.data?.user;

      if (user?.email) {
        // save user and token
        await saveUserData(user);
        await saveToken(signInResponse?.data?.data?.token);
        // navigate to main screen
        navigation.reset({ routes: [{ name: "TabStackScreen" }] });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <StatusBar
        backgroundColor={COLORS.darkAuthHeader}
        barStyle="light-content"
      />
      <AuthHeader
        pageHeaderTitle={
          showFullName ? "إنشاء حساب جديد" : "تسجيل الدخول الي حسابك"
        }
      />
      <LinearGradient
        colors={[
          COLORS.statusBar,
          COLORS.lightGradient.color1,
          COLORS.lightGradient.color2,
        ]}
        start={{ x: 0.1, y: 0.0 }}
        end={{ x: 0.8, y: 1 }}
        locations={[0.04, 0.5, 1]}
        style={{ width, flex: 1 }}
      >
        <ScrollView>
          <Container containerStyle={{ backgroundColor: "transparent" }}>
            <AuthButtons
              signInButtonStyle={signInButtonStyle}
              signUpButtonStyle={signUpButtonStyle}
              handleButtonPress={handleButtonPress}
            />
            {error ? (
              <Text
                style={{
                  color: "red",
                  textAlign: "center",
                  marginBottom: 10,
                }}
              >
                {error}
              </Text>
            ) : null}
            {showFullName ? (
              <AuthInput
                value={fullName!}
                onChangeText={(value) =>
                  handleOnChangeInputText(value, "fullName")
                }
                fieldTitle="الإسم بالكامل"
                leftImageSource={IMAGES.ball}
                placeholder="محمود عصام عثمان"
              />
            ) : null}
            <AuthInput
              value={email}
              onChangeText={(value) => handleOnChangeInputText(value, "email")}
              fieldTitle="البريد الإلكتروني"
              leftImageSource={IMAGES.ball}
              placeholder="محمود عصام عثمان"
            />
            <AuthInput
              value={password}
              onChangeText={(value) =>
                handleOnChangeInputText(value, "password")
              }
              fieldTitle="كلمةالمرور"
              leftImageSource={IMAGES.ball}
              placeholder="*********"
            />
            {showFullName ? (
              <Button
                text="إنشاء حساب"
                onPress={onCreateAccountSubmit}
                buttonStyle={{ marginTop: SMALL_SPACING * 2 }}
              />
            ) : (
              <Button
                text="تسجيل الدخول"
                onPress={onSignInSubmit}
                buttonStyle={{ marginTop: SMALL_SPACING * 2 }}
              />
            )}
          </Container>
        </ScrollView>
      </LinearGradient>
    </>
  );
};

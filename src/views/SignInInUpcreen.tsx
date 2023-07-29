import {
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
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
import { TEXT_12, TEXT_14 } from "../config/fonts";
import { REGISTER_ENDPOINT_URL } from "../config/urls";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { signIn, signUp } from "../redux/auth";
import { Loading } from "../components/Loading";

export interface InputsValueType {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamList>;
}

export const SignInUpScreen: React.FC<Props> = ({ navigation }) => {
  const dispatch = useAppDispatch();

  const { width } = useWindowDimensions();
  const [userInfo, setUserInfo] = React.useState<InputsValueType>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
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

  const { signInLoading, signUpLoading } = useAppSelector(
    (state) => state.auth,
  );

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

  const { firstName, lastName, email, password, confirmPassword } = userInfo;

  const handleOnChangeInputText = (value: string, fieldName: string) => {
    setUserInfo({ ...userInfo, [fieldName]: value });
  };

  const onCreateAccountSubmit = async () => {
    // check all input is filled with not empty string
    if (
      !isInputsFilled({ email, firstName, lastName, password, confirmPassword })
    )
      return updateError("Inputs must be filled", setError);
    // check if email is valid
    if (!verifyInput(email, validEmailPattern))
      return updateError("Invalid email!", setError);
    // check if password is valid
    if (!verifyInput(password, validPasswordPattern))
      return updateError("Password must be grater than 6 characters", setError);
    if (password !== confirmPassword)
      return updateError("Password not match", setError);
    // send data to the server
    try {
      const signUpResponse = await signUp(dispatch, {
        first_name: firstName,
        last_name: lastName,
        email,
        password,
        password_confirmation: confirmPassword,
      });
      if (signUpResponse?.data?.user?.id) {
        setShowFullName(false);
        setSignInButtonStyle({
          backgroundColor: COLORS.mainColor,
          color: COLORS.white,
        });
        setSignUpButtonStyle({
          backgroundColor: COLORS.lightMainColor,
          color: COLORS.lightBlack,
        });
        Toast.show({
          text1: "تم إضافة الحساب بنجاج، يمكنك تسجيل الدخول الآن.",
        });
      } else {
        console.log("not");
        Toast.show({
          type: "error",
          text1: "User not created",
        });
      }
    } catch (error) {
      console.log(error);
    }
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
      const signInResponse = await signIn(dispatch, {
        email,
        password,
      });
      const user = signInResponse?.data?.data?.user;

      if (user?.email) {
        // save user and token
        await saveUserData(user);
        await saveToken(signInResponse?.data?.data?.token);
        // navigate to main screen
        navigation.reset({
          routes: [
            {
              name: "TabStackScreen",
              state: {
                routes: [
                  {
                    name: "MainStackScreen",
                    state: { routes: [{ name: "MainScreen" }] },
                  },
                ],
              },
            },
          ],
        });
      } else {
        Toast.show({ type: "error", text1: signInResponse?.data?.message });
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (signInLoading || signUpLoading) {
    return <Loading />;
  }

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
        subTitle="صحيفة أقلام الخبر "
        isLoginScreen
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
              <>
                <AuthInput
                  value={firstName}
                  onChangeText={(value) =>
                    handleOnChangeInputText(value, "firstName")
                  }
                  fieldTitle="الإسم الأول"
                  leftImageSource={IMAGES.ball}
                  placeholder="الإسم"
                />
                <AuthInput
                  value={lastName!}
                  onChangeText={(value) =>
                    handleOnChangeInputText(value, "lastName")
                  }
                  fieldTitle="الإسم الأخير"
                  leftImageSource={IMAGES.ball}
                  placeholder="الإسم"
                />
              </>
            ) : null}
            <AuthInput
              value={email}
              onChangeText={(value) => handleOnChangeInputText(value, "email")}
              fieldTitle="البريد الإلكتروني"
              leftImageSource={IMAGES.ball}
              placeholder="البريد"
            />
            <AuthInput
              value={password}
              onChangeText={(value) =>
                handleOnChangeInputText(value, "password")
              }
              fieldTitle="كلمةالمرور"
              leftImageSource={IMAGES.ball}
              placeholder="*********"
              secureTextEntry
            />
            {showFullName ? (
              <AuthInput
                value={confirmPassword}
                onChangeText={(value) =>
                  handleOnChangeInputText(value, "confirmPassword")
                }
                fieldTitle="تأكيد كلمةالمرور"
                leftImageSource={IMAGES.ball}
                placeholder="*********"
                secureTextEntry
              />
            ) : null}
            {!showFullName ? (
              <TouchableOpacity
                style={TEXT_14}
                onPress={() =>
                  navigation.navigate("AuthStackScreen", {
                    screen: "ForgotPasswordScreen",
                  })
                }
              >
                <Text style={{ ...TEXT_12, color: COLORS.mediumGray }}>
                  نسيت كلمة المرور؟
                </Text>
              </TouchableOpacity>
            ) : null}
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

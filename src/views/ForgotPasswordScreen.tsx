import React from "react";
import { AuthHeader } from "../components/AuthHeader";
import {
  isInputsFilled,
  updateError,
  validEmailPattern,
  verifyInput,
} from "../config/helpers";
import { Button } from "../components/Button";
import { AuthInput } from "../components/AuthInput";
import { LARGE_SPACING, SMALL_SPACING } from "../config/dimensions";
import { Container } from "../components/Container";
import { Text, useWindowDimensions } from "react-native";
import { TEXT_14 } from "../config/fonts";
import LinearGradient from "react-native-linear-gradient";
import { COLORS } from "../config/colors";
import { IMAGES } from "../config/images";

export const ForgotPasswordScreen: React.FC = () => {
  const { width } = useWindowDimensions();

  const [email, setEmail] = React.useState<string>("");
  const [error, setError] = React.useState<string>("");

  const onSubmit = async () => {
    if (isInputsFilled({ email }))
      return updateError("يجب كتابة البريد الإلكتروني أولاً", setError);
    if (!verifyInput(email, validEmailPattern))
      return updateError("بريد الكتروني غير صالح!", setError);

    // const forgotPasswordResponse = await instance.post()
  };
  return (
    <>
      <AuthHeader
        subTitle="أدخل بريدك الإلكتروني لإسترجاع كلمة المرور"
        pageHeaderTitle="نسيت كلمة المرور"
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
        style={{ width, flex: 1, padding: SMALL_SPACING }}
      >
        <Text style={{ ...TEXT_14, color: "red", textAlign: "center" }}>
          {error}
        </Text>
        <AuthInput
          placeholder="البريد الإلكتروني"
          value={email}
          onChangeText={setEmail}
          containerStyle={{
            marginTop: LARGE_SPACING * 3,
          }}
          leftImageSource={IMAGES.ball}
        />
        <Button text="تأكيد" onPress={onSubmit} />
      </LinearGradient>
    </>
  );
};

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
import { LARGE_SPACING } from "../config/dimensions";
import { Container } from "../components/Container";
import { Text } from "react-native";
import { TEXT_14 } from "../config/fonts";

export const ForgotPasswordScreen: React.FC = () => {
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
      <Container>
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
        />
        <Button text="تأكيد" onPress={onSubmit} />
      </Container>
    </>
  );
};

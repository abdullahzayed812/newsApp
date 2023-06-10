import React from "react";
import { StatusBar, View, useWindowDimensions } from "react-native";
import { COLORS } from "../config/colors";
import LinearGradient from "react-native-linear-gradient";
import { HeaderBackButton } from "../components/HeaderButtonBack";
import { LARGE_SPACING, SMALL_SPACING } from "../config/dimensions";
import { AuthInput } from "../components/AuthInput";
import { Button } from "../components/Button";
import {
  isInputsFilled,
  updateError,
  validPasswordPattern,
  verifyInput,
} from "../config/helpers";

export const UpdatePasswordScreen: React.FC = () => {
  const { width, height } = useWindowDimensions();

  const [inputs, setInputs] = React.useState<{ [index: string]: string }>({
    oldPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });
  const [error, setError] = React.useState<string>("");

  const { oldPassword, newPassword, confirmNewPassword } = inputs;

  const handleChange = (text: string, inputName: string) => {
    setInputs({ ...inputs, [inputName]: text });
  };

  const onSubmit = async () => {
    if (!isInputsFilled({ oldPassword, newPassword, confirmNewPassword }))
      return updateError("Inputs must be filled", setError);
    if (!verifyInput(oldPassword, validPasswordPattern))
      return updateError("Invalid Password", setError);
    if (newPassword !== confirmNewPassword)
      return updateError("Password not match", setError);
  };

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
        <HeaderBackButton title="تغيير كلمة المرور" />
        <View style={{ padding: SMALL_SPACING, paddingTop: LARGE_SPACING * 3 }}>
          <AuthInput
            placeholder="كلمة المرور القديمة"
            value={oldPassword}
            onChangeText={(text) => handleChange(text, "oldPassword")}
          />
          <AuthInput
            placeholder="كلمة المرور القديمة"
            value={newPassword}
            onChangeText={(text) => handleChange(text, "newPassword")}
          />
          <AuthInput
            placeholder="كلمة المرور القديمة"
            value={confirmNewPassword}
            onChangeText={(text) => handleChange(text, "confirmNewPassword")}
          />
          <Button
            text="تأكيد"
            onPress={onSubmit}
            buttonStyle={{ marginTop: LARGE_SPACING }}
          />
        </View>
      </LinearGradient>
    </>
  );
};

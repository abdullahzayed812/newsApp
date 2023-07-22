import React from "react";
import { StatusBar, Text, View, useWindowDimensions } from "react-native";
import { COLORS } from "../config/colors";
import LinearGradient from "react-native-linear-gradient";
import { HeaderBackButton } from "../components/HeaderButtonBack";
import { LARGE_SPACING, SMALL_SPACING } from "../config/dimensions";
import { AuthInput } from "../components/AuthInput";
import { Button } from "../components/Button";
import {
  isInputsFilled,
  loadToken,
  updateError,
  validPasswordPattern,
  verifyInput,
} from "../config/helpers";
import { instance } from "../config/api";
import { UPDATE_PASSWORD_ENDPOINT_URL } from "../config/urls";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import { Loading } from "../components/Loading";

export const UpdatePasswordScreen: React.FC = () => {
  const { width, height } = useWindowDimensions();

  const [inputs, setInputs] = React.useState<{ [index: string]: string }>({
    oldPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });
  const [error, setError] = React.useState<string>("");
  const [loading, setLoading] = React.useState<boolean>(false);

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

    try {
      setLoading(true);
      const token = await loadToken();

      const updatePasswordResponse = await instance.post(
        UPDATE_PASSWORD_ENDPOINT_URL,
        {
          old_password: oldPassword,
          password: newPassword,
          password_confirmation: confirmNewPassword,
        },
        {
          headers: {
            Authorization: "Bearer " + token?.token,
          },
        },
      );

      if (updatePasswordResponse?.data?.error) {
        return Toast.show({
          text1: updatePasswordResponse?.data?.message,
        });
      }

      return Toast.show({ text1: updatePasswordResponse?.data?.message });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <Loading />;

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
          <Text style={{ textAlign: "center", color: "#f00" }}>{error}</Text>
          <AuthInput
            placeholder="كلمة المرور القديمة"
            value={oldPassword}
            onChangeText={(text) => handleChange(text, "oldPassword")}
            secureTextEntry
          />
          <AuthInput
            placeholder="كلمة المرور الجديدة"
            value={newPassword}
            onChangeText={(text) => handleChange(text, "newPassword")}
            secureTextEntry
          />
          <AuthInput
            placeholder="تأكيد كلمة المرور الجديدة"
            value={confirmNewPassword}
            onChangeText={(text) => handleChange(text, "confirmNewPassword")}
            secureTextEntry
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

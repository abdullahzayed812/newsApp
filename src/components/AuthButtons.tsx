import React from "react";
import { StyleSheet, View } from "react-native";
import { Button } from "./Button";
import { globalStyles } from "../config/globalStyles";
import { COLORS } from "../config/colors";
import { IMAGES } from "../config/images";
import { SMALL_SPACING } from "../config/dimensions";
import { TEXT_12 } from "../config/fonts";

interface Props {
  signInButtonStyle: { backgroundColor: string; color: string };
  signUpButtonStyle: { backgroundColor: string; color: string };
  handleButtonPress: (type: string) => void;
}

export const AuthButtons: React.FC<Props> = ({
  signInButtonStyle,
  signUpButtonStyle,
  handleButtonPress,
}) => {
  return (
    <View style={styles.container}>
      <Button
        text="إنشاء حساب"
        onPress={() => handleButtonPress("signUp")}
        buttonStyle={{
          ...styles.button,
          backgroundColor: signUpButtonStyle.backgroundColor,
        }}
        buttonImageSource={IMAGES.ball}
        textStyle={{ ...styles.buttonText, color: signUpButtonStyle.color }}
      />
      <Button
        text="تسجيل الدخول"
        onPress={() => handleButtonPress("signIn")}
        buttonStyle={{
          ...styles.button,
          backgroundColor: signInButtonStyle.backgroundColor,
        }}
        buttonImageSource={IMAGES.ball}
        textStyle={{ ...styles.buttonText, color: signInButtonStyle.color }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...globalStyles.alignCenter,
    borderRadius: SMALL_SPACING,
    marginTop: SMALL_SPACING / 2,
    marginBottom: SMALL_SPACING * 1.3,
    backgroundColor: COLORS.lightMainColor,
  },
  button: {
    width: "50%",
  },
  buttonText: {
    ...TEXT_12,
  },
});

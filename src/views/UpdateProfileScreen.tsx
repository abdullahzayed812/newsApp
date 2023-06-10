import React from "react";
import { AuthHeader } from "../components/AuthHeader";
import {
  isInputsFilled,
  loadUserData,
  updateError,
  validEmailPattern,
  verifyInput,
} from "../config/helpers";
import { Container } from "../components/Container";
import { AuthInput } from "../components/AuthInput";
import LinearGradient from "react-native-linear-gradient";
import { COLORS } from "../config/colors";
import { ScrollView, Text, useWindowDimensions } from "react-native";
import { LARGE_SPACING, SMALL_SPACING } from "../config/dimensions";
import { Button } from "../components/Button";
import { TEXT_14 } from "../config/fonts";
import { instance } from "../config/api";
import { UPDATE_PROFILE_ENDPOINT_URL } from "../config/urls";
import { UserPicture } from "../components/UserPicture";

export const UpdateProfileScreen: React.FC = () => {
  const { width, height } = useWindowDimensions();

  const [inputs, setInputs] = React.useState<{ [index: string]: string }>({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [error, setError] = React.useState<string>("");
  const [user, setUser] = React.useState<any>({});

  const { firstName, lastName, email } = inputs;

  React.useEffect(() => {
    (async () => {
      const user = await loadUserData();
      setUser(user);
    })();
  }, []);

  const handleChange = (fieldName: string, fieldValue: string) => {
    setInputs({ ...inputs, [fieldName]: fieldValue });
  };

  const onSubmit = async () => {
    if (!isInputsFilled({ firstName, lastName, email }))
      return updateError("Input must not be empty", setError);
    if (!verifyInput(email, validEmailPattern))
      return updateError("Invalid email", setError);
    const updateProfileResponse = await instance.post(
      UPDATE_PROFILE_ENDPOINT_URL,
      {
        first_name: firstName,
        last_name: lastName,
        email,
      },
    );
  };

  return (
    <>
      <AuthHeader />
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
        <UserPicture imageSource={user?.avatar} />
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            padding: SMALL_SPACING,
            paddingTop: SMALL_SPACING * 3,
          }}
        >
          {error ? (
            <Text style={{ ...TEXT_14, color: "red", textAlign: "center" }}>
              {error}
            </Text>
          ) : null}
          <AuthInput
            placeholder={user?.first_name ? user?.first_name : "الإسم الأول"}
            value={firstName}
            onChangeText={(text) => handleChange(text, "firstName")}
          />
          <AuthInput
            placeholder={user?.last_name ? user?.last_name : "الإسم الأخير"}
            value={lastName}
            onChangeText={(text) => handleChange(text, "lastName")}
          />
          <AuthInput
            placeholder={user?.email ? user.email : "البريد الإلكتروني"}
            value={inputs.email}
            onChangeText={(text) => handleChange(text, "email")}
          />
          <Button
            text="تأكيد"
            onPress={onSubmit}
            buttonStyle={{ marginTop: SMALL_SPACING }}
          />
        </ScrollView>
      </LinearGradient>
    </>
  );
};

import AsyncStorage from "@react-native-async-storage/async-storage";
import { InputsValueType } from "../../views/SignInInUpcreen";
import { Dispatch, SetStateAction } from "react";

export const validEmailPattern =
  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/gi;
// At least 1 digit, 1 uppercase letter, 1 lowercase letter and length from 6 to 20
// export const validPasswordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/gi;
export const validPasswordPattern = /\w{6,20}/gi;

export const isInputsFilled = (inputs: InputsValueType) => {
  return Object.values(inputs).every((inputValue) => inputValue.trim());
};

export const updateError = (
  message: string,
  errorStateUpdater: Dispatch<SetStateAction<string>>,
) => {
  errorStateUpdater(message);
  setTimeout(() => {
    errorStateUpdater("");
  }, 2000);
};

export const verifyInput = (inputValue: string, regXPattern: RegExp): any => {
  return inputValue.match(regXPattern);
};

export async function saveUserData(user: any) {
  try {
    await AsyncStorage.setItem("userData", JSON.stringify(user));
  } catch (error) {
    console.log(error);
  }
}

export async function loadUserData() {
  try {
    const userData = await AsyncStorage.getItem("userData");
    return userData !== null ? JSON.parse(userData) : null;
  } catch (error) {
    console.log(error);
  }
}

export async function saveToken(token: string) {
  try {
    await AsyncStorage.setItem("token", token);
  } catch (error) {
    console.log(error);
  }
}

export async function loadToken() {
  try {
    const token = await AsyncStorage.getItem("token");
    return token !== null ? { token } : null;
  } catch (error) {
    console.log(error);
  }
}

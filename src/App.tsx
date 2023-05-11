/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";
import { SafeAreaView } from "react-native";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import { RootStackScreen } from "./routes";
import { SMALL_SPACING } from "./constants/dimensions";
import { ErrorToast } from "react-native-toast-message";

const toastConfig = {
  error: (props: any) => (
    <ErrorToast
      {...props}
      style={{
        height: SMALL_SPACING * 3,
        borderLeftWidth: 5,
        borderLeftColor: "red",
      }}
      text1Style={{
        fontSize: 17,
      }}
      text2Style={{
        fontSize: 15,
        paddingVertical: 5,
      }}
      text2NumberOfLines={2}
    />
  ),
};

function App(): JSX.Element {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <RootStackScreen />
      <Toast
        config={toastConfig}
        position="bottom"
        autoHide={true}
        visibilityTime={3000}
        bottomOffset={50}
      />
    </SafeAreaView>
  );
}
export default App;

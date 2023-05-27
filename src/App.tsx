/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import { RootStackScreen } from "./navigation";
import { SMALL_SPACING } from "./config/dimensions";
import { ErrorToast } from "react-native-toast-message";
import { COLORS } from "./config/colors";
import { Provider } from "react-redux";
import { store } from "./redux/store";

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
      <StatusBar backgroundColor={COLORS.white} />
      <Provider store={store}>
        <RootStackScreen />
      </Provider>
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

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";
import { SafeAreaView } from "react-native";
import { RootStackScreen } from "./routes";

function App(): JSX.Element {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <RootStackScreen />
    </SafeAreaView>
  );
}
export default App;

import React from "react";
import { ActivityIndicator, View } from "react-native";
import { globalStyles } from "../config/globalStyles";

export const Loading: React.FC = () => {
  return (
    <View style={globalStyles.center}>
      <ActivityIndicator size="large" />
    </View>
  );
};

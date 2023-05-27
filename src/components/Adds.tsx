import React from "react";
import { Image, useWindowDimensions } from "react-native";
import { IMAGES } from "../config/images";

export const ADS: React.FC = () => {
  const { width } = useWindowDimensions();

  return (
    <Image
      source={IMAGES.ads}
      style={{
        width: width * 0.95,
        resizeMode: "contain",
      }}
    />
  );
};

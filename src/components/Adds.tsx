import React from "react";
import { Image, ImageSourcePropType, useWindowDimensions } from "react-native";
import { IMAGES } from "../config/images";

interface Props {
  adsImageSource?: ImageSourcePropType;
}

export const ADS: React.FC<Props> = ({ adsImageSource }) => {
  const { width } = useWindowDimensions();

  return adsImageSource ? (
    <Image
      source={adsImageSource}
      style={{
        width: width * 0.95,
        height: 100,
        resizeMode: "contain",
      }}
    />
  ) : null;
};

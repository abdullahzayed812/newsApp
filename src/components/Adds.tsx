import React from "react";
import { Image, ImageStyle, useWindowDimensions } from "react-native";

interface Props {
  adsImageSource: { uri: string | undefined };
  adsContainerStyle: ImageStyle;
}

export const ADS: React.FC<Props> = React.memo(
  ({ adsImageSource, adsContainerStyle }) => {
    const { width } = useWindowDimensions();

    return adsImageSource ? (
      <Image
        source={adsImageSource}
        style={[
          adsContainerStyle,
          {
            width: width * 0.95,
            height: 100,
            resizeMode: "contain",
          },
        ]}
      />
    ) : null;
  },
);

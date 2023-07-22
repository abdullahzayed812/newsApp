import React from "react";
import { Image, ImageStyle, useWindowDimensions } from "react-native";
import { SMALL_SPACING } from "../config/dimensions";

interface Props {
  adsImageSource: { uri: string | undefined };
  adsContainerStyle?: ImageStyle;
}

export const ADS: React.FC<Props> = React.memo(
  ({ adsImageSource, adsContainerStyle }) => {
    const { width } = useWindowDimensions();

    const [height, setHeight] = React.useState<number>();

    Image.getSize(adsImageSource.uri!, (width, height) => {
      setHeight(height);
    });

    return adsImageSource ? (
      <Image
        source={adsImageSource}
        style={[
          adsContainerStyle,
          {
            width: width * 0.9,
            height,
            marginVertical: SMALL_SPACING / 2,
            resizeMode: "contain",
          },
        ]}
      />
    ) : null;
  },
);

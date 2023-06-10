import React from "react";
import {
  Image,
  ImageSourcePropType,
  Share,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { IMAGES } from "../config/images";
import { SMALL_SPACING } from "../config/dimensions";
import { TEXT_14 } from "../config/fonts";
import { COLORS } from "../config/colors";

interface Props {
  twitter?: string;
  telegram?: string;
  whatsapp?: string;
  title?: string;
}

export const SocialContainer: React.FC<Props> = ({
  twitter,
  telegram,
  whatsapp,
  title,
}) => {
  const openShareApp = async (link: string | undefined, buttonName: string) => {
    const result = await Share.share({ message: "Share start" });
  };

  const SOCIAL_ITEM_DATA: {
    imageSource: ImageSourcePropType;
    link: string | undefined;
    onPress: () => void;
  }[] = [
    {
      imageSource: IMAGES.twitter,
      link: twitter,
      onPress: () => openShareApp(twitter, "twitter"),
    },
    {
      imageSource: IMAGES.instagram,
      link: telegram,
      onPress: () => openShareApp(telegram, "telegram"),
    },
    {
      imageSource: IMAGES.whatsapp,
      link: whatsapp,
      onPress: () => openShareApp(whatsapp, "whatsapp"),
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      <View style={styles.socialContainer}>
        {SOCIAL_ITEM_DATA.map(({ imageSource, onPress }, index) => (
          <TouchableOpacity key={index} onPress={onPress}>
            <Image source={imageSource} />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: SMALL_SPACING,
    paddingHorizontal: SMALL_SPACING,
  },
  text: {
    ...TEXT_14,
    marginBottom: SMALL_SPACING / 2,
  },
  socialContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    borderRadius: SMALL_SPACING / 2,
    paddingVertical: SMALL_SPACING * 1.3,
    backgroundColor: COLORS.white,
  },
});

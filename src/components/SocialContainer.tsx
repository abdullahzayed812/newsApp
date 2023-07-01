import React from "react";
import {
  Image,
  ImageSourcePropType,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { IMAGES } from "../config/images";
import { SMALL_SPACING } from "../config/dimensions";
import { TEXT_14 } from "../config/fonts";
import { COLORS } from "../config/colors";
import { useAppSelector } from "../redux/hooks";

interface Props {
  title?: string;
}

export const SocialContainer: React.FC<Props> = ({ title }) => {
  const { settings } = useAppSelector((state) => state.settings);

  const openShareApp = async (url: string) => {
    try {
      await Linking.openURL(url);
    } catch (error) {
      console.log(error);
    }
  };

  const SOCIAL_ITEM_DATA: {
    imageSource: ImageSourcePropType;
    onPress: () => void;
  }[] = [
    {
      imageSource: IMAGES.facebook,

      onPress: () => openShareApp(settings?.facebook),
    },
    {
      imageSource: IMAGES.twitter,
      onPress: () => openShareApp(settings?.twitter),
    },
    {
      imageSource: IMAGES.instagram,
      onPress: () => openShareApp(settings?.instagram),
    },
    {
      imageSource: IMAGES.tikTok,
      onPress: () => openShareApp(settings?.tik_tok),
    },
    {
      imageSource: IMAGES.youtube,
      onPress: () => openShareApp(settings?.youtube),
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      <View style={styles.socialContainer}>
        {SOCIAL_ITEM_DATA.map(({ imageSource, onPress }, index) => (
          <TouchableOpacity key={index} onPress={onPress}>
            <Image source={imageSource} style={styles.socialImage} />
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
    justifyContent: "center",
    gap: 30,
    borderRadius: SMALL_SPACING / 2,
    padding: SMALL_SPACING * 1.3,
    backgroundColor: COLORS.white,
  },
  socialImage: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },
});

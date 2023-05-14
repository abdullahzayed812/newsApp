import React from "react";
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import { SMALL_SPACING } from "../../constants/dimensions";
import { TEXT_14 } from "../../constants/fonts";
import { IMAGES } from "../../helpers/images";
import { COLORS } from "../../helpers/colors";

const SOCIAL_ITEM_DATA: ImageSourcePropType[] = [
  IMAGES.facebook,
  IMAGES.twitter,
  IMAGES.instagram,
  IMAGES.youtube,
];

export const SocialContainer: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>تابعنا على</Text>
      <View style={styles.socialContainer}>
        {SOCIAL_ITEM_DATA.map((imageSource) => (
          <TouchableOpacity>
            <Image source={imageSource} />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: SMALL_SPACING * 1.3,
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

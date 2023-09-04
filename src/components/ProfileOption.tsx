import React from "react";
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { SMALL_SPACING } from "../config/dimensions";
import { TEXT_14 } from "../config/fonts";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import {
  ProfileStackScreenParamsList,
  RootStackParamList,
} from "../navigation/types";

interface Props {
  text: string;
  imageSource: ImageSourcePropType;
  onPress?: () => void;
}

export const ProfileOption: React.FC<Props> = ({
  text,
  imageSource,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={imageSource} style={{ width: 30, height: 30 }} />
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row-reverse",
    alignItems: "center",
    marginVertical: SMALL_SPACING / 1.7,
  },
  text: {
    ...TEXT_14,
    marginRight: SMALL_SPACING,
  },
});

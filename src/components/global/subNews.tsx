import React from "react";
import { NewsActions } from "./newsActions";
import {
  Dimensions,
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SMALL_SPACING } from "../../config/dimensions";
import { IMAGES } from "../../config/images";
import { TEXT_12, TEXT_14 } from "../../config/fonts";
import { COLORS } from "../../config/colors";
import { TimeStamp } from "./timeStamp";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { NewsStackScreenParamsList } from "../../navigation/types";

interface Props {
  subNewsImageSource: ImageSourcePropType;
  subNewsContent: string;
}

export const SubNews: React.FC<Props> = ({
  subNewsContent,
  subNewsImageSource,
}) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<NewsStackScreenParamsList>>();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        navigation.navigate("NewsScreen", {
          newsImage: subNewsImageSource,
          newsContent: subNewsContent,
        })
      }
    >
      <Image source={subNewsImageSource} style={{ resizeMode: "cover" }} />
      <View>
        <TimeStamp text="منذ 10 دقائق" />
        <Text style={styles.newsText}>{subNewsContent}</Text>
        <NewsActions dark />
      </View>
    </TouchableOpacity>
  );
};

const { width } = Dimensions.get("screen");

const styles = StyleSheet.create({
  container: {
    flexDirection: "row-reverse",
    alignItems: "center",
    gap: SMALL_SPACING / 2,
    marginVertical: SMALL_SPACING / 2,
  },

  timeStamp: {
    flexDirection: "row-reverse",
    alignItems: "center",
  },
  time: {
    ...TEXT_12,
    marginRight: SMALL_SPACING / 4,
    color: COLORS.mainGray,
  },
  newsText: {
    ...TEXT_14,
    width: width * 0.6,
  },
});

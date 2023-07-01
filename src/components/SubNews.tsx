import React, { FC } from "react";
import { NewsActions } from "./NewsActions";
import {
  Dimensions,
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { NewsStackScreenParamsList } from "../navigation/types";
import { SMALL_SPACING } from "../config/dimensions";
import { TEXT_12 } from "../config/fonts";
import { COLORS } from "../config/colors";

interface Props {
  newsID?: number | undefined;
  subNewsImageSource: { uri: string };
  subNewsContent: string | undefined;
}

export const SubNews: React.FC<Props> = ({
  newsID,
  subNewsContent,
  subNewsImageSource,
}) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<NewsStackScreenParamsList>>();

  const renderNewsImage = subNewsImageSource ? (
    <Image source={subNewsImageSource} style={styles.image} />
  ) : null;

  const renderSubNewsContent = (
    <View>
      <Text style={styles.newsText}>{subNewsContent}</Text>
      {/* <NewsActions dark /> */}
    </View>
  );

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate("NewsScreen", { newsID })}
    >
      {renderNewsImage}
      {renderSubNewsContent}
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
    ...TEXT_12,
    width: width * 0.5,
  },
  image: {
    width: 130,
    height: 110,
    resizeMode: "contain",
    borderRadius: SMALL_SPACING,
  },
});

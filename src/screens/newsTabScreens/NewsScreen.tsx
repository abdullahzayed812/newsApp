import React from "react";
import { Header } from "../../components/global/header";
import { ADS } from "../../components/global/ads";
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { NewsCategoryTitle } from "../../components/global/newsCategoryTitle";
import { SMALL_SPACING } from "../../config/dimensions";
import { NewsUserActions } from "../../components/global/newsUserActions";
import { RouteProp } from "@react-navigation/native";
import { NewsStackScreenParamsList } from "../../navigation/types";
import { TimeStamp } from "../../components/global/timeStamp";
import { HEADER_3, TEXT_14 } from "../../config/fonts";
import { COLORS } from "../../config/colors";

interface Props {
  route: RouteProp<NewsStackScreenParamsList, "NewsScreen">;
}

export const NewsScreen: React.FC<Props> = ({ route }) => {
  const { newsImage, newsHeader, newsCategory, newsContent } = route.params;

  return (
    <>
      <Header />
      <ScrollView>
        <View style={styles.container}>
          <ADS />
          <NewsCategoryTitle text={newsCategory} />
          <TimeStamp text="منذ 3 ساعات" />
          <Text style={styles.newsText}>{newsHeader}</Text>
        </View>
        <Image source={newsImage} style={styles.image} />
        <NewsUserActions />
        <Text style={styles.content}>{newsContent}</Text>
      </ScrollView>
    </>
  );
};

const { width, height } = Dimensions.get("screen");

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: SMALL_SPACING,
  },
  image: {
    width,
    height: height * 0.3,
    marginTop: SMALL_SPACING / 4,
    resizeMode: "cover",
  },
  newsText: {
    ...HEADER_3,
  },
  content: {
    ...TEXT_14,
    paddingHorizontal: SMALL_SPACING,
    marginTop: SMALL_SPACING / 2,
    textAlign: "right",
    color: COLORS.mediumGray,
  },
});

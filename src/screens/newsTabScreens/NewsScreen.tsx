import React from "react";
import { Header } from "../../components/global/header";
import { ADS } from "../../components/global/ads";
import {
  Dimensions,
  Image,
  ImageSourcePropType,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import { Container } from "../../components/global/container";
import { NewsCategoryTitle } from "../../components/global/newsCategoryTitle";
import { SMALL_SPACING } from "../../constants/dimensions";
import { NewsUserActionsItem } from "../../components/global/newsUserActionsItem";
import { NewsUserActions } from "../../components/global/newsUserActions";

interface Props {
  imageSource: ImageSourcePropType;
}

export const NewsScreen: React.FC<Props> = ({ imageSource }) => {
  return (
    <>
      <Header />
      <ScrollView>
        <View style={styles.container}>
          <ADS />
          <NewsCategoryTitle text="الرياضة" />
        </View>
        <Image source={imageSource} style={styles.image} />
        <View style={styles.container}>
          <NewsUserActions />
        </View>
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
    resizeMode: "cover",
  },
});

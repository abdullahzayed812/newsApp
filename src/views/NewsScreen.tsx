import { RouteProp } from "@react-navigation/native";
import React from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { NewsStackScreenParamsList } from "../navigation/types";
import { Header } from "../components/Header";
import { ADS } from "../components/Adds";
import { NewsCategoryTitle } from "../components/NewsCategoryTitle";
import { TimeStamp } from "../components/TimeStamp";
import { NewsUserActions } from "../components/NewsUserActions";
import { SMALL_SPACING } from "../config/dimensions";
import { HEADER_3, TEXT_14 } from "../config/fonts";
import { COLORS } from "../config/colors";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { getNews, getSingleNews } from "../redux/singleNews/singleNewsSlice";
import { Loading } from "../components/Loading";

interface Props {
  route: RouteProp<NewsStackScreenParamsList, "NewsScreen">;
}

export const NewsScreen: React.FC<Props> = ({ route }) => {
  const dispatch = useAppDispatch();

  const { newsID } = route.params;

  const { singleNews, loading: loadingSingleNews } = useAppSelector(getNews);

  React.useEffect(() => {
    (async () => await getSingleNews(dispatch, newsID))();
  }, []);

  return (
    <>
      <Header />
      <ScrollView contentContainerStyle={{ paddingVertical: SMALL_SPACING }}>
        {loadingSingleNews ? (
          <Loading />
        ) : (
          <>
            <View style={styles.container}>
              <NewsCategoryTitle text={singleNews?.category_name} />
              <Text style={styles.newsText}>{singleNews?.name}</Text>
            </View>
            {singleNews?.image ? (
              <Image source={{ uri: singleNews?.image }} style={styles.image} />
            ) : null}
            <NewsUserActions />
            <Text style={styles.content}>{singleNews?.content}</Text>
            <ADS />
          </>
        )}
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

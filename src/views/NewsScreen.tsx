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
import { NewsCategoryTitle } from "../components/NewsCategoryTitle";
import { TimeStamp } from "../components/TimeStamp";
import { NewsUserActions } from "../components/NewsUserActions";
import { SMALL_SPACING } from "../config/dimensions";
import { HEADER_3, TEXT_14, TEXT_16 } from "../config/fonts";
import { COLORS } from "../config/colors";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { getNews, getSingleNews } from "../redux/singleNews/singleNewsSlice";
import { Loading } from "../components/Loading";
import { SubNews } from "../components/SubNews";

interface Props {
  route: RouteProp<NewsStackScreenParamsList, "NewsScreen">;
}

export const NewsScreen: React.FC<Props> = ({ route }) => {
  const dispatch = useAppDispatch();

  const { newsID } = route.params;

  const { singleNews, loading: loadingSingleNews } = useAppSelector(getNews);

  React.useEffect(() => {
    (async () => await getSingleNews(dispatch, newsID))();
  }, [newsID]);

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
              <TimeStamp text={singleNews?.created_at} />
              <Text style={styles.newsText}>{singleNews?.name}</Text>
            </View>
            {singleNews?.image ? (
              <Image source={{ uri: singleNews?.image }} style={styles.image} />
            ) : null}
            <NewsUserActions
              twitter={singleNews?.twitter}
              whatsapp={singleNews?.whatsapp}
              telegram={singleNews?.telegram}
              newsID={singleNews.id}
              newsLikes={singleNews.likes}
              newsDislikes={singleNews.dislikes}
              comments={singleNews?.comments}
            />
            <Text style={styles.content}>
              {singleNews?.content?.replaceAll(/(<[^>]*>)/gi, "")}
            </Text>
            {/* add ads here */}
            <Text
              style={{
                ...TEXT_16,
                marginVertical: SMALL_SPACING,
                paddingRight: SMALL_SPACING / 2,
              }}
            >
              أخبار ذات صلة
            </Text>
            <ScrollView showsHorizontalScrollIndicator={false}>
              {singleNews?.related_items?.map((item) => (
                <SubNews
                  key={item.name}
                  subNewsImageSource={{ uri: item.image }}
                  subNewsContent={item.name}
                  newsID={item.id}
                />
              ))}
            </ScrollView>
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

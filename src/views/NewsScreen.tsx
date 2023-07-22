import { RouteProp } from "@react-navigation/native";
import React from "react";
import {
  BackHandler,
  Dimensions,
  Image,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  NewsStackScreenParamsList,
  TabStackScreenParamsList,
} from "../navigation/types";
import { Header } from "../components/Header";
import { NewsCategoryTitle } from "../components/NewsCategoryTitle";
import { TimeStamp } from "../components/TimeStamp";
import { NewsUserActions } from "../components/NewsUserActions";
import { SMALL_SPACING } from "../config/dimensions";
import { HEADER_3, TEXT_12, TEXT_14, TEXT_16 } from "../config/fonts";
import { COLORS } from "../config/colors";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { getNews, getSingleNews } from "../redux/singleNews/singleNewsSlice";
import { Loading } from "../components/Loading";
import { SubNews } from "../components/SubNews";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { IMAGES } from "../config/images";
import { globalStyles } from "../config/globalStyles";

interface Props {
  navigation: NativeStackNavigationProp<TabStackScreenParamsList>;
  route: RouteProp<NewsStackScreenParamsList, "NewsScreen">;
}

export const NewsScreen: React.FC<Props> = ({ navigation, route }) => {
  const dispatch = useAppDispatch();

  const { newsID, videoURL } = route.params;

  const { singleNews, loading: loadingSingleNews } = useAppSelector(getNews);

  const { categoryID } = useAppSelector((state) => state.categories);

  React.useEffect(() => {
    (async () => await getSingleNews(dispatch, newsID))();
  }, [newsID]);

  BackHandler.addEventListener("hardwareBackPress", function () {
    navigation.reset({ routes: [{ name: "NewsStackScreen" }] });
    return true;
  });

  const openVideoLink = () => {
    Linking.openURL(videoURL!);
  };

  return (
    <>
      <Header />
      <ScrollView contentContainerStyle={{ paddingVertical: SMALL_SPACING }}>
        {loadingSingleNews ? (
          <Loading />
        ) : (
          <>
            <View style={styles.container}>
              <View style={{ marginVertical: SMALL_SPACING / 2 }}>
                <NewsCategoryTitle text={singleNews?.category_name} />
                <TimeStamp text={singleNews?.created_at} />
                <Text style={{ ...TEXT_14, fontWeight: "bold" }}>
                  {singleNews?.views} مشاهدة
                </Text>
              </View>
              <Text style={styles.newsText}>{singleNews?.name}</Text>
            </View>
            {singleNews?.image ? (
              <View>
                <Image
                  source={{ uri: singleNews?.image }}
                  style={styles.image}
                />
                {categoryID === 10 ? (
                  <TouchableOpacity
                    style={styles.videoImageContainer}
                    onPress={openVideoLink}
                  >
                    <Image source={IMAGES.play} style={styles.videoImage} />
                  </TouchableOpacity>
                ) : null}
              </View>
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
              {singleNews?.content?.replace(/((<[^>]*>)|(\&.+\;))/gi, "")}
            </Text>
            {/* add ads here */}
            <Text
              style={{
                ...TEXT_16,
                marginTop: SMALL_SPACING * 3,
                marginBottom: SMALL_SPACING / 2,
                paddingRight: SMALL_SPACING / 2,
              }}
            >
              أخبار ذات صلة
            </Text>
            <View style={styles.relatedNews}>
              {singleNews?.related_items?.map((item) => (
                <SubNews
                  key={item.id}
                  subNewsImageSource={{ uri: item.image }}
                  subNewsContent={item.name}
                  newsID={item.id}
                />
              ))}
            </View>
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
  relatedNews: {
    paddingRight: SMALL_SPACING,
  },
  videoImageContainer: {
    ...StyleSheet.absoluteFillObject,
    ...globalStyles.center,
    backgroundColor: "transparent",
  },
  videoImage: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
});

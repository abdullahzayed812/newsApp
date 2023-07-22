import React from "react";
import { FlatList } from "react-native";
import { Header } from "../components/Header";
import { BreakingNews } from "../components/BreakingNews";
import { MoreWatching } from "../components/MoreWatching";
import { PopularPosts } from "../redux/popularPost/popularPostSlice";
import { Loading } from "../components/Loading";
import { MainNewsCard } from "../components/MainNewsCard";
import { instance } from "../config/api";
import { LAST_NEWS_ENDPOINT_URL } from "../config/urls";
import { SMALL_SPACING } from "../config/dimensions";
import { ADS } from "../components/Adds";
import { getAdvertisement, getAdvertisements } from "../redux/advertisement";
import { ContentHeader } from "../components/ContentHeader";
import { IMAGES } from "../config/images";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

const renderItem = ({ item }: { item: PopularPosts }) => {
  return (
    <MainNewsCard
      id={item.id}
      imageBackgroundSource={{ uri: item.image }}
      content={item.name}
      isAds={item.isAds}
    />
  );
};

const ADS_IMAGES_URLS = [
  "position_3",
  "position_4",
  "position_5",
  "position_6",
  "position_7",
];

export const MainScreen: React.FC = () => {
  const dispatch = useAppDispatch();

  const [lastNewsList, setLastNewsList] = React.useState<PopularPosts[]>([]);
  const [adsIndex, setAdsIndex] = React.useState<number>(0);
  const [offset, setOffset] = React.useState<number>(0);

  console.log({ offset, adsIndex });

  const { advertisement, loading } = useAppSelector(getAdvertisements);

  React.useEffect(() => {
    (async () => {
      await getAdvertisement(dispatch);
    })();
  }, []);

  React.useEffect(() => {
    (async () => {
      const response = await instance.get(LAST_NEWS_ENDPOINT_URL, {
        params: { offset },
      });
      setLastNewsList([...lastNewsList, ...response?.data?.data]);
    })();
  }, [offset]);

  const handleEndReached = () => {
    if (offset > 39) {
      return;
    }
    setLastNewsList([
      ...lastNewsList,
      { isAds: true, image: advertisement[ADS_IMAGES_URLS[adsIndex]] },
    ]);
    setAdsIndex(adsIndex + 1);
    setOffset(offset + 10);
  };

  return (
    <>
      <Header />
      {lastNewsList.length === 0 || loading ? (
        <Loading />
      ) : (
        <FlatList
          data={lastNewsList}
          keyExtractor={(item) => item.image!}
          renderItem={renderItem}
          ListHeaderComponent={() => (
            <>
              <BreakingNews />
              <MoreWatching />
              {advertisement?.position_2 ? (
                <ADS
                  adsContainerStyle={{ paddingHorizontal: SMALL_SPACING / 2 }}
                  adsImageSource={{
                    uri: advertisement?.position_2,
                  }}
                />
              ) : null}
              <ContentHeader text="إخر الأخبار" imageSource={IMAGES.lastNews} />
            </>
          )}
          onEndReachedThreshold={0}
          ListFooterComponent={() => <Loading />}
          onEndReached={handleEndReached}
          contentContainerStyle={{ padding: SMALL_SPACING }}
        />
      )}
      {/* <ScrollView>
        <Container>
          <LastNews offset={0} />
        </Container>
      </ScrollView> */}
    </>
  );
};

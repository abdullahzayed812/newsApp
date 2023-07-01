import React from "react";
import { StyleSheet, View } from "react-native";
import { MainNewsCard } from "./MainNewsCard";
import { SMALL_SPACING } from "../config/dimensions";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { Loading } from "./Loading";
import { getLastNews } from "../redux/lastNews/lastNewsSlice";
import { PopularPosts } from "../redux/popularPost/popularPostSlice";

interface Props {
  offset: number;
}

export const LastNews: React.FC<Props> = ({ offset }) => {
  const dispatch = useAppDispatch();

  const [lastNewsList, setLastNewsList] = React.useState<PopularPosts[]>([]);

  const { loading } = useAppSelector((state) => state.lastNews);

  React.useEffect(() => {
    (async () => {
      const response = await getLastNews(dispatch, { offset });
      setLastNewsList(response?.data?.data);
    })();
  }, [offset]);

  if (loading) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      {lastNewsList.map((news) => (
        <MainNewsCard
          key={news.id}
          id={news.id}
          imageBackgroundSource={{ uri: news?.image }}
          content={news.name}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: SMALL_SPACING / 2,
  },
  cardStyle: {
    marginBottom: SMALL_SPACING / 2,
  },
});

import { FlatList } from "react-native";
import React from "react";
import { COLORS } from "../config/colors";
import { Header } from "../components/Header";
import { Container } from "../components/Container";
import { SubNews } from "../components/SubNews";
import { useAppSelector } from "../redux/hooks";
import {
  Category as CategoryItemType,
  getAllCategories,
} from "../redux/categories/categoriesSlice";
import { PopularPosts } from "../redux/popularPost/popularPostSlice";
import { CategoryList } from "../components/CategoryList";
import { instance } from "../config/api";
import { POSTS_BY_CATEGORY_ENDPOINT_URL } from "../config/urls";
import { Loading } from "../components/Loading";
import { NewsListHeader } from "../components/NewsListHeader";

const renderItem = ({ item, index }: { item: PopularPosts; index: number }) => {
  return (
    <SubNews
      key={index}
      newsID={item.id}
      videoURL={item.url}
      subNewsImageSource={{ uri: item.image! }}
      subNewsContent={item.name}
      location="News"
    />
  );
};

export const NewsTabScreen: React.FC = () => {
  const [newsList, setNewsList] = React.useState<PopularPosts[]>([]);
  const [postsLimit, setPostsLimit] = React.useState<number>(10);
  const [loading, setLoading] = React.useState<boolean>(false);

  const { categories, categoryID } = useAppSelector(getAllCategories);

  React.useEffect(() => {
    (async () => {
      try {
        postsLimit === 10 ? setLoading(true) : setLoading(false);
        const response = await instance.get(
          `${POSTS_BY_CATEGORY_ENDPOINT_URL}${categoryID}/${postsLimit}/0`,
        );
        const sliceList = response?.data?.data.slice(-10);
        postsLimit === 10
          ? setNewsList(sliceList)
          : setNewsList((prev) => [...prev, ...sliceList]);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    })();
  }, [postsLimit, categoryID]);

  const handleEndReached = async () => {
    if (postsLimit === 50) return;
    setPostsLimit((prev) => prev + 10);
  };

  return (
    <>
      <Header />

      <Container containerStyle={{ backgroundColor: COLORS.white }}>
        <CategoryList categories={categories} setPostsLimit={setPostsLimit} />
        {loading ? (
          <Loading />
        ) : (
          <FlatList
            data={newsList}
            renderItem={({ item, index }) => renderItem({ item, index })}
            ListHeaderComponent={<NewsListHeader />}
            ListFooterComponent={<Loading />}
            initialNumToRender={10}
            onEndReachedThreshold={0}
            onEndReached={handleEndReached}
          />
        )}
      </Container>
    </>
  );
};

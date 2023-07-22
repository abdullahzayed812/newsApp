import { FlatList } from "react-native";
import React from "react";
import { COLORS } from "../config/colors";
import { Header } from "../components/Header";
import { Container } from "../components/Container";
import { SubNews } from "../components/SubNews";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import {
  Category as CategoryItemType,
  getAllCategories,
} from "../redux/categories/categoriesSlice";
import { getPostsByCategoryID } from "../redux/postsByCategory";
import { PopularPosts } from "../redux/popularPost/popularPostSlice";
import { CategoryList } from "../components/CategoryList";

const renderItem = ({ item, index }: { item: PopularPosts; index: number }) => {
  return (
    <SubNews
      key={index}
      newsID={item.id}
      videoURL={item.url}
      subNewsImageSource={{ uri: item.image! }}
      subNewsContent={item.name}
    />
  );
};

export const NewsTabScreen: React.FC = () => {
  const dispatch = useAppDispatch();

  const { categories } = useAppSelector(getAllCategories);
  const { postsByCategoryID } = useAppSelector(
    (state) => state.postsByCategory,
  );

  React.useEffect(() => {
    (async () => {
      try {
        await getPostsByCategoryID(dispatch, 1, 10);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <>
      <Header />

      <Container containerStyle={{ backgroundColor: COLORS.white }}>
        <FlatList
          data={postsByCategoryID}
          renderItem={({ item, index }) => renderItem({ item, index })}
          ListHeaderComponent={<CategoryList categories={categories} />}
        />
      </Container>
    </>
  );
};

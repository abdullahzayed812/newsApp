import { ImageSourcePropType, ScrollView, View } from "react-native";
import { IMAGES } from "../config/images";
import React from "react";
import { COLORS } from "../config/colors";
import { Header } from "../components/Header";
import { Container } from "../components/Container";
import { SMALL_SPACING } from "../config/dimensions";
import { Category } from "../components/Category";
import { MainNewsCard } from "../components/MainNewsCard";
import { SubNews } from "../components/SubNews";
import { ADS } from "../components/Adds";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { getAllCategories } from "../redux/categories/categoriesSlice";
import { Loading } from "../components/Loading";
import {
  getPopularPosts,
  getPost,
} from "../redux/popularPost/popularPostSlice";

interface Item {
  text: string;
  imageSource: ImageSourcePropType;
}

const CATEGORY_IMAGE: ImageSourcePropType[] = [
  IMAGES.ball,
  IMAGES.note,
  IMAGES.share,
  IMAGES.ball,
  IMAGES.note,
  IMAGES.share,
  IMAGES.ball,
  IMAGES.note,
];

export const NewsTabScreen: React.FC = () => {
  const dispatch = useAppDispatch();

  const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState<
    number | undefined
  >(undefined);

  const { loading: loadingCategories, categories } =
    useAppSelector(getAllCategories);

  const { loading: loadingPopularPosts, popularPosts } =
    useAppSelector(getPost);

  React.useEffect(() => {
    (async () => await getPopularPosts(dispatch))();
  }, []);

  const createCategories = () => {
    return loadingCategories ? (
      <Loading />
    ) : (
      categories.map((category, index) => (
        <Category
          index={index}
          key={`${category.id}-${category.key}`}
          text={category.name}
          onPress={setSelectedCategoryIndex}
          selectedCategoryIndex={selectedCategoryIndex}
          imageSource={CATEGORY_IMAGE[index]}
        />
      ))
    );
  };

  const createMainPopularPost = () => {
    return loadingPopularPosts ? (
      <Loading />
    ) : (
      <MainNewsCard
        id={popularPosts[0]?.id}
        imageBackgroundSource={{ uri: popularPosts[0]?.image }}
        content={popularPosts[0]?.name}
      />
    );
  };

  const createSubNews = () => {
    return loadingPopularPosts ? (
      <Loading />
    ) : (
      <SubNews
        newsID={popularPosts[1]?.id}
        subNewsContent={popularPosts[1]?.name}
        subNewsImageSource={{
          uri: popularPosts[1]?.image,
        }}
      />
    );
  };

  return (
    <>
      <Header />
      <Container containerStyle={{ backgroundColor: COLORS.white }}>
        <View style={{ height: 40, marginBottom: SMALL_SPACING / 2 }}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {createCategories()}
          </ScrollView>
        </View>
        <ScrollView>
          {createMainPopularPost()}
          {createSubNews()}
          <ADS />
          {Array.from({ length: 10 }).map((_, index) => (
            <SubNews
              key={index}
              subNewsImageSource={IMAGES.subNews}
              subNewsContent="السلام عليكم ورحمة الله وبركاته، اللهم اصلح بالنا وارزقنا الطاعة الخالصة لوجهك الكريم"
            />
          ))}
        </ScrollView>
      </Container>
    </>
  );
};

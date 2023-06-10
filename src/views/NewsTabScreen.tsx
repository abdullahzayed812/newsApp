import { ImageSourcePropType, ScrollView, StatusBar, View } from "react-native";
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
import { getPostsByCategoryID } from "../redux/postsByCategory";
import { getAdvertisement, getAdvertisements } from "../redux/advertisement";

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

  const categoriesRef = React.useRef<ScrollView>(null);

  const { categories } = useAppSelector(getAllCategories);
  const { loading: popularPostsLoading, popularPosts } =
    useAppSelector(getPost);
  const { categoryID } = useAppSelector((state) => state.categories);

  const { loading: postsByCategoryIDLoading, postsByCategoryID } =
    useAppSelector((state) => state.postsByCategory);

  const { loading: advertisementLoading, advertisement } =
    useAppSelector(getAdvertisements);

  React.useEffect(() => {
    categoriesRef?.current?.scrollToEnd({ animated: false });
  }, [categoriesRef.current]);

  React.useEffect(() => {
    (async () => {
      await getPopularPosts(dispatch);
    })();
  }, []);

  React.useEffect(() => {
    (async () => {
      await getPostsByCategoryID(dispatch, categoryID - 1);
    })();
  }, [categoryID]);

  const createCategories = () => {
    return categories.map((category, index) => (
      <Category
        index={index + 1}
        key={`${category.id}-${category.key}`}
        text={category.name}
        imageSource={CATEGORY_IMAGE[index]}
      />
    ));
  };

  const createMainPopularPost = () => {
    return popularPostsLoading ? (
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
    return popularPostsLoading ? (
      <Loading />
    ) : (
      <SubNews
        newsID={popularPosts[1]?.id}
        subNewsContent={popularPosts[1]?.name}
        subNewsImageSource={popularPosts[1]?.image}
      />
    );
  };

  return (
    <>
      <Header />
      <View
        style={{
          height: 35,
          backgroundColor: "white",
        }}
      >
        <ScrollView
          ref={categoriesRef}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            flexDirection: "row-reverse",
            justifyContent: "flex-end",
          }}
        >
          {createCategories()}
        </ScrollView>
      </View>
      <Container containerStyle={{ backgroundColor: COLORS.white }}>
        <ScrollView>
          {createMainPopularPost()}
          {createSubNews()}
          {advertisementLoading ? (
            <Loading />
          ) : advertisement?.position_1 ? (
            <ADS
              adsImageSource={{
                uri: `https://newspens.sa${advertisement?.position_1}`,
              }}
            />
          ) : null}
          {postsByCategoryIDLoading ? (
            <Loading />
          ) : (
            postsByCategoryID.map((item, index) => (
              <SubNews
                key={index}
                newsID={item.id}
                subNewsImageSource={item.image}
                subNewsContent={item.name}
              />
            ))
          )}
        </ScrollView>
      </Container>
    </>
  );
};

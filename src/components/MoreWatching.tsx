import React from "react";
import {
  FlatList,
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { ContentHeader } from "./ContentHeader";
import { IMAGES } from "../config/images";
import { MainNewsCard } from "./MainNewsCard";
import { SMALL_SPACING } from "../config/dimensions";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import {
  PopularPosts,
  getPopularPosts,
} from "../redux/popularPost/popularPostSlice";
import { getPost } from "../redux/popularPost/popularPostSlice";

const renderItem = (item: PopularPosts) => {
  return (
    <MainNewsCard
      id={item.id}
      imageBackgroundSource={{ uri: item.image }}
      content={item.name}
      isMoreWatching={true}
    />
  );
};

export const MoreWatching: React.FC = () => {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    (async () => {
      await getPopularPosts(dispatch);
    })();
  }, []);

  const { popularPosts } = useAppSelector(getPost);

  return (
    <View style={{ marginTop: SMALL_SPACING / 2 }}>
      <ContentHeader text="الأكثر مشاهدة" imageSource={IMAGES.moreWatching} />
      <FlatList
        data={popularPosts}
        renderItem={({ item }) => renderItem(item)}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

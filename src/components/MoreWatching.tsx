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

interface FlatListItemProp {
  category: string;
  timeStamp: string;
  newsContent: string;
  imageBackgroundSource: ImageSourcePropType;
}

const DATA: FlatListItemProp[] = [
  {
    category: "مقالات",
    timeStamp: "منذ 1 دقيقة",
    newsContent: "إحتمال وارد قد نتمكن من مشاهدة الكواكب المتشكلة من المادة",
    imageBackgroundSource: IMAGES.moreWatchingFlatList,
  },
  {
    category: "مقالات",
    timeStamp: "منذ 1 دقيقة",
    newsContent: "إحتمال وارد قد نتمكن من مشاهدة الكواكب المتشكلة من المادة",
    imageBackgroundSource: IMAGES.moreWatchingFlatList1,
  },
  {
    category: "منوعات",
    timeStamp: "منذ 1 دقيقة",
    newsContent: "إحتمال وارد قد نتمكن من مشاهدة الكواكب المتشكلة من المادة",
    imageBackgroundSource: IMAGES.moreWatchingFlatList2,
  },
];

const renderItem = (item: FlatListItemProp) => {
  return (
    <MainNewsCard
      imageBackgroundSource={item.imageBackgroundSource}
      category={item.category}
      timeStamp={item.timeStamp}
      content={item.newsContent}
      isMoreWatching={true}
    />
  );
};

export const MoreWatching: React.FC = () => {
  return (
    <View>
      <ContentHeader text="الأكثر مشاهدة" imageSource={IMAGES.moreWatching} />
      <FlatList
        data={DATA}
        renderItem={({ item }) => renderItem(item)}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

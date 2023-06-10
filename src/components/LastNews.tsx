import React from "react";
import { ContentHeader } from "./ContentHeader";
import { ADS } from "./Adds";
import { ImageSourcePropType, StyleSheet, View } from "react-native";
import { IMAGES } from "../config/images";
import { MainNewsCard } from "./MainNewsCard";
import { SMALL_SPACING } from "../config/dimensions";

interface Item {
  imageBackgroundSource: ImageSourcePropType;
  category: string;
  timeStamp: string;
  content: string;
}

const DATA: Item[] = [
  {
    imageBackgroundSource: IMAGES.mainCard,
    category: "رياضة",
    timeStamp: "منذ 3 ساعات",
    content: "عقدة ريال مدريد تلاحق ليفربول..وكلوب على الموعد بالثأر",
  },
  {
    imageBackgroundSource: IMAGES.mainCard,
    category: "رياضة",
    timeStamp: "منذ 3 ساعات",
    content: "عقدة ريال مدريد تلاحق ليفربول..وكلوب على الموعد بالثأر",
  },
  {
    imageBackgroundSource: IMAGES.mainCard,
    category: "رياضة",
    timeStamp: "منذ 3 ساعات",
    content: "عقدة ريال مدريد تلاحق ليفربول..وكلوب على الموعد بالثأر",
  },
  {
    imageBackgroundSource: IMAGES.mainCard,
    category: "رياضة",
    timeStamp: "منذ 3 ساعات",
    content: "عقدة ريال مدريد تلاحق ليفربول..وكلوب على الموعد بالثأر",
  },
  {
    imageBackgroundSource: IMAGES.mainCard,
    category: "رياضة",
    timeStamp: "منذ 3 ساعات",
    content: "عقدة ريال مدريد تلاحق ليفربول..وكلوب على الموعد بالثأر",
  },
];

export const LastNews: React.FC = () => {
  return (
    <View style={styles.container}>
      <ContentHeader text="آخر الأخبار" imageSource={IMAGES.lastNews} />
      <MainNewsCard
        id={undefined}
        imageBackgroundSource={IMAGES.mainCard}
        category="رياضة"
        content="عقدة ريال مدريد تلاحق ليفربول..وكلوب على الموعد بالثأر"
      />
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

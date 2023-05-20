import React from "react";
import { ContentHeader } from "./contentHeader";
import { IMAGES } from "../../config/images";
import { ImageSourcePropType, StyleSheet, View } from "react-native";
import { SMALL_SPACING } from "../../config/dimensions";
import { Card } from "./card";
import { ADS } from "./ads";

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
      <Card
        imageBackgroundSource={IMAGES.mainCard}
        category="رياضة"
        timeStamp="منذ 3 ساعات"
        content="عقدة ريال مدريد تلاحق ليفربول..وكلوب على الموعد بالثأر"
      />
      <ADS />
      {DATA.map((item, index) => (
        <Card
          cardStyle={styles.cardStyle}
          key={`Item-${index}-${item.category}`}
          imageBackgroundSource={item.imageBackgroundSource}
          category={item.category}
          timeStamp={item.timeStamp}
          content={item.content}
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

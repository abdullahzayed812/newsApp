import { ImageSourcePropType, ScrollView, View } from "react-native";
import { Header } from "../../components/global/header";
import React from "react";
import { Category } from "../../components/global/category";
import { SMALL_SPACING } from "../../constants/dimensions";
import { IMAGES } from "../../helpers/images";
import { Card } from "../../components/global/card";
import { Container } from "../../components/global/container";
import { SubNews } from "../../components/global/subNews";
import { COLORS } from "../../helpers/colors";

interface Item {
  text: string;
  imageSource: ImageSourcePropType;
}

const DATA: Item[] = [
  { text: "السياسة", imageSource: IMAGES.ball },
  { text: "منوعات", imageSource: IMAGES.note },
  { text: "القثافة", imageSource: IMAGES.share },
  { text: "الإقتصاد", imageSource: IMAGES.ball },
  { text: "المجتمع", imageSource: IMAGES.note },
  { text: "آخر الأخبار", imageSource: IMAGES.share },
  { text: "مقالات", imageSource: IMAGES.ball },
  { text: "رياضة", imageSource: IMAGES.note },
];

export const NewsScreen: React.FC = () => {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState<
    number | undefined
  >(undefined);

  return (
    <>
      <Header />
      <Container containerStyle={{ backgroundColor: COLORS.white }}>
        <View style={{ height: 40, marginBottom: SMALL_SPACING / 2 }}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {DATA.map((item, index) => (
              <View style={{ marginRight: SMALL_SPACING / 2 }}>
                <Category
                  key={`item-${index}`}
                  text={item.text}
                  index={index}
                  selectedCategoryIndex={selectedCategoryIndex}
                  setSelectedCategoryIndex={setSelectedCategoryIndex}
                  imageSource={item.imageSource}
                  isListItem
                />
              </View>
            ))}
          </ScrollView>
        </View>
        <Card
          imageBackgroundSource={IMAGES.congress}
          timeStamp="منذ 3 ساعات"
          content="مايك بيس يدلي بشهادته في تحقيق جنائي بشأن دونالد ترامب"
        />
        <SubNews />
      </Container>
    </>
  );
};

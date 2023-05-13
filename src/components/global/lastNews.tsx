import React from "react";
import { ContentHeader } from "./contentHeader";
import { IMAGES } from "../../helpers/images";
import { StyleSheet, View } from "react-native";
import { SMALL_SPACING } from "../../constants/dimensions";
import { Card } from "./card";
import { COLORS } from "../../helpers/colors";

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
      <View style={styles.ads} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: SMALL_SPACING / 2,
  },
  ads: {
    height: 200,
    borderWidth: 2,
    borderColor: COLORS.black,
    marginVertical: SMALL_SPACING,
    borderRadius: 10,
    backgroundColor: COLORS.white,
  },
});

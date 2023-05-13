import React from "react";
import { NewsActions } from "./newsActions";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import { SMALL_SPACING } from "../../constants/dimensions";
import { IMAGES } from "../../helpers/images";
import { TEXT_12, TEXT_14 } from "../../constants/fonts";
import { COLORS } from "../../helpers/colors";

export const SubNews: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image source={IMAGES.subNews} />
      <View>
        <View style={styles.timeStamp}>
          <Image source={IMAGES.clock} />
          <Text style={styles.time}>منذ 40 دقيقة</Text>
        </View>
        <Text style={styles.newsText}>
          السلام عليكم ورحمة الله وبركاته ي اهل الديار
        </Text>
        <NewsActions dark />
      </View>
    </View>
  );
};

const { width } = Dimensions.get("screen");

const styles = StyleSheet.create({
  container: {
    flexDirection: "row-reverse",
    alignItems: "center",
    gap: SMALL_SPACING / 2,
    marginVertical: SMALL_SPACING / 2,
  },

  timeStamp: {
    flexDirection: "row-reverse",
    alignItems: "center",
  },
  time: {
    ...TEXT_12,
    marginRight: SMALL_SPACING / 4,
    color: COLORS.mainGray,
  },
  newsText: {
    ...TEXT_14,
    width: width * 0.6,
  },
});

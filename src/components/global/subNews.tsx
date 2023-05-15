import React from "react";
import { NewsActions } from "./newsActions";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SMALL_SPACING } from "../../constants/dimensions";
import { IMAGES } from "../../helpers/images";
import { TEXT_12, TEXT_14 } from "../../constants/fonts";
import { COLORS } from "../../helpers/colors";
import { TimeStamp } from "./timeStamp";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { NewsStackScreenParamsList } from "../../routes/types";

export const SubNews: React.FC = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<NewsStackScreenParamsList>>();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate("NewsScreen")}
    >
      <Image source={IMAGES.subNews} style={{ resizeMode: "cover" }} />
      <View>
        <TimeStamp text="منذ 10 دقائق" />
        <Text style={styles.newsText}>
          السلام عليكم ورحمة الله وبركاته ي اهل الديار
        </Text>
        <NewsActions dark />
      </View>
    </TouchableOpacity>
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

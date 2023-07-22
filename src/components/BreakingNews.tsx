import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { PipeLine } from "./PipeLine";
import { COLORS } from "../config/colors";
import { TEXT_12 } from "../config/fonts";
import { SMALL_SPACING } from "../config/dimensions";
import { instance } from "../config/api";
import { BREAKING_NEWS_ENDPOINT_URL } from "../config/urls";

export const BreakingNews: React.FC = ({}) => {
  const [breakingNews, setBreakingNews] = React.useState<string>("");

  React.useEffect(() => {
    (async () => {
      try {
        const response = await instance.get(BREAKING_NEWS_ENDPOINT_URL);
        setBreakingNews(response?.data?.message);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <PipeLine backgroundColor={COLORS.orange} />
        <Text style={[TEXT_12, styles.text]}>خبر عاجل</Text>
      </View>
      <Text style={[TEXT_12, styles.text]}>
        احتمال وارد: قد نتمكن من رؤية الكواكب المتشكلة من المادة المظلمة
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: SMALL_SPACING,
    paddingVertical: SMALL_SPACING / 2,
    borderRadius: 12,
    backgroundColor: COLORS.lightRed,
  },
  headerContainer: {
    flexDirection: "row-reverse",
    alignItems: "center",
    marginBottom: 10,
  },

  text: {
    color: COLORS.white,
  },
});

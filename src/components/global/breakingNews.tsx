import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SMALL_SPACING } from "../../config/dimensions";
import { COLORS } from "../../config/colors";
import { TEXT_12 } from "../../config/fonts";
import { PipeLine } from "./pipeLine";

export const BreakingNews: React.FC = ({}) => {
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

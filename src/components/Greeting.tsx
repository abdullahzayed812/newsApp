import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { COLORS } from "../config/colors";
import { SMALL_SPACING } from "../config/dimensions";
import { HEADER_1, TEXT_14 } from "../config/fonts";

export const GreetingBox: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>مرحباً بكم في</Text>
      <Text
        style={[styles.header, { color: COLORS.mainColor, marginBottom: 0 }]}
      >
        صحيفة أقلام الخبر
      </Text>
      <Text style={styles.newsInfo}>صحيفة سعودية شاملة لكافة الإخبار </Text>
      <Text style={[styles.newsInfo, { marginBottom: SMALL_SPACING - 5 }]}>
        المحلية والعالمية{" "}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    ...HEADER_1,
    paddingRight: SMALL_SPACING,
    color: COLORS.white,
  },
  newsInfo: {
    ...TEXT_14,
    paddingRight: SMALL_SPACING,
    color: COLORS.white,
  },
});

import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { HEADER_1, TEXT_14 } from "../../constants/fonts";
import { COLORS } from "../../helpers/colors";
import {
  LARGE_SPACING,
  SMALL_SPACING,
  X_LARGE_SPACING,
} from "../../constants/dimensions";
import { Category } from "../global/category";
import { Button } from "../global/button";

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

const { width } = Dimensions.get("screen");

const styles = StyleSheet.create({
  container: {
    marginTop: 212,
  },
  header: {
    ...HEADER_1,
    marginBottom: SMALL_SPACING,
    paddingRight: SMALL_SPACING,
    color: COLORS.white,
  },
  newsInfo: {
    ...TEXT_14,
    paddingRight: SMALL_SPACING,
    color: COLORS.white,
  },
});

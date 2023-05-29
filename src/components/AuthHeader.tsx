import React from "react";
import { StyleSheet, Text, View, ViewStyle } from "react-native";
import { HeaderBackButton } from "./HeaderButtonBack";
import { SMALL_SPACING } from "../config/dimensions";
import { HEADER_2, TEXT_12 } from "../config/fonts";
import { COLORS } from "../config/colors";

interface Props {
  pageHeaderTitle: string;
}

export const AuthHeader: React.FC<Props> = ({ pageHeaderTitle }) => {
  const renderPageHeaderTitle = (
    <Text style={styles.pageTitle}>{pageHeaderTitle}</Text>
  );

  const renderNewsPaperTitle = (
    <>
      <Text style={[styles.pageTitle, { color: COLORS.mainColor }]}>
        صحيفة أقلام الخبر
      </Text>
      <Text style={[styles.pageTitle, { color: COLORS.lightGray }]}>
        ترحب بكم
      </Text>
    </>
  );

  const OverlayCircleHeader = ({
    backgroundColor,
    scale,
  }: {
    backgroundColor: string;
    scale: number;
  }) => (
    <View
      style={[
        styles.overlayHeader,
        { backgroundColor, transform: [{ scale }] },
      ]}
    />
  );

  return (
    <>
      <OverlayCircleHeader backgroundColor={"#15202B"} scale={1.5} />
      <OverlayCircleHeader backgroundColor={"#0F1A24"} scale={1.7} />
      <HeaderBackButton
        backgroundColor={COLORS.darkAuthHeader}
        paddingTop={SMALL_SPACING * 2}
      />
      <View style={styles.container}>
        {renderPageHeaderTitle}
        {renderNewsPaperTitle}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: SMALL_SPACING,
    paddingBottom: SMALL_SPACING,
    backgroundColor: COLORS.darkAuthHeader,
  },
  pageTitle: {
    ...HEADER_2,
    color: COLORS.white,
  },
  newsPaperTitle: {
    ...TEXT_12,
    color: COLORS.white,
  },
  overlayHeader: {
    width: 200,
    height: 200,
    position: "absolute",
    zIndex: 100,
    top: -100,
    left: -100,
    borderRadius: 100,
  },
});

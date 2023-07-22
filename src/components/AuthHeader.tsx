import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ViewStyle,
  useWindowDimensions,
} from "react-native";
import { HeaderBackButton } from "./HeaderButtonBack";
import { SMALL_SPACING } from "../config/dimensions";
import { HEADER_2, HEADER_3, TEXT_12 } from "../config/fonts";
import { COLORS } from "../config/colors";

interface Props {
  pageHeaderTitle?: string;
  subTitle?: string;
  isLoginScreen?: boolean;
  editProfile?: boolean;
}

export const AuthHeader: React.FC<Props> = ({
  pageHeaderTitle,
  subTitle,
  isLoginScreen,
  editProfile,
}) => {
  const { height } = useWindowDimensions();

  const renderPageHeaderTitle = pageHeaderTitle ? (
    <Text style={styles.pageTitle}>{pageHeaderTitle}</Text>
  ) : null;

  const renderNewsPaperTitle = (
    <>
      {subTitle ? (
        <Text
          style={[
            styles.pageTitle,
            { color: COLORS.mainColor, marginTop: editProfile ? 20 : 0 },
          ]}
        >
          {subTitle}
        </Text>
      ) : null}
      {isLoginScreen ? (
        <Text style={[styles.pageTitle, { color: COLORS.lightGray }]}>
          ترحب بكم
        </Text>
      ) : null}
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
    <View style={[styles.container, { height: height / 3.5 }]}>
      <OverlayCircleHeader backgroundColor={"#15202B"} scale={1.5} />
      <OverlayCircleHeader backgroundColor={"#0F1A24"} scale={1.7} />
      <HeaderBackButton
        backgroundColor={COLORS.darkAuthHeader}
        paddingTop={SMALL_SPACING * 2}
        isHeaderDark
      />
      {/* <View style={styles.container}> */}
      {renderPageHeaderTitle}
      {renderNewsPaperTitle}
      {/* </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: SMALL_SPACING,
    paddingBottom: SMALL_SPACING,
    backgroundColor: COLORS.darkAuthHeader,
  },
  pageTitle: {
    ...HEADER_3,
    zIndex: 100,
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

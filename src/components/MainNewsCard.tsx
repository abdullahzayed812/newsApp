import React from "react";
import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { TabStackScreenParamsList } from "../navigation/types";
import { COLORS } from "../config/colors";
import { SMALL_SPACING } from "../config/dimensions";
import { globalStyles } from "../config/globalStyles";
import { TEXT_12, TEXT_16 } from "../config/fonts";
import { ADS } from "./Adds";

interface Props {
  id: number | undefined;
  imageBackgroundSource: { uri: string | undefined };
  category?: string;
  content?: string;
  isMoreWatching?: boolean;
  cardStyle?: ViewStyle;
  isAds?: boolean;
}

const { width } = Dimensions.get("screen");
const ITEM_WIDTH = width * 0.55;

export const MainNewsCard: React.FC<Props> = React.memo(
  ({
    id,
    imageBackgroundSource,
    content,
    isMoreWatching,
    cardStyle,
    isAds,
  }) => {
    const navigation =
      useNavigation<NativeStackNavigationProp<TabStackScreenParamsList>>();

    const renderCategoryContent = (
      <Text style={isMoreWatching ? styles.text : styles.bigText}>
        {content}
      </Text>
    );

    return isAds ? (
      <ADS adsImageSource={imageBackgroundSource} />
    ) : (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("NewsStackScreen", {
            screen: "NewsScreen",
            params: {
              newsID: id,
            },
          })
        }
        style={[
          styles.container,
          cardStyle,
          {
            width: isMoreWatching ? ITEM_WIDTH : "100%",
            height: isMoreWatching ? undefined : 220,
            marginBottom: isMoreWatching ? undefined : SMALL_SPACING,
          },
        ]}
      >
        <ImageBackground
          source={imageBackgroundSource}
          imageStyle={[
            styles.imageBackground,
            { height: isMoreWatching && !isAds ? undefined : 220 },
          ]}
        >
          <LinearGradient
            colors={[
              COLORS.darkGradient.color1,
              COLORS.darkGradient.color2,
              COLORS.darkGradient.color3,
            ]}
            locations={[0.1, 0.5, 1]}
            style={[
              styles.gradient,
              {
                width: isMoreWatching ? ITEM_WIDTH : "100%",
                height: isMoreWatching ? undefined : 220,
              },
            ]}
          >
            <View
              style={{
                justifyContent: "flex-end",
                // justifyContent: "space-between",
                padding: SMALL_SPACING / 2,
                // paddingTop: isMoreWatching ? SMALL_SPACING : SMALL_SPACING * 5,
                height: isMoreWatching ? 150 : undefined,
              }}
            >
              {/* {renderCategoryNews} */}
              {renderCategoryContent}
            </View>
          </LinearGradient>
        </ImageBackground>
      </TouchableOpacity>
    );
  },
);

const styles = StyleSheet.create({
  container: {
    marginRight: SMALL_SPACING / 2,
    borderRadius: SMALL_SPACING / 2,
  },
  imageBackground: {
    resizeMode: "contain",
    borderRadius: SMALL_SPACING / 2,
  },
  gradient: {
    borderRadius: SMALL_SPACING / 2,
    justifyContent: "flex-end",
  },
  categoryContainer: {
    ...globalStyles.justifyBetween,
    justifyContent: "flex-end",
  },
  text: {
    ...TEXT_12,
    color: COLORS.white,
  },
  bigText: {
    ...TEXT_16,
    color: COLORS.white,
  },
  timeStampContainer: {
    ...globalStyles.justifyBetween,
    justifyContent: "flex-end",
  },
});

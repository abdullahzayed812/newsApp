import React from "react";
import {
  Dimensions,
  ImageBackground,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { PipeLine } from "./PipeLine";
import { NewsActions } from "./NewsActions";
import { TimeStamp } from "./TimeStamp";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { TabStackScreenParamsList } from "../navigation/types";
import { COLORS } from "../config/colors";
import { SMALL_SPACING } from "../config/dimensions";
import { globalStyles } from "../config/globalStyles";
import { TEXT_12, TEXT_16 } from "../config/fonts";

interface Props {
  id: number | undefined;
  imageBackgroundSource: ImageSourcePropType;
  category?: string;
  content?: string;
  isMoreWatching?: boolean;
  cardStyle?: ViewStyle;
}

const { width } = Dimensions.get("screen");
const ITEM_WIDTH = width * 0.55;

export const MainNewsCard: React.FC<Props> = ({
  id,
  imageBackgroundSource,
  category,
  content,
  isMoreWatching,
  cardStyle,
}) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<TabStackScreenParamsList>>();

  const renderCategoryNews = category ? (
    <View style={styles.categoryContainer}>
      <Text style={styles.text}>{category}</Text>
      <PipeLine backgroundColor={COLORS.orange} />
    </View>
  ) : null;

  const renderCategoryContent = (
    <Text style={isMoreWatching ? styles.text : styles.bigText}>{content}</Text>
  );

  return (
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
        { width: isMoreWatching ? ITEM_WIDTH : "100%" },
      ]}
    >
      <ImageBackground
        source={imageBackgroundSource}
        imageStyle={styles.imageBackground}
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
            { width: isMoreWatching ? ITEM_WIDTH : "100%" },
          ]}
        >
          <View
            style={{
              padding: SMALL_SPACING,
              paddingTop: isMoreWatching ? SMALL_SPACING : SMALL_SPACING * 5,
            }}
          >
            {renderCategoryNews}
            {renderCategoryContent}
            <NewsActions />
          </View>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginRight: SMALL_SPACING / 2,
    borderRadius: SMALL_SPACING / 2,
  },
  imageBackground: {
    resizeMode: "cover",
    borderRadius: SMALL_SPACING / 2,
  },
  gradient: {
    borderRadius: SMALL_SPACING / 2,
  },
  categoryContainer: {
    ...globalStyles.justifyBetween,
    justifyContent: "flex-end",
  },
  text: {
    ...TEXT_12,
    marginBottom: SMALL_SPACING / 6,
    color: COLORS.white,
  },
  bigText: {
    ...TEXT_16,
    marginBottom: SMALL_SPACING / 6,
    color: COLORS.white,
  },
  timeStampContainer: {
    ...globalStyles.justifyBetween,
    justifyContent: "flex-end",
  },
});

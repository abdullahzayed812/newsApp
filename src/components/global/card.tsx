import React from "react";
import {
  Dimensions,
  Image,
  ImageBackground,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { COLORS } from "../../helpers/colors";
import { SMALL_SPACING } from "../../constants/dimensions";
import { globalStyles } from "../../helpers/globalStyles";
import { TEXT_12 } from "../../constants/fonts";
import { IMAGES } from "../../helpers/images";
import { PipeLine } from "./pipeLine";
import { NewsActions } from "./newsActions";
import { HEADER_3 } from "../../constants/fonts";

interface Props {
  imageBackgroundSource: ImageSourcePropType;
  category?: string;
  timeStamp: string;
  content: string;
  isFlatListItem?: boolean;
}

const { width } = Dimensions.get("screen");
const ITEM_WIDTH = width * 0.55;

export const Card: React.FC<Props> = ({
  imageBackgroundSource,
  category,
  timeStamp,
  content,
  isFlatListItem,
}) => {
  return (
    <View
      style={[
        styles.container,
        { width: isFlatListItem ? ITEM_WIDTH : "100%" },
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
          style={[
            styles.gradient,
            { width: isFlatListItem ? ITEM_WIDTH : "100%" },
          ]}
        >
          <View
            style={{
              padding: SMALL_SPACING,
              paddingTop: isFlatListItem ? SMALL_SPACING : SMALL_SPACING * 5,
            }}
          >
            {category ? (
              <View style={styles.categoryContainer}>
                <Text style={styles.text}>{category}</Text>
                <PipeLine backgroundColor={COLORS.orange} />
              </View>
            ) : null}
            <View style={styles.timeStampContainer}>
              <Text style={[styles.text, { color: COLORS.mediumGray }]}>
                {timeStamp}
              </Text>
              <Image source={IMAGES.clock} />
            </View>
            <Text style={isFlatListItem ? styles.text : styles.bigText}>
              {content}
            </Text>
            <NewsActions />
          </View>
        </LinearGradient>
      </ImageBackground>
    </View>
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
    ...globalStyles.rowBetween,
    justifyContent: "flex-end",
  },
  text: {
    ...TEXT_12,
    marginBottom: SMALL_SPACING / 6,
    color: COLORS.white,
  },
  bigText: {
    ...HEADER_3,
    marginBottom: SMALL_SPACING / 6,
    color: COLORS.white,
  },
  timeStampContainer: {
    ...globalStyles.rowBetween,
    justifyContent: "flex-end",
  },
});

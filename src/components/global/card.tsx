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
import { COLORS } from "../../config/colors";
import { SMALL_SPACING } from "../../config/dimensions";
import { globalStyles } from "../../config/globalStyles";
import { TEXT_12, TEXT_16 } from "../../config/fonts";
import { PipeLine } from "./pipeLine";
import { NewsActions } from "./newsActions";
import { TimeStamp } from "./timeStamp";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import {
  NewsStackScreenParamsList,
  RootStackParamList,
  TabStackScreenParamsList,
} from "../../navigation/types";
import { IMAGES } from "../../config/images";

interface Props {
  imageBackgroundSource: ImageSourcePropType;
  category?: string;
  timeStamp: string;
  content: string;
  isMoreWatching?: boolean;
  cardStyle?: ViewStyle;
}

const { width } = Dimensions.get("screen");
const ITEM_WIDTH = width * 0.55;

export const Card: React.FC<Props> = ({
  imageBackgroundSource,
  category,
  timeStamp,
  content,
  isMoreWatching,
  cardStyle,
}) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<TabStackScreenParamsList>>();

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("NewsStackScreen", {
          screen: "NewsScreen",
          params: {
            newsImage: imageBackgroundSource,
            newsHeader: content,
            newsCategory: category,
            newsContent: `وتم طرد غابرييل باوليستا مدافع فالنسيا ببطاقة حمراء مباشرة قبل 18 دقيقة على نهاية زمن اللقاء بعد التحام عنيف ضد فينيسيوس كاد أن يتسبب في اندلاع مشاجرة بين اللاعبين على أرض الملعب.
            وجمع ريال مدريد حامل لقب الدوري الإسباني 45 نقطة في المركز الثاني بالترتيب بفارق خمس نقاط خلف برشلونة المتصدر.
            ويمر فالنسيا، الذي استغنى عن خدمات مدربه جينارو جاتوسو، بسلسلة مؤلفة من خمس مباريات متتالية دون انتصار ويحتل المركز 14 برصيد 20 نقطة بفارق نقطة واحدة عن منطقة الهبوط.
            وسجل ريال هدفين في دقيقتين، جاء الأول بتسديدة رائعة من أسينسيو سكنت في الزاوية العليا للمرمى في الدقيقة 52 تبعتها تسجيل فينيسيوس لهدف من مسافة قريبة منهيا هجمة مرتدة سريعة وخاطفة.
            وسيطر الريال على بقية المباراة ضد منافسه الذي ظهر إحباطه من خلال الالتحام المتهور من باوليستا ضد فينيسيوس.
            وقال تيبو كورتوا حارس مرمى ريال مدريد لمنصة دازن "نحن بحاجة لحماية فينيسيوس. إنه لاعب سريع للغاية ومفعم بالحيوية ويستخدم الكثير من المراوغة. المدافعون لا يحبون ذلك. يشعرون أنهم يتعرضون للاستفزاز، لكنها طريقته في اللعب".
            وأضاف: "أنا سعيد لأن حكم مباراة اليوم كان لديه الشجاعة لإظهار البطاقة الحمراء لأنه تدخل بدون الكرة ولا طائل منه. ليس فقط من أجل فيني، ولكن لأجل أي لاعب آخر".
            وكان النادي الملكي تعادل سلبا مع ريال سوسييداد نهاية الأسبوع الماضي ليهدر نقطتين ثمينتين في صراعه مع غريمه برشلونة المتصدر الذي فاز الأربعاء على مضيفه ريال بيتيس 2-1 في مباراة مؤجلة.`,
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
            {category ? (
              <View style={styles.categoryContainer}>
                <Text style={styles.text}>{category}</Text>
                <PipeLine backgroundColor={COLORS.orange} />
              </View>
            ) : null}
            <TimeStamp text={timeStamp} isCardComponent />
            <Text style={isMoreWatching ? styles.text : styles.bigText}>
              {content}
            </Text>
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
    ...globalStyles.rowBetween,
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
    ...globalStyles.rowBetween,
    justifyContent: "flex-end",
  },
});

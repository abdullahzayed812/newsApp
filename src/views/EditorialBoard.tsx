import React from "react";
import { Text, useWindowDimensions } from "react-native";
import { instance } from "../config/api";
import { Loading } from "../components/Loading";
import { EDITORIAL_BOARD_ENDPOINT_URL } from "../config/urls";
import { HeaderBackButton } from "../components/HeaderButtonBack";
import LinearGradient from "react-native-linear-gradient";
import { COLORS } from "../config/colors";
import { TEXT_14 } from "../config/fonts";
import { SMALL_SPACING } from "../config/dimensions";

export const EditorialBoard: React.FC = () => {
  const { width, height } = useWindowDimensions();

  const [loading, setLoading] = React.useState<boolean>(false);
  const [content, setContent] = React.useState<string>("");

  React.useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const response = await instance.get(EDITORIAL_BOARD_ENDPOINT_URL);
        setContent(
          response?.data?.content?.replace(/((<[^>]*>)|(\&.+\;))/gi, ""),
        );
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) return <Loading />;

  return (
    <LinearGradient
      colors={[
        COLORS.statusBar,
        COLORS.lightGradient.color1,
        COLORS.lightGradient.color2,
      ]}
      start={{ x: 0.1, y: 0.0 }}
      end={{ x: 0.8, y: 1 }}
      locations={[0.04, 0.5, 1]}
      style={{ width, height }}
    >
      <HeaderBackButton title="هيئة التحرير" />
      <Text style={{ ...TEXT_14, fontWeight: "bold", padding: SMALL_SPACING }}>
        {content}
      </Text>
    </LinearGradient>
  );
};

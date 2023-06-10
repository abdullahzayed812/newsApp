import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { IMAGES } from "../config/images";
import { SMALL_SPACING } from "../config/dimensions";
import { TEXT_16 } from "../config/fonts";
import React from "react";
import { loadUserData } from "../config/helpers";
import { COLORS } from "../config/colors";

interface Props {
  onPress?: () => void;
}

export const UserInfo: React.FC<Props> = ({ onPress }) => {
  const [user, setUser] = React.useState<{
    first_name: string;
    last_name: string;
    email: string;
    avatar: string;
  }>({
    first_name: "",
    last_name: "",
    email: "",
    avatar: "",
  });

  React.useEffect(() => {
    (async () => {
      try {
        const user = await loadUserData();
        setUser(user);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image
        source={user?.email ? { uri: user.avatar } : IMAGES.user}
        style={styles.avatar}
      />
      {user?.email ? (
        <View>
          <Text style={styles.text}>
            {user?.first_name} {user?.last_name}
          </Text>
          <Text
            style={[styles.text, { fontSize: 14, color: COLORS.mediumGray }]}
          >
            {user?.email}
          </Text>
        </View>
      ) : (
        <Text style={styles.text}>انقر لتسجيل الدخول</Text>
      )}
      <Image source={IMAGES.arrowLeft} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row-reverse",
    alignItems: "center",
    marginBottom: SMALL_SPACING,
    paddingHorizontal: SMALL_SPACING,
  },
  avatar: { width: 70, height: 70, borderRadius: 35, resizeMode: "cover" },
  text: {
    ...TEXT_16,
    marginHorizontal: SMALL_SPACING,
  },
});

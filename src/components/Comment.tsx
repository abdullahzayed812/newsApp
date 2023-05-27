import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TimeStamp } from "./TimeStamp";
import { Avatar } from "./Avatar";
import { SMALL_SPACING } from "../config/dimensions";
import { COLORS } from "../config/colors";
import { globalStyles } from "../config/globalStyles";
import { TEXT_14 } from "../config/fonts";

interface Props {
  username: string;
  timeStamp: string;
  content: string;
}

export const Comment: React.FC<Props> = ({ username, timeStamp, content }) => {
  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <Avatar username={username} />
        <TimeStamp text={timeStamp} />
      </View>
      <Text style={styles.content}>{content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: SMALL_SPACING,
    marginVertical: SMALL_SPACING / 4,
    paddingVertical: SMALL_SPACING / 2,
    backgroundColor: COLORS.white,
  },
  avatarContainer: {
    ...globalStyles.justifyBetween,
    flexDirection: "row-reverse",
    marginBottom: SMALL_SPACING / 2,
  },
  content: {
    ...TEXT_14,
    color: COLORS.mediumGray,
  },
});

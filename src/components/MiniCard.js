import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { useNavigation, useTheme } from "@react-navigation/native";

const MiniCard = props => {
  const navigation = useNavigation();
  const { colors } = useTheme();
  const textColor = colors.iconColor;

  const styles = StyleSheet.create({
    miniCardContainer: {
      flexDirection: "row",
      margin: 15,
      marginBottom: 0,
    },
    cardImage: {
      width: "45%",
      height: 100,
    },
    textContainer: {
      marginLeft: 10,
    },
    miniCardText: {
      fontSize: 17,
      width: Dimensions.get("screen").width / 2,
      color: textColor,
    },
    miniCardChName: {
      fontSize: 12,
      color: textColor,
    },
  });
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("videoPlayer", {
          videoId: props.videoId,
          title: props.title,
        })
      }
    >
      <View style={styles.miniCardContainer}>
        <Image
          source={{
            uri: `https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg`,
          }}
          style={styles.cardImage}
        />
        <View style={styles.textContainer}>
          <Text
            style={styles.miniCardText}
            ellipsizeMode="tail"
            numberOfLines={3}
          >
            {props.title}
          </Text>
          <Text style={styles.miniCardChName}>{props.channel}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MiniCard;

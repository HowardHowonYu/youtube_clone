import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";

const MiniCard = props => {
  return (
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
  );
};

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
  },
  miniCardChName: {
    fontSize: 12,
  },
});

export default MiniCard;

import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import { Entypo, Ionicons, MaterialIcons } from "@expo/vector-icons";

const Card = () => {
  return (
    <View style={styles.cardContainer}>
      <Image
        source={{
          uri:
            "https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        }}
        style={styles.cardImage}
      />
      <View style={styles.cardContents}>
        <MaterialIcons name="account-circle" size={28} color="#212121" />
        <View style={styles.textView}>
          <Text style={styles.text} ellipsizeMode="tail" numberOfLines={2}>
            This is amazing course,adsf asdfadfa dadsas dfadsfasdaa dadsas
            dfadsfasdaa dadsas dfadsfasdaa dadsas dfadsfasdaa dadsas
            dfadsfasdaadadsas dfadsfasdaadadsas dfadsfasdaa
          </Text>
          <Text>This is amazing course</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    marginBottom: 10,
  },
  cardImage: {
    width: "100%",
    height: 200,
  },
  cardContents: {
    flexDirection: "row",
    margin: 5,
  },
  textView: {
    marginLeft: 10,
  },
  text: {
    fontSize: 20,
    width: Dimensions.get("screen").width - 50,
  },
});

export default Card;

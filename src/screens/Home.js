import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, ScrollView, FlatList } from "react-native";
import Header from "../components/Header";
import Card from "../components/Card";
import { useSelector } from "react-redux";

export default function HomeScreen({ navigation }) {
  const cardData = useSelector(state => {
    return state.cardData;
  });
  return (
    <View style={styles.homeView}>
      <Header></Header>
      <ScrollView>
        <FlatList
          data={cardData}
          renderItem={({ item }) => {
            return (
              <Card
                videoId={item.id.videoId}
                title={item.snippet.title}
                channel={item.snippet.channelTitle}
              ></Card>
            );
          }}
          keyExtractor={item => item.id.videoId}
        ></FlatList>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  homeView: {
    flex: 1,
  },
});

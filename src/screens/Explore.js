import React from "react";
import { StyleSheet, Text, View, FlatList, ScrollView } from "react-native";
import Header from "../components/Header";
import { reducer } from "../reducers/reducer";
import Card from "../components/Card";
import { useSelector } from "react-redux";

const LittleCard = ({ name }) => {
  return (
    <View style={styles.littleCardView}>
      <Text style={styles.littleCardText}>{name}</Text>
    </View>
  );
};

const Explore = () => {
  const cardData = useSelector(state => {
    return state.cardData;
  });
  return (
    <View style={styles.exploreView}>
      <Header />
      <ScrollView>
        <View style={styles.littleCardWrapper}>
          <LittleCard name="Gaming"></LittleCard>
          <LittleCard name="Treding"></LittleCard>
          <LittleCard name="Music"></LittleCard>
          <LittleCard name="News"></LittleCard>
          <LittleCard name="Movies"></LittleCard>
          <LittleCard name="Fashion"></LittleCard>
        </View>
        <Text style={styles.exploreText}>Treding Videos</Text>
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
};

const styles = StyleSheet.create({
  exploreView: {
    flex: 1,
  },
  exploreText: {
    borderBottomWidth: 5,
    margin: 8,
    fontSize: 22,
  },
  littleCardWrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  littleCardView: {
    backgroundColor: "red",
    height: 50,
    width: 180,
    borderRadius: 4,
    marginTop: 10,
  },
  littleCardText: {
    textAlign: "center",
    color: "white",
    marginTop: 10,
    fontSize: 22,
  },
});

export default Explore;

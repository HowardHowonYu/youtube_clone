import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "../components/Header";

const Subscribe = () => {
  return (
    <View style={styles.exploreView}>
      <Header />
      <Text>This is Subscribe</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  exploreView: {
    flex: 1,
  },
});

export default Subscribe;

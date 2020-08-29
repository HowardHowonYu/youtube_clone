import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Header from "../components/Header";
import Card from "../components/Card";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.homeView}>
      <Header></Header>
      <ScrollView>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  homeView: {
    flex: 1,
  },
});

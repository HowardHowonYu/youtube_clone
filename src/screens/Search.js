import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import MiniCard from "../components/MiniCard";
import Constant from "expo-constants";
import { useSelector, useDispatch } from "react-redux";
import { useTheme } from "@react-navigation/native";

//https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=songs&type=video&key={api_key}

const SearchScreen = ({ navigation }) => {
  const [value, setValue] = useState("");
  // const [miniCardData, setMiniCard] = useState([]);
  const dispatch = useDispatch();
  const miniCardData = useSelector(state => {
    return state.cardData;
  });
  const [loading, setLoading] = useState(false);
  const { colors } = useTheme();
  const mycolor = colors.iconColor;
  const styles = StyleSheet.create({
    searchScreenContainer: {
      flex: 1,
      marginTop: Constant.statusBarHeight,
    },
    searchBar: {
      padding: 5,
      flexDirection: "row",
      justifyContent: "space-around",
      backgroundColor: colors.headerColor,
      borderBottomWidth: 1,
    },
    textInput: {
      width: "70%",
      backgroundColor: "#e6e6e6",
    },
  });
  const fetchData = () => {
    fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${value}&type=video&key={API_KEY}`
    )
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        setLoading(false);
        dispatch({ type: "add", payload: data.items });
        // setMiniCard(data.items);
      });
  };
  return (
    <View style={styles.searchScreenContainer}>
      <View style={styles.searchBar}>
        <Ionicons
          name="md-arrow-back"
          size={32}
          color="black"
          onPress={() => navigation.goBack()}
          style={{ color: mycolor }}
        />
        <TextInput
          style={styles.textInput}
          value={value}
          onChangeText={text => setValue(text)}
        />
        <Ionicons
          name="md-send"
          size={32}
          color="black"
          onPress={() => fetchData()}
          style={{ color: mycolor }}
        />
      </View>
      {/* <ScrollView>
        <MiniCard></MiniCard>
        <MiniCard></MiniCard>
        <MiniCard></MiniCard>
        <MiniCard></MiniCard>
        <MiniCard></MiniCard>
      </ScrollView> */}
      {loading ? (
        <ActivityIndicator style={{ marginTop: 10 }} size="large" color="red" />
      ) : null}
      <FlatList
        data={miniCardData}
        renderItem={({ item }) => {
          return (
            <MiniCard
              videoId={item.id.videoId}
              title={item.snippet.title}
              channel={item.snippet.channelTitle}
            />
          );
        }}
        keyExtractor={item => item.id.videoId}
      />
    </View>
  );
};

export default SearchScreen;

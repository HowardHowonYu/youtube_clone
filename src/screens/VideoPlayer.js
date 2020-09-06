import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import Constant from "expo-constants";
import { WebView } from "react-native-webview";

const VideoPlayer = ({ route }) => {
  const { videoId, title } = route.params;
  return (
    <View style={styles.exploreView}>
      <View style={styles.videoView}>
        <WebView
          javaScriptEnabled={true}
          domStorageEnabled={true}
          source={{ uri: `https://www.youtube.com/embed/${videoId}` }}
        ></WebView>
      </View>
      <Text style={styles.videoText} numberOfLines={2} ellipsizeMode="tail">
        {title}
      </Text>
      <View style={{ borderBottomWidth: 1 }}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  exploreView: {
    flex: 1,
    marginTop: Constant.statusBarHeight,
  },
  videoView: {
    width: "100%",
    height: 200,
  },
  videoText: {
    fontSize: 20,
    width: Dimensions.get("screen").width - 50,
    margin: 9,
  },
});

export default VideoPlayer;

import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Constant from "expo-constants";

const VideoPlayer = () => {
  return (
    <View style={styles.exploreView}>
      <Text>This is VideoPlayer</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  exploreView: {
    flex: 1,
    marginTop: Constant.statusBarHeight,
  },
});

export default VideoPlayer;

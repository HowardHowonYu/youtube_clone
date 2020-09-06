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
import { Entypo, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useNavigation, useTheme } from "@react-navigation/native";

const Card = props => {
  const navigation = useNavigation();
  const { colors } = useTheme();
  const textColor = colors.iconColor;

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
      <View style={styles.cardContainer}>
        <Image
          source={{
            uri: `https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg`,
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardContents}>
          <MaterialIcons name="account-circle" size={28} color="#212121" />
          <View style={styles.textView}>
            <Text style={styles.text} ellipsizeMode="tail" numberOfLines={2}>
              {props.title}
            </Text>
            <Text style={{ color: textColor }}>{props.channel}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;

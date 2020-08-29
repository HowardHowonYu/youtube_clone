import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Entypo, Ionicons, MaterialIcons } from "@expo/vector-icons";
import Constant from "expo-constants";
import { useNavigation } from "@react-navigation/native";

const mycolor = "#212121";

export default function Header() {
  const navigation = useNavigation();
  return (
    <View style={styles.topContainer}>
      <View style={styles.logoTextContainer}>
        <Entypo style={styles.logo} name="youtube" size={32} color="red" />
        <Text style={styles.logoText}>Youtube</Text>
      </View>
      <StatusBar style="auto" />
      <View style={styles.headerIcons}>
        <Ionicons name="md-videocam" size={28} color={mycolor} />
        <Ionicons
          name="md-search"
          size={28}
          color={mycolor}
          onPress={() => navigation.navigate("search")}
        />
        <MaterialIcons name="account-circle" size={28} color={mycolor} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  topContainer: {
    height: 50,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginTop: Constant.statusBarHeight,
  },
  logoTextContainer: {
    flexDirection: "row",
    margin: 5,
    alignItems: "center",
  },
  logo: {
    marginLeft: 20,
  },
  logoText: {
    fontSize: 25,
    marginLeft: 8,
    fontWeight: "bold",
    color: mycolor,
    marginBottom: 5,
  },
  headerIcons: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: 180,
  },
});

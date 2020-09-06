import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Entypo, Ionicons, MaterialIcons } from "@expo/vector-icons";
import Constant from "expo-constants";
import { useNavigation, useTheme } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";

export default function Header() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const currentTheme = useSelector(state => {
    return state.myDarkMode;
  });
  const { colors } = useTheme();
  const mycolor = colors.iconColor;
  const styles = StyleSheet.create({
    topContainer: {
      height: 50,
      backgroundColor: colors.headerColor,
      flexDirection: "row",
      justifyContent: "space-between",
      borderBottomWidth: 1,
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
        <MaterialIcons
          name="account-circle"
          size={28}
          color={mycolor}
          onPress={() =>
            dispatch({ type: "change_theme", payload: !currentTheme })
          }
        />
      </View>
    </View>
  );
}

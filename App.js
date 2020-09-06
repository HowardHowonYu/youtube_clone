import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Entypo, Ionicons, MaterialIcons } from "@expo/vector-icons";

import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
  usrTheme,
  useTheme,
} from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./src/screens/Home";
import Search from "./src/screens/Search";
import VideoPlayer from "./src/screens/VideoPlayer";
import Explore from "./src/screens/Explore";
import Subscribe from "./src/screens/Subscribe";
import Constant from "expo-constants";
import { reducer } from "./src/reducers/reducer";
import { themeReducer } from "./src/reducers/themeReducer";

import { Provider, useSelector } from "react-redux";
import { createStore, combineReducers } from "redux";

const customDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    headerColor: "#404040",
    iconColor: "white",
    tabIcon: "white",
  },
};

const customDefalutTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    headerColor: "white",
    iconColor: "black",
    tabIcon: "black",
  },
};
const rooReducer = combineReducers({
  cardData: reducer, // []
  myDarkMode: themeReducer, // false
});
const store = createStore(rooReducer);
const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

const rootHome = () => {
  const { colors } = useTheme();
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName;

          if (route.name === "home") {
            iconName = "home";
          } else if (route.name === "explore") {
            iconName = "explore";
          } else if (route.name === "subscribe") {
            iconName = "subscriptions";
          }
          // You can return any component that you like here!
          return <MaterialIcons name={iconName} size={32} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: colors.tabIcon,
        inactiveTintColor: "grey",
      }}
    >
      <Tabs.Screen name="home" component={Home} />
      <Tabs.Screen name="explore" component={Explore} />
      <Tabs.Screen name="subscribe" component={Subscribe} />
    </Tabs.Navigator>
  );
};

export default () => {
  return (
    <Provider store={store}>
      <Navigation></Navigation>
    </Provider>
  );
};

export function Navigation() {
  let currentTheme = useSelector(state => {
    return state.myDarkMode;
  });
  return (
    <NavigationContainer
      theme={currentTheme ? customDarkTheme : customDefalutTheme}
    >
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="rootHome" component={rootHome} />
        <Stack.Screen name="search" component={Search} />
        <Stack.Screen name="videoPlayer" component={VideoPlayer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  appView: {
    marginTop: Constant.statusBarHeight,
    flex: 1,
  },
});

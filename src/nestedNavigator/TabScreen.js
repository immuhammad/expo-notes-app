import React, { useEffect, useState } from "react";
import { View, StyleSheet, Button, Image } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ScreenOne from "../screens/DashboardScreen";
function BookmarkScreen({ navigation }) {
  return (
    <View style={styles.tabContainer}>
      <Button
        title="BookMarkScreen"
        onPress={() => navigation.navigate("BookmarkScreen")}
      />
    </View>
  );
}
function BookScreen({ navigation }) {
  return (
    <View style={styles.tabContainer}>
      <Button
        title="BookScreen"
        onPress={() => navigation.navigate("BookScreen")}
      />
    </View>
  );
}
function CalendarScreen({ navigation }) {
  return (
    <View style={styles.tabContainer}>
      <Button
        title="Calender"
        onPress={() => navigation.navigate("CalendarScreen")}
      />
    </View>
  );
}
function MessageScreen({ navigation}) {
  return (
    <View style={[styles.tabContainer]}>
      <Button title="Messages" onPress={() => navigation.navigate("Message")} />
    </View>
  );
}
function LayoutScreen({ navigation}) {
  return (
    <View style={[styles.tabContainer]}>
      <Button title="Layout" onPress={() => navigation.navigate("Layout")} />
    </View>
  );
}
const Tab = createBottomTabNavigator();
export default function TabScreen() {
  return (
    <Tab.Navigator
      independent={true}
      screenOptions={{
        tabBarStyle: {
          height: 50,
          backgroundColor: "#FFFFFF",
        },
      }}
    >
      <Tab.Screen
        name="DashboardScreen"
        component={ScreenOne}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                backgroundColor: focused ? "#F88D2A" : "#FFFFFF",
                ...styles.singleTab,
                marginLeft: 10,
              }}
            >
              <Image
                source={require("../img/Atom.png")}
                style={[
                  styles.logo,
                  {
                    tintColor: focused ? "#fff" : "grey",
                  },
                ]}
                resizeMode="contain"
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="bookmark"
        component={BookmarkScreen}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                backgroundColor: focused ? "#F88D2A" : "#FFFFFF",
                ...styles.singleTab,
              }}
            >
              <Image
                source={require("../img/bookmark.png")}
                style={[
                  styles.logo,
                  {
                    tintColor: focused ? "#fff" : "grey",
                  },
                ]}
                resizeMode="contain"
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Book"
        component={BookScreen}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                backgroundColor: focused ? "#F88D2A" : "#FFFFFF",
                ...styles.singleTab,
              }}
            >
              <Image
                source={require("../img/book.png")}
                style={[
                  styles.logo,
                  {
                    tintColor: focused ? "#fff" : "grey",
                  },
                ]}
                resizeMode="contain"
              />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="calendar"
        component={CalendarScreen}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                backgroundColor: focused ? "#F88D2A" : "#FFFFFF",
                ...styles.singleTab,
              }}
            >
              <Image
                source={require("../img/calendar.png")}
                style={[
                  styles.logo,
                  {
                    tintColor: focused ? "#fff" : "grey",
                  },
                ]}
                resizeMode="contain"
              />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Message"
        component={MessageScreen}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                backgroundColor: focused ? "#F88D2A" : "#FFFFFF",
                ...styles.singleTab,
              }}
            >
              <Image
                source={require("../img/square.png")}
                style={[
                  styles.logo,
                  {
                    tintColor: focused ? "#fff" : "grey",
                  },
                ]}
                resizeMode="contain"
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="layout"
        component={LayoutScreen}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                backgroundColor: focused ? "#F88D2A" : "#FFFFFF",
                ...styles.singleTab,
                marginRight: 10,
              }}
            >
              <Image
                source={require("../img/layout.png")}
                style={[
                  styles.logo,
                  {
                    tintColor: focused ? "#fff" : "grey",
                  },
                ]}
                resizeMode="contain"
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: " #F8F8F8",
  },
  logo: {
    width: 20,
    height: 20,
  },
  tabContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  singleTab: {
    padding: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  activeTab: {
    //backgroundColor: "#F3BD48",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  bottom: {
    borderWidth: 1,
    borderColor: "black",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    //padding:15,
    marginBottom: 30,
    backgroundColor: "#F3BD48",
  },
});

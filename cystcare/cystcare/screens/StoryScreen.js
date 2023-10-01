import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { colors } from "../constants/theme";
import Feather from "react-native-vector-icons/Feather";
import Entypo from "react-native-vector-icons/Entypo";
import BlogScreen from "./BlogScreen";
import JournalScreen from "./JournalScreen";

function AddBlogScreen() {
  return <BlogScreen />;
}

function AddJournalScreen() {
  return <JournalScreen />;
}

const Tab = createMaterialTopTabNavigator();
function StoryScreen() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "white",
        labelStyle: {
          fontSize: 16,
          fontWeight: "bold",
          color: "white",
          marginTop: 20,
        },
        style: { backgroundColor: colors.primary },
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "Add Blog") {
            return <Feather name="home" size={size} color={color} />;
          } else if (route.name === "My Journals") {
            return <Entypo name="book" size={size} color={color} />;
          }
        },
      })}
    >
      <Tab.Screen name=" Blogs" component={AddBlogScreen} />
      <Tab.Screen name="Journals" component={AddJournalScreen} />
    </Tab.Navigator>
  );
}

export default StoryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

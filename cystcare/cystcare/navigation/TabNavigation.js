import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Fontisto from "react-native-vector-icons/Fontisto";
import Entypo from "react-native-vector-icons/Entypo";
import Feather from "react-native-vector-icons/Feather";
import TherapistStackNavigation from "./TherapistStackNavigation";
import { colors } from "../constants/theme";
import { View, Text } from "react-native";
import HomeScreen from "../screens/HomeScreen";
import StoryScreen from "../screens/StoryScreen";
import ChatScreen from "../screens/ChatScreen";

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "Home") {
            return <Feather name="home" size={size} color={color} />;
          } else if (route.name === "Story") {
            return <Entypo name="open-book" size={size} color={color} />;
          } else if (route.name === "Therapist") {
            return <Fontisto name="doctor" size={size} color={color} />;
          } else if (route.name === "chat") {
            return <Entypo name="chat" size={size} color={color} />;
          }
        },
      })}
      tabBarOptions={{
        showLabel: false,
        activeTintColor: colors.black,
        inactiveTintColor: colors.primary,
        tabStyle: {
          padding: 8,
        },
        style: {
          backgroundColor: colors.primary,
          marginTop: 0,
          borderTopWidth: 0,
          elevation: 10,
          height: 60,
        },
        iconStyle: {
          margin: 3,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Story"
        component={StoryScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Therapist"
        component={TherapistStackNavigation}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="chat"
        component={ChatScreen}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;

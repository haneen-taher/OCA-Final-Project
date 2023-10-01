import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Fontisto from "react-native-vector-icons/Fontisto";
import Entypo from "react-native-vector-icons/Entypo";
import Feather from "react-native-vector-icons/Feather";
import { colors } from "./constants/theme";
import HomeScreen from "./screens/HomeScreen";
import StoryScreen from "./screens/StoryScreen";
import ChatScreen from "./screens/ChatScreen";
import JournalScreen from "./screens/JournalScreen";
import BlogScreen from "./screens/BlogScreen";
import SpecialistsScreen from "./screens/SpecialistsScreen";
import Profile from "./screens/Profile";
import OnboardingScreen from "./screens/OnboardingScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";

import TherapistStackNavigation from "./navigation/TherapistStackNavigation";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />

      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="JournalScreen" component={JournalScreen} />
      <Stack.Screen name="BlogScreen" component={BlogScreen} />
      <Stack.Screen name="ChatScreen" component={ChatScreen} />
      <Stack.Screen name="SpecialistsScreen" component={SpecialistsScreen} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};

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
          } else if (route.name === "Chat") {
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
        component={HomeStack}
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
        name="Chat"
        component={ChatScreen}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <TabNavigation />
    </NavigationContainer>
  );
};

export default App;

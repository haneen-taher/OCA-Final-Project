import React, { useState } from "react";

import {
  StyleSheet,
  SafeAreaView,
  View,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";
import { useRoute } from "@react-navigation/native";
import { Colors } from "react-native/Libraries/NewAppScreen";

export default function Profile({ navigation }) {
  const Profileroute = useRoute();
  const { title } = Profileroute.params || {};

  const handleLogout = async () => {
    try {
      // Call the logout API endpoint
      const response = await fetch("http://192.168.8.103:5000/auth/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Include the user's token for authentication
          Authorization: `Bearer ${userToken}`,
        },
      });

      if (response.ok) {
        // Logout successful, navigate to the login screen or any other screen you desire
        navigation.replace("OnboardingScreen");
      } else {
        const errorData = await response.json();
        // Handle logout error, show error message or perform other actions
        console.error("Logout failed:", errorData.message);
      }
    } catch (error) {
      // Handle network errors or other exceptions
      console.error("Logout error:", error);
    }
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F5F0FC" }}>
      <View>
        <Text>{title}</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.profile}>
          <Image
            alt=""
            source={{
              uri: "https://cdn-icons-png.flaticon.com/128/552/552848.png",
            }}
            style={styles.profileAvatar}
          />

          <Text style={styles.profileEmail}>Email</Text>

          <TouchableOpacity
            onPress={() => navigation.navigate("OnboardingScreen")}
          >
            <View style={styles.profileAction}>
              <Text style={styles.profileActionText}>Log Out</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 48,
    paddingHorizontal: 0,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  profile: {
    padding: 20,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#F5F0FC",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "gray",
    margin: 20,
  },
  profileAvatar: {
    width: 60,
    height: 60,
    borderRadius: 9999,
  },
  profileName: {
    marginTop: 12,
    fontSize: 20,
    fontWeight: "600",
    color: "#090909",
  },
  profileEmail: {
    marginTop: 6,
    fontSize: 16,
    fontWeight: "400",
    color: "#848484",
  },
  profileAction: {
    marginTop: 12,
    paddingVertical: 10,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#9C69E2",
    borderRadius: 12,
  },
  profileActionText: {
    marginRight: 8,
    fontSize: 15,
    fontWeight: "600",
    color: "#fff",
  },
});

import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import axios from "axios";

import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";

import LoginSVG from "../assets/images/login.svg";
import GoogleSVG from "../assets/icons/google.svg";
import FacebookSVG from "../assets/icons/facebook.svg";
import TwitterSVG from "../assets/icons/twitter.svg";

import CustomButton from "../components/CustomButton";
import InputField from "../components/InputField";

const LoginScreen = React.memo(({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const handleLogin = () => {
    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();

    // Regular expression for a valid email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Regular expression for a valid password format (at least 8 characters long)
    const passwordRegex = /^.{8,}$/;

    if (!emailRegex.test(trimmedEmail)) {
      setEmailError("Please enter a valid email address");
      return;
    } else {
      setEmailError(""); // Clear email error message if valid
    }

    if (!passwordRegex.test(trimmedPassword)) {
      setPasswordError("Password must be at least 8 characters long");
      return;
    } else {
      setPasswordError(""); // Clear password error message if valid
    }

    axios
      .post("http://192.168.8.103:5000/auth/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        // Login successful, navigate to home screen or save the token in AsyncStorage
        navigation.navigate("Home");
      })
      .catch((error) => {
        // Login failed, show an error message
        Alert.alert("Login Failed", error.response.data.error);
      });
  };

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center" }}>
      <View style={{ paddingHorizontal: 25, backgroundColor: "#F5F0FC" }}>
        <View style={{ alignItems: "center" }}>
          <LoginSVG
            height={300}
            width={300}
            style={{ transform: [{ rotate: "-5deg" }] }}
          />
        </View>

        <Text
          style={{
            fontSize: 28,
            fontWeight: "500",
            color: "#333",
            marginBottom: 30,
          }}
        >
          Login
        </Text>
        <InputField
          label={"Email"}
          icon={
            <MaterialIcons
              name="alternate-email"
              size={20}
              color="#666"
              style={{ marginRight: 5 }}
            />
          }
          value={email}
          onChangeText={handleEmailChange}
          keyboardType="email-address"
        />
        {emailError ? (
          <Text style={{ color: "red", marginBottom: 10, marginTop: -5 }}>
            {emailError}
          </Text>
        ) : null}

        <InputField
          label={"Password"}
          icon={
            <Ionicons
              name="ios-lock-closed-outline"
              size={20}
              color="#666"
              style={{ marginRight: 5 }}
            />
          }
          value={password}
          onChangeText={handlePasswordChange}
          inputType="password"
          fieldButtonLabel={"Forgot?"}
          fieldButtonFunction={() => {}}
        />
        {passwordError ? (
          <Text style={{ color: "red", marginBottom: 10, marginTop: -5 }}>
            {passwordError}
          </Text>
        ) : null}

        <CustomButton label={"Login"} onPress={handleLogin} />

        <Text style={{ textAlign: "center", color: "#666", marginBottom: 30 }}>
          Or, login with ...
        </Text>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 30,
          }}
        >
          <TouchableOpacity
            onPress={() => {}}
            style={{
              borderColor: "#ddd",
              borderWidth: 2,
              borderRadius: 10,
              paddingHorizontal: 30,
              paddingVertical: 10,
            }}
          >
            <GoogleSVG height={24} width={24} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {}}
            style={{
              borderColor: "#ddd",
              borderWidth: 2,
              borderRadius: 10,
              paddingHorizontal: 30,
              paddingVertical: 10,
            }}
          >
            <FacebookSVG height={24} width={24} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {}}
            style={{
              borderColor: "#ddd",
              borderWidth: 2,
              borderRadius: 10,
              paddingHorizontal: 30,
              paddingVertical: 10,
            }}
          >
            <TwitterSVG height={24} width={24} />
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginBottom: 30,
          }}
        >
          <Text>New to the app?</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("RegisterScreen")}
          >
            <Text style={{ color: "#9C69E2", fontWeight: "700" }}>
              {" "}
              Register
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
});

export default LoginScreen;

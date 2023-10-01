import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import axios from "axios";

import InputField from "../components/InputField";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";

import RegistrationSVG from "../assets/images/registration.svg";
import GoogleSVG from "../assets/icons/google.svg";
import FacebookSVG from "../assets/icons/facebook.svg";
import TwitterSVG from "../assets/icons/twitter.svg";
import CustomButton from "../components/CustomButton";

const RegisterScreen = ({ navigation }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const handleRegistration = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^.{8,}$/;

    setEmailError("");
    setPasswordError("");
    setConfirmPasswordError("");

    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email address");
      return;
    }

    if (!passwordRegex.test(password)) {
      setPasswordError("Password must be at least 8 characters long");
      return;
    }

    if (password !== confirmPassword) {
      setConfirmPasswordError("Passwords do not match");
      return;
    }
    axios
      .post("http://192.168.8.103:5000/auth/register", {
        email: email,
        password: password,
      })
      .then((response) => {
        // Registration successful, navigate to home screen or show a success message
        navigation.navigate("Home");
      })
      .catch((error) => {
        // Registration failed, show an error message
        Alert.alert("Registration Failed", error.response.data.error);
      });
  };

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center" }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ paddingHorizontal: 25, backgroundColor: "#F5F0FC" }}
      >
        <View style={{ alignItems: "center" }}>
          <RegistrationSVG
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
          Register
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

        <Text style={{ textAlign: "center", color: "#666", marginBottom: 30 }}>
          Or, register with email ...
        </Text>
        <InputField
          label={"Full Name"}
          icon={
            <Ionicons
              name="person-outline"
              size={20}
              color="#666"
              style={{ marginRight: 5 }}
            />
          }
          value={fullName}
          onChangeText={(text) => setFullName(text)}
        />

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
          keyboardType="email-address"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}

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
          inputType="password"
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        {passwordError ? (
          <Text style={styles.errorText}>{passwordError}</Text>
        ) : null}

        <InputField
          label={"Confirm Password"}
          icon={
            <Ionicons
              name="ios-lock-closed-outline"
              size={20}
              color="#666"
              style={{ marginRight: 5 }}
            />
          }
          inputType="password"
          value={confirmPassword}
          onChangeText={(text) => setConfirmPassword(text)}
        />
        {confirmPasswordError ? (
          <Text style={styles.errorText}>{confirmPasswordError}</Text>
        ) : null}

        <CustomButton label={"Register"} onPress={handleRegistration} />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginBottom: 30,
          }}
        >
          <Text>Already registered?</Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={{ color: "#9C69E2", fontWeight: "700" }}> Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = {
  errorText: {
    color: "red",
    marginTop: -5,
    marginBottom: 10,
  },
};

export default RegisterScreen;

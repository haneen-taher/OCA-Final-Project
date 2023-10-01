import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Onboarding from "react-native-onboarding-swiper";
import Lottie from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

export default function OnboardingScreen() {
  const navigation = useNavigation();

  const handleDone = () => {
    navigation.navigate("LoginScreen");
  };

  const doneButton = () => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate("LoginScreen")}
        style={styles.doneButton}
      >
        <Text>Done</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <Onboarding
        onDone={handleDone}
        onSkip={handleDone}
        // bottomBarHighlight={false}
        DoneButtonComponent={doneButton}
        containerStyles={{ paddingHorizontal: 15 }}
        pages={[
          {
            backgroundColor: "#F5F0FC",
            image: (
              <View style={styles.lottie}>
                <Lottie
                  source={require("../assets/animations/1-wlc.json")}
                  autoPlay
                  loop
                />
              </View>
            ),
            title: "Welcome to CystCare",
            subtitle: "Empathetic Support for Your PCOS Journey",
          },
          {
            backgroundColor: "#cdacfa",
            image: (
              <View style={styles.lottie}>
                <Lottie
                  source={require("../assets/animations/2-choices.json")}
                  autoPlay
                  loop
                />
              </View>
            ),
            title: "Empowering Choices, Informed Living",
            subtitle: "Explore Nutrition, Workouts, and Community Insights",
          },
          {
            backgroundColor: "#9C69E2",
            image: (
              <View style={styles.lottie}>
                <Lottie
                  source={require("../assets/animations/3-community.json")}
                  autoPlay
                  loop
                />
              </View>
            ),
            title: "Strength in Community, Hope in Knowledge",
            subtitle: "Connect with Others, Share Your Story, Embrace Support",
          },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  lottie: {
    width: width * 0.9,
    height: 300,
  },
  doneButton: {
    padding: 20,
    // backgroundColor: 'white',
    // borderTopLeftRadius: '100%',
    // borderBottomLeftRadius: '100%'
  },
});

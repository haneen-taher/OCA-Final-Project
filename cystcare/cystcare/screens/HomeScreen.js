import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import { colors } from "../constants/theme";
import { useNavigation } from "@react-navigation/native";

const data = [
  {
    id: "1",
    title: "Wellness Journal",
    image: require("../assets/images/banner.png"),
  },

  { id: "2", title: "Blog", image: require("../assets/images/blog.png") },
  {
    id: "3",
    title: "Specialists in PCOS Care",
    image: require("../assets/images/expertis.png"),
  },
  {
    id: "4",
    title: "Chatbot- Cara",
    image: require("../assets/images/chatbot.png"),
  },
];

const HomeScreen = () => {
  const navigation = useNavigation();
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.gridItem}
      onPress={() => handleItemPress(item.title)}
    >
      <Image source={item.image} style={styles.gridItemImage} />
      <Text style={styles.gridItemText}>{item.title}</Text>
    </TouchableOpacity>
  );
  const handleItemPress = (title) => {
    try {
      switch (title) {
        case "Wellness Journal":
          navigation.navigate("JournalScreen", { title });
          break;
        case "Blog":
          navigation.navigate("BlogScreen", { title });
          break;
        case "Specialists in PCOS Care":
          navigation.navigate("SpecialistsScreen", { title });
          break;
        case "Chatbot- Cara":
          navigation.navigate("ChatScreen", { title });
          break;
        default:
          console.error(`Unknown screen: ${title}`);
          break;
      }
    } catch (error) {
      console.error("Navigation Error:", error);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View>
            <Text style={styles.helloText}>Hello!</Text>
          </View>

          <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
            <View style={styles.avatar}>
              <Image
                source={require("../assets/images/avatar.png")}
                style={{ width: 60, height: 60 }}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.chatbotContainer}>
          <View style={styles.botContainer}>
            <Image
              source={require("../assets/images/cara.gif")}
              style={{ width: 180, height: 180 }}
            />
          </View>
          <View></View>
          <View style={styles.botContent}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
                marginBottom: 10,
                color: colors.black,
              }}
            >
              Hi, I'm Cara.
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("ChatScreen")}>
              <View style={styles.button}>
                <Text
                  style={{
                    color: colors.white,
                    fontSize: 16,
                    fontWeight: "bold",
                  }}
                >
                  Let's Talk!
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.adviceContainer}>
          <Text style={styles.adviceText}>Advice of the day</Text>
          <View style={styles.advice}>
            <Text style={{ fontSize: 16, color: colors.white }}>
              Embrace your journey with PCOS. Prioritize self-care, balanced
              nutrition, and exercise. Reach out for support when needed. You've
              got this!
            </Text>
          </View>
        </View>
        <View>
          <View style={styles.featureContainer}>
            <Text style={styles.featureTitle}>Explore Our Features!</Text>
          </View>
        </View>
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        contentContainerStyle={styles.flatListContainer}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F0FC",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: colors.primary,
    paddingBottom: 20,
    borderBottomLeftRadius: 120,
    elevation: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },

  helloText: {
    fontSize: 20,
    fontWeight: "bold",
    flexDirection: "column",
    color: colors.white,
    marginTop: 30,
  },
  nameText: {
    fontSize: 30,
    fontWeight: "bold",
    flexDirection: "column",
    color: colors.white,
  },
  avatar: {
    alignSelf: "flex-end",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    elevation: 10,
    width: 70,
    height: 70,
    borderRadius: 90,
    marginRight: 10,
    marginTop: 20,
    marginLeft: 20,
  },
  chatbotContainer: {
    margin: 10,
    marginTop: 0,
    borderStyle: "solid",
    borderColor: "#9DA3B4",
    borderRadius: 20,
    borderBottomWidth: 3,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  botContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  botContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    width: 150,
    height: 40,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
  },
  adviceContainer: {
    padding: 10,
    paddingTop: 0,
  },
  adviceText: {
    marginRight: 15,
    fontSize: 18,
    alignSelf: "flex-end",
    textTransform: "uppercase",
    fontWeight: "bold",
  },
  advice: {
    padding: 10,
    width: Dimensions.get("screen").width - 50,
    alignItems: "center",
    margin: 10,
    borderRadius: 20,
    elevation: 3,
    backgroundColor: "#9C69E2",
    borderTopRightRadius: 0,
  },
  featureContainer: {
    marginVertical: 10,
    padding: 10,
    paddingTop: 0,
    paddingLeft: 20,
    position: "relative",
  },
  featureTitle: {
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
  },

  flatListContainer: {
    justifyContent: "space-around",
    marginVertical: 20,
    paddingHorizontal: 20,
  },

  gridItem: {
    flex: 1,
    margin: 10,
    borderRadius: 10,
    overflow: "hidden",
  },

  gridItemImage: {
    width: "100%",
    height: 150,
    resizeMode: "cover",
  },

  gridItemText: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    padding: 10,
  },
});

export default HomeScreen;

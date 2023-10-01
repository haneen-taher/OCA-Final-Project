import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import axios from "axios";

const ChatScreen = () => {
  const [data, setData] = useState([]);
  const apiKey = "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";
  const apiUrl =
    "https://api.openai.com/v1/engines/text-davinci-002/completions";
  const [textInput, setTextInput] = useState("");
  const handleSend = async () => {
    const prompt = textInput;
    const response = await axios.post(
      apiUrl,
      {
        prompt: prompt,
        max_tokens: 1024,
        temperature: 0.5,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
      }
    );
    const text = response.data.choices[0].text;
    setData([
      ...data,
      { type: "user", text: textInput },
      { type: "bot", text: text },
    ]);
    setTextInput("");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meet Cara!</Text>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        style={styles.body}
        renderItem={({ item }) => (
          <View style={{ flexDirection: "row", padding: 10 }}>
            <Text
              style={{
                fontWeight: "bold",
                color: item.type === "user" ? "green" : "red",
              }}
            >
              {item.type === "user" ? "Cara" : "Bot"}
            </Text>
            <Text style={styles.bot}>{item.text}</Text>
          </View>
        )}
      />
      <TextInput
        style={styles.input}
        value={textInput}
        onChangeText={(text) => setTextInput(text)}
        placeholder="Ask me anything..."
      />

      <TouchableOpacity style={styles.button} onPress={handleSend}>
        <Text style={styles.buttonText}>let`s Talk!</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F0FC",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 28,
    marginBottom: 20,
    marginTop: 70,
    color: "#9C69E2",
  },
  body: {
    backgroundColor: "#F5F0FC",
    width: "102%",
    margin: 10,
  },
  bot: {
    fontSize: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    width: "90%",
    height: 60,
    marginBottom: 10,
    borderRadius: 20,
  },
  button: {
    backgroundColor: "#9C69E2",
    width: "90%",
    height: 60,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 20,
    color: "white",
  },
});

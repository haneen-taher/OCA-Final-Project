import React, { useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  View,
  SafeAreaView,
  Pressable,
} from "react-native";
import {
  actions,
  defaultActions,
  RichEditor,
  RichToolbar,
} from "react-native-pell-rich-editor";
import { useNavigation } from "@react-navigation/native";

import Entypo from "react-native-vector-icons/Entypo";
import { colors } from "../constants/theme";

const AddStory = (props) => {
  const strikethrough = require("../assets/images/strikethrough.png"); //icon for strikethrough
  const video = require("../assets/images/video.png"); //icon for Addvideo
  const RichText = useRef(); //reference to the RichEditor component
  const [article, setArticle] = useState("");
  const { data } = props.route.params;
  const navigation = useNavigation();

  const handlePress = () => {
    // Navigate back to the previous screen
    navigation.goBack();
  };

  function onPressAddImage() {
    // you can easily add images from your gallery
    RichText.current.insertImage(
      "https://img1.thelist.com/img/gallery/ways-to-tell-if-youre-really-happy/intro-1494540038.jpg"
    );
  }

  function insertVideo() {
    // you can easily add videos from your gallery
    RichText.current.insertVideo(
      "https://mdn.github.io/learning-area/html/multimedia-and-embedding/video-and-audio-content/rabbit320.mp4"
    );
  }

  return (
    <SafeAreaView edges={["bottom", "left", "right"]} style={{ flex: 1 }}>
      <View style={styles.container}>
        <Pressable
          onPress={() => richText.current?.dismissKeyboard()}
        ></Pressable>
        <View style={styles.richTextContainer}>
          <RichEditor
            ref={RichText}
            androidHardwareAccelerationDisabled={true}
            style={styles.richTextEditorStyle}
            initialHeight={250}
            disabled={false}
            containerStyle={styles.editor}
            initialContentHTML={data.content}
            onChange={(text) => setArticle(text)}
          />
          <RichToolbar
            editor={RichText}
            selectedIconTint="black"
            iconTint="white"
            actions={[
              actions.insertImage,
              actions.setBold,
              actions.setItalic,
              actions.insertBulletsList,
              actions.insertOrderedList,
              actions.insertLink,
              actions.setStrikethrough,
              actions.setUnderline,
            ]}
            style={styles.richTextToolbarStyle}
          />
        </View>

        <TouchableOpacity style={styles.saveButtonStyle} onPress={handlePress}>
          <Text style={styles.textButtonStyle}>Back</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default AddStory;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    backgroundColor: "#F5F0FC",
    padding: 20,
    marginTop: 40,
    alignItems: "center",
  },

  headerStyle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#9C69E2",
    marginBottom: 10,
  },

  htmlBoxStyle: {
    height: 200,
    width: 330,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    marginBottom: 10,
  },

  richTextContainer: {
    display: "flex",
    flexDirection: "column-reverse",
    width: "100%",
    marginBottom: 10,
  },

  richTextEditorStyle: {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderWidth: 1,
    borderColor: "#9C69E2",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    fontSize: 20,
  },

  richTextToolbarStyle: {
    backgroundColor: "#9C69E2",
    borderColor: "#9C69E2",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderWidth: 1,
  },

  errorTextStyle: {
    color: "gray",
    marginBottom: 10,
  },

  saveButtonStyle: {
    backgroundColor: "#9C69E2",
    borderWidth: 1,
    borderColor: "#9C69E2",
    borderRadius: 10,
    padding: 10,
    width: "25%",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    fontSize: 20,
  },

  textButtonStyle: {
    fontSize: 18,
    fontWeight: "600",
    color: "white",
  },
});

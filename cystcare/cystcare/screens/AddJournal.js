import { useRef, useState } from "react";
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  actions,
  RichEditor,
  RichToolbar,
} from "react-native-pell-rich-editor";

import { useNavigation } from "@react-navigation/native";

export default function App() {
  const richText = useRef();

  const [descHTML, setDescHTML] = useState("");
  const [showDescError, setShowDescError] = useState(false);
  const navigation = useNavigation();

  const handlePress = () => {
    // Navigate back to the previous screen
    navigation.goBack();
  };
  const richTextHandle = (descriptionText) => {
    if (descriptionText) {
      setShowDescError(false);
      setDescHTML(descriptionText);
    } else {
      setShowDescError(true);
      setDescHTML("");
    }
  };

  const submitContentHandle = () => {
    const replaceHTML = descHTML.replace(/<(.|\n)*?>/g, "").trim();
    const replaceWhiteSpace = replaceHTML.replace(/&nbsp;/g, "").trim();

    if (replaceWhiteSpace.length <= 0) {
      setShowDescError(true);
    } else {
      // send data to your server!
    }
  };

  return (
    <SafeAreaView edges={["bottom", "left", "right"]} style={{ flex: 1 }}>
      <View style={styles.container}>
        <Pressable
          onPress={() => richText.current?.dismissKeyboard()}
        ></Pressable>
        <View style={styles.richTextContainer}>
          <RichEditor
            ref={richText}
            onChange={richTextHandle}
            placeholder="Write here :)"
            androidHardwareAccelerationDisabled={true}
            style={styles.richTextEditorStyle}
            initialHeight={250}
          />
          <RichToolbar
            editor={richText}
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
        {showDescError && (
          <Text style={styles.errorTextStyle}>
            Your journal shouldn't be empty!
          </Text>
        )}

        <TouchableOpacity
          style={styles.saveButtonStyle}
          onPress={handlePress}
          // onPress={submitContentHandle}
        >
          <Text style={styles.textButtonStyle}>Save</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

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

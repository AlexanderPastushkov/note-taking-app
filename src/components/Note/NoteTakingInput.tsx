import React from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { ScreenNavigationProp } from "../../types/types";

type Props = {
  saveNote: (text: string) => void;
};

export const NoteTakingInput: React.FC<Props> = ({ saveNote }) => {
  const [text, setText] = useState("");
  const navigation = useNavigation<ScreenNavigationProp>();

  return (
    <>
      <TextInput
        multiline={true}
        style={styles.textInput}
        value={text}
        onChangeText={setText}
        autoFocus={true}
      />
      <Button
        title="Save note"
        onPress={() => {
          saveNote(text);
          navigation.navigate("Home");
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: "#ffb70342",
    width: "100%",
    height: 200,
    fontSize: 16,
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 20,
  },
});

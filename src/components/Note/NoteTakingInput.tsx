import React, { useEffect, useLayoutEffect } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { ScreenNavigationProp } from "../../types/types";
import { getNote, saveNote } from "../../services/noteStoreService";
import { SaveNote } from "../SaveNote/SaveNote";

type Props = {
  noteId: string | undefined;
};

export const NoteTakingInput: React.FC<Props> = ({ noteId }) => {
  const [text, setText] = useState("");
  const navigation = useNavigation<ScreenNavigationProp>();

  useEffect(() => {
    if (noteId) {
      getNote(noteId).then((result) => setText(result?.text ?? ""));
    }
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => <SaveNote text={text} noteId={noteId ?? ""} />,
    });
  }, [navigation, text, noteId]);

  return (
    <>
      <TextInput
        multiline={true}
        style={styles.textInput}
        value={text}
        onChangeText={setText}
        autoFocus={true}
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

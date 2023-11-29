import { View, Text, Pressable } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { ScreenNavigationProp } from "../../types/types";
import { saveNote } from "../../services/noteStoreService";

type Props = {
  text: string;
  noteId: string | undefined;
};

export const SaveNote = ({ text, noteId }: Props) => {
  const navigation = useNavigation<ScreenNavigationProp>();
  const saveNoteHandler = async () => {
    await saveNote(text, noteId);
    // navigation.navigate("Home");
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  };
  return (
    <Pressable onPress={saveNoteHandler}>
      <Ionicons name="chevron-back" size={30} color="#ffb703" />
    </Pressable>
  );
};

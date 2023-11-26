import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { deleteNote } from "../../services/noteStoreService";
import { useNavigation } from "@react-navigation/native";
import { ScreenNavigationProp } from "../../types/types";

type Props = {
  noteId: string | undefined;
};

export const DeleteNote = ({ noteId }: Props) => {
  const navigation = useNavigation<ScreenNavigationProp>();
  const deleteNoteHandler = async () => {
    await deleteNote(noteId);
    navigation.navigate("Home");
  };
  return (
    <Pressable onPress={deleteNoteHandler}>
      <FontAwesome name="trash-o" size={30} color="#ffb703" />
    </Pressable>
  );
};

const styles = StyleSheet.create({});

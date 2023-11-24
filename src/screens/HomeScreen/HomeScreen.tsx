import { StyleSheet, Text, Button, View } from "react-native";
import React, { useState, useEffect } from "react";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { ScreenNavigationProp } from "../../types/types";
import { Note, getAllNotes, getNote } from "../../services/noteStoreService";

type Props = {};

export const HomeScreen = (props: Props) => {
  const navigation = useNavigation<ScreenNavigationProp>();
  const [notes, setNotes] = useState<Note[]>([]);
  useFocusEffect(() => {
    getAllNotes().then((result) => setNotes(result.notes));
  });

  return (
    <>
      <View>
        {notes.map((note) => (
          <Text key={note.id}>{note.text}</Text>
        ))}
      </View>
      <Button
        title="New note"
        onPress={() => navigation.navigate("EditNote")}
      />
    </>
  );
};

const styles = StyleSheet.create({});

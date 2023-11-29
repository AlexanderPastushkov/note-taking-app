import { useFocusEffect } from "@react-navigation/native";
import React, { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { Note, getAllNotes } from "../../services/noteStoreService";

import { useNavigation } from "@react-navigation/native";
import { ScreenNavigationProp } from "../../types/types";

export const SavedNotesList: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>([]);

  const navigation = useNavigation<ScreenNavigationProp>();
  useFocusEffect(() => {
    getAllNotes().then((result) => setNotes(result.notes));
  });
  return (
    <View style={styles.container}>
      <ScrollView>
        {notes.map((note) => (
          <Pressable
            key={note.id}
            onPress={() => navigation.navigate("EditNote", { noteId: note.id })}
          >
            <View style={styles.row}>
              <Text style={styles.note}>
                {note.text.length === 0 ? "blank note..." : note.text}
              </Text>
            </View>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  note: {
    fontWeight: "800",
    paddingVertical: 20,
    width: "100%",
    fontSize: 18,
  },
  container: {
    width: "100%",
    flex: 1,
  },
  row: {
    width: "90%",
    height: 80,
    borderBottomWidth: 1,
    borderBlockColor: "#e6e6e6",
    alignSelf: "center",
    flex: 1,
    justifyContent: "center",
  },
});

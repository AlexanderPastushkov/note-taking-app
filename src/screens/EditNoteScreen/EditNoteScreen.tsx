import { useRoute } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import { NoteTakingInput } from "../../components/Note/NoteTakingInput";
import { EditScreenRouteProp, ScreenNavigationProp } from "../../types/types";

import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native";
import { deleteNote } from "../../services/noteStoreService";
import { DeleteNote } from "../../components/DeleteNote/DeleteNote";

export const EditNoteScreen = () => {
  const route = useRoute<EditScreenRouteProp>();
  const noteId = route.params.noteId;
  const navigation = useNavigation<ScreenNavigationProp>();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: noteId ? "Edit note" : "New note",
      headerRight: () => (noteId ? <DeleteNote noteId={noteId} /> : <></>),
    });
  }, [navigation]);

  return <NoteTakingInput noteId={noteId} />;
};

import AsyncStorage from "@react-native-async-storage/async-storage";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";

export type Note = {
  text: string;
  id: string;
};
export type NoteStore = {
  notes: Array<Note>;
};

const STORE_KEY = "TAKE_NOTES_STORE";

export const getAllNotes = async () => {
  const storeItem = await AsyncStorage.getItem(STORE_KEY);
  if (storeItem) {
    return JSON.parse(storeItem) as NoteStore;
  }
  return { notes: [] };
};

export const getNote = async (id: string) => {
  const noteStore = await getAllNotes();
  const note = noteStore.notes.find((note) => note.id === id);
  return note;
};
export const saveNote = async (text: string, noteId: string | undefined) => {
  const noteStore = await getAllNotes();
  if (noteId) {
    //edit note update note
    const noteIndex = noteStore.notes.findIndex((note) => note.id === noteId);
    noteStore.notes.splice(noteIndex, 1, { id: noteId, text: text });
  } else {
    //add new note
    noteStore.notes.push({ id: uuidv4(), text: text });
  }

  try {
    await AsyncStorage.setItem(STORE_KEY, JSON.stringify(noteStore));
  } catch (e) {
    // saving error
    console.log(e);
  }
};
export const deleteNote = async (noteId: string | undefined) => {
  const noteStore = await getAllNotes();
  const noteIndex = noteStore.notes.findIndex((note) => note.id === noteId);

  noteStore.notes.splice(noteIndex, 1);
  const newStore = JSON.stringify(noteStore);
  await AsyncStorage.setItem(STORE_KEY, newStore);
};

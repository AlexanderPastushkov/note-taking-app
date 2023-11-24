import React, { useState } from "react";
import { NoteTakingInput } from "../Note/NoteTakingInput";
import AsyncStorage from "@react-native-async-storage/async-storage";

type Props = {};

export const EditNoteScreen = (props: Props) => {
  const saveNote = async (text: string) => {
    try {
      await AsyncStorage.setItem("note", text);
    } catch (e) {
      // saving error
    }
  };
  return <NoteTakingInput saveNote={saveNote} />;
};

import React, { useState } from "react";
import { NoteTakingInput } from "../Note/NoteTakingInput";
import { saveNote } from "../../services/noteStoreService";

type Props = {};

export const EditNoteScreen = (props: Props) => {
  return <NoteTakingInput saveNote={saveNote} />;
};

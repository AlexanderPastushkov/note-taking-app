import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Button, StyleSheet } from "react-native";
import { SavedNotesList } from "../../components/SavedNotesList/SavedNotesList";
import { ScreenNavigationProp } from "../../types/types";

type Props = {};

export const HomeScreen = (props: Props) => {
  const navigation = useNavigation<ScreenNavigationProp>();

  return (
    <>
      <SavedNotesList />
    </>
  );
};

const styles = StyleSheet.create({});

import { StyleSheet, Text, Button, View } from "react-native";
import React, { useState, useEffect } from "react";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { ScreenNavigationProp } from "../../types/types";
import AsyncStorage from "@react-native-async-storage/async-storage";

type Props = {};

export const HomeScreen = (props: Props) => {
  const navigation = useNavigation<ScreenNavigationProp>();
  const [noteText, setNoteText] = useState<string>("");
  useFocusEffect(() => {
    getNote().then((result) => setNoteText(result));
  });

  const getNote = async () => {
    return AsyncStorage.getItem("note");
  };

  return (
    <>
      <View>
        <Text>{noteText}</Text>
      </View>
      <Button
        title="New note"
        onPress={() => navigation.navigate("EditNote")}
      />
    </>
  );
};

const styles = StyleSheet.create({});

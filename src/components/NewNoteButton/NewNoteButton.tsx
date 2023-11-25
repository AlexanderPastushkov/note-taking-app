import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { ScreenNavigationProp } from "../../types/types";

type Props = {};

export const NewNoteButton = (props: Props) => {
  const navigation = useNavigation<ScreenNavigationProp>();
  return (
    <Pressable onPress={() => navigation.navigate("EditNote")}>
      <FontAwesome name="pencil-square-o" size={25} color="#ffb703" />
    </Pressable>
  );
};

import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { ScreenNavigationProp } from "../../types/types";

type Props = {};

export const ButtonEditNote = (props: Props) => {
  const navigation = useNavigation<ScreenNavigationProp>();
  return (
    <View style={styles.container}>
      <Button title="New note" onPress={() => alert("click")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginHorizontal: 3 },
});

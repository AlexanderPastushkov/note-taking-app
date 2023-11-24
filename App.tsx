import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { HomeScreen } from "./src/screens/HomeScreen/HomeScreen";
import { EditNoteScreen } from "./src/screens/EditNoteScreen/EditNoteScreen";
import { RootStackParamList } from "./src/types/types";

const Stack = createNativeStackNavigator<RootStackParamList>();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="EditNote" component={EditNoteScreen} />
      </Stack.Navigator>
      <View style={styles.container}>
        <StatusBar style="auto" />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

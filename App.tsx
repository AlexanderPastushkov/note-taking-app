import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, View } from "react-native";
import { EditNoteScreen } from "./src/screens/EditNoteScreen/EditNoteScreen";
import { HomeScreen } from "./src/screens/HomeScreen/HomeScreen";
import { RootStackParamList } from "./src/types/types";
import { ButtonEditNote } from "./src/components/ButtonComponent/ButtonEditNote";
import { NewNoteButton } from "./src/components/NewNoteButton/NewNoteButton";

const Stack = createNativeStackNavigator<RootStackParamList>();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={({ navigation }) => {
            return {
              headerTitle: "All",
              headerRight: () => (
                <Button
                  title="New note"
                  onPress={() => navigation.navigate("EditNote")}
                />
              ),
            };
          }}
        />
        <Stack.Screen name="EditNote" component={EditNoteScreen} />
      </Stack.Navigator>
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

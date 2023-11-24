import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View, TouchableOpacity } from "react-native";
import styles from "./global_styles";
import CreateBirthDate from "./pages/CreateBirthDate/CreateBirthDate";
import ShowAll from "./pages/ShowAll/ShowAll";
import Navbar from "./components/navbar/Navbar";

export default function App() {
  const [page, setPage] = useState("home");

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Birthday Reminder</Text>
      <Navbar setPage={setPage} />
      {page == "create" ? (
        <CreateBirthDate />
      ) : page == "showall" ? (
        <ShowAll />
      ) : (
        <Text style={{ color: "green" }}> Ha ha</Text>
      )}

      <StatusBar style="auto" />
    </View>
  );
}

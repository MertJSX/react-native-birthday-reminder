import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "../../global_styles";

const CreateBirthDate = () => {
  const [name, setName] = useState("");
  const [month, setMonth] = useState(0);
  const [day, setDay] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {}, []);

  async function saveBirthDate() {
    try {
      await AsyncStorage.setItem("birthDayDates", inputValue);
      console.log("Data saved successfully!");
    } catch (error) {
      console.error("Data saving error: ", error);
    }
  }
  async function retrieveData() {
    try {
      const value = await AsyncStorage.getItem("@MyApp_People");
      if (value !== null) {
        const parsedValue = JSON.parse(value);
        setPeople(parsedValue);
      }
    } catch (error) {
      console.error("Veri alma hatası:", error);
    }
  }

  return (
    <View style={styles.container2}>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Name"
        placeholderTextColor="gray"
      ></TextInput>
      <TextInput
        style={styles.input}
        value={month}
        onChangeText={setMonth}
        keyboardType="number-pad"
        placeholder="Month"
        placeholderTextColor="gray"
      ></TextInput>
      <TextInput
        style={styles.input}
        value={day}
        onChangeText={setDay}
        keyboardType="number-pad"
        placeholder="Day"
        placeholderTextColor="gray"
      ></TextInput>
      <TouchableOpacity style={styles.button}>
        <Text
          style={{
            color: "green",
            fontWeight: 800,
            textAlign: "center",
          }}
        >
          Add
        </Text>
      </TouchableOpacity>
      <Text
        style={{
          color: "green",
          fontWeight: 800,
          textAlign: "center",
        }}
      >
        Name: {name ? name : "Name"}
      </Text>
      <Text
        style={{
          color: "green",
          fontWeight: 800,
          textAlign: "center",
        }}
      >
        Month: {month != 0 ? month : "Month"}
      </Text>
      <Text
        style={{
          color: "green",
          fontWeight: 800,
          textAlign: "center",
        }}
      >
        Day: {day != 0 ? day : "Day"}
      </Text>
    </View>
  );
};

export default CreateBirthDate;

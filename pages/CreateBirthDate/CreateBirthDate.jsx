import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "../../global_styles";
import * as Notifications from "expo-notifications";

const CreateBirthDate = () => {
  const [name, setName] = useState("");
  const [month, setMonth] = useState(0);
  const [day, setDay] = useState(0);
  const [data, setData] = useState([]);
  const [err, setErr] = useState("");

  useEffect(() => {
    setErr("");
    console.log(data);
  }, [data]);
  useEffect(() => {
    retrieveData();
  }, []);

  async function saveBirthDate() {
    try {
      const foundObject = data.find((item) => item.name === name);
      if (foundObject) {
        console.log(foundObject);
        setErr("Name already exist. Try another name!");
        return;
      }
      let newPerson = {
        name: name,
        month: month,
        day: day,
      };
      const updatedData = [...data, newPerson];
      const jsonValue = JSON.stringify(updatedData);
      await AsyncStorage.setItem("birthDayDates", jsonValue);
      Notifications.scheduleNotificationAsync({
        content: {
          title: "Birthday reminder",
          body: "New birthday created!",
        },
        trigger: {
          seconds: 10,
        },
      });
      console.log("Data saved successfully!");
      retrieveData();
    } catch (error) {
      console.error("Data saving error: ", error);
    }
  }
  async function retrieveData() {
    try {
      const value = await AsyncStorage.getItem("birthDayDates");
      if (value !== null) {
        const parsedValue = JSON.parse(value);
        setData(parsedValue);
        console.log(data);
      }
    } catch (error) {
      console.error("Error getting data:", error);
    }
  }

  return (
    <View style={styles.container2}>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Name"
        placeholderTextColor="#85bc84"
      ></TextInput>
      <TextInput
        style={styles.input}
        value={month == 0 ? "" : month.toString()}
        onChangeText={(input) => {
          const regex = /^[0-9\b]+$/;
          if (
            input === "" ||
            (regex.test(input) && input >= 1 && input <= 12)
          ) {
            setMonth(input);
          }
        }}
        keyboardType="numeric"
        placeholder="Month"
        placeholderTextColor="#85bc84"
      ></TextInput>
      <TextInput
        style={styles.input}
        value={day == 0 ? "" : day.toString()}
        onChangeText={(input) => {
          const regex = /^[0-9\b]+$/;
          if (
            input === "" ||
            (regex.test(input) && input >= 1 && input <= 31)
          ) {
            setDay(input);
          }
        }}
        keyboardType="numeric"
        placeholder="Day"
        placeholderTextColor="#85bc84"
      ></TextInput>
      <TouchableOpacity style={styles.button} onPressOut={saveBirthDate}>
        <Text
          style={{
            color: "#85BC84",
            fontWeight: 800,
            textAlign: "center",
            fontSize: 18,
          }}
        >
          Create Birthday
        </Text>
      </TouchableOpacity>
      <Text style={{ color: "red", fontWeight: 900 }}>{err}</Text>
    </View>
  );
};

export default CreateBirthDate;

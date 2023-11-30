import { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, ScrollView, TouchableHighlight } from "react-native";
import styles from "../../global_styles";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ShowAll = () => {
  const [data, setData] = useState();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  useEffect(() => {
    console.log(data);
  }, [data]);
  useEffect(() => {
    retrieveData();
  }, []);

  async function saveBirthDate() {
    try {
      const jsonValue = JSON.stringify(data);
      await AsyncStorage.setItem("birthDayDates", jsonValue);
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
    <View style={styles.showAllFlex}>
      <TouchableHighlight 
      style={styles.button2}
      delayPressOut={1000}
      onPressOut={saveBirthDate}>
        <Text
          style={{
            color: "#85BC84",
            fontWeight: 800,
            textAlign: "center",
            fontSize: 18,
          }}
        >Save Data</Text>
      </TouchableHighlight>
      <ScrollView>
      {data
        ? data.map((e, key) => (
            <View key={key} style={styles.showAllFlex.showAllFlexbox}>
              <Text style={styles.showAllFlex.showAllFlexbox.textStyle}>
                ID: {key}
              </Text>
              <Text style={styles.showAllFlex.showAllFlexbox.textStyle}>
                Name:{" "}
                <Text style={styles.showAllFlex.showAllFlexbox.textStyle2}>
                  {e.name}
                </Text>
              </Text>
              <Text style={styles.showAllFlex.showAllFlexbox.textStyle}>
                Birthday:{" "}
                <Text style={styles.showAllFlex.showAllFlexbox.textStyle2}>
                  {e.day}
                  {e.day == 1 ? "st" : e.day == 2 ? "nd" : "th"}{" "}
                  {monthNames[e.month - 1]}
                </Text>
              </Text>
              <TouchableOpacity
                style={styles.button2}
                onPress={() => {
                  setData(data.filter((item) => item.name !== e.name));
                }}
              >
                <Text
                  style={{
                    color: "#85BC84",
                    fontWeight: 800,
                    textAlign: "center",
                    fontSize: 18,
                  }}
                >
                  Delete
                </Text>
              </TouchableOpacity>
            </View>
          ))
        : null}
        </ScrollView>
    </View>
  );
};

export default ShowAll;

import { useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import styles from "../../global_styles";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Home = () => {
  const [data, setData] = useState([]);
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
    retrieveData();
  }, []);
  async function retrieveData() {
    try {
      const value = await AsyncStorage.getItem("birthDayDates");
      if (value !== null) {
        const parsedValue = JSON.parse(value);
        const today = new Date();
        let birthdayDates = parsedValue;
        if (birthdayDates == undefined) {
          return;
        }
        let birthdays = [];
        for (let i = 0; i < birthdayDates.length; i++) {
          let birthdayDate = birthdayDates[i];
          birthdayDate.id = i;
          let hasBirthday = "Don't have birthday";
          if (Number(birthdayDate.month) - 1 == today.getMonth() + 1) {
            hasBirthday = "Next month";
          }
          if (Number(birthdayDate.month) == today.getMonth() + 1) {
            console.log(birthdayDate.name);
            console.log(Number(birthdayDate.day) + " == " + Number(today.getDate()));
            console.log(birthdayDate);
            if (Number(birthdayDate.day) >= today.getDate()) {
              console.log(birthdayDate);
              hasBirthday = "Has birthday";
            } else {
              hasBirthday = "Birthday passed";
            }
          }
          if (today.getMonth() + 1 == 12) {
            if (Number(birthdayDate.month) == 1) {
              console.log("Next Month: "+birthdayDate.name);
              hasBirthday = "Next month";
            }
          }
          if (hasBirthday == "Has birthday") {
            console.log("Has birthday: "+birthdayDate.name);
            birthdays.push(birthdayDate);
          }
          if (hasBirthday == "Next month") {
            console.log("Next Month: "+birthdayDate.name);
            birthdays.push(birthdayDate);
          }
        }
        console.log(birthdays);
        setData(birthdays);
      }
    } catch (error) {
      console.error("Error getting data:", error);
    }
  }
  return (
    <View style={styles.homeContainer}>
      <Text style={styles.titleText3}>
        {
          data.length != 0 ? "People who have birthdays in this month and next month:" :
          "No one has a birthday this or next month."
        }
        
      </Text>
      <ScrollView>
        {data
          ? data.map((e, key) => (
              <View
                key={key}
                style={[
                  styles.showAllFlex.showAllFlexbox,
                  key == data.length - 1 ? styles.homeContainer.lastChild : null,
                ]}
              >
                <Text style={styles.showAllFlex.showAllFlexbox.textStyle}>
                  ID: {e.id}
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
              </View>
            ))
          : null}
      </ScrollView>
    </View>
  );
};

export default Home;

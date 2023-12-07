import { useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import styles from "../../global_styles";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Home = () => {
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
          return
        }
        let birthdays = [];
        birthdayDates.forEach((birthdayDate) => {
          let hasBirthday = "Don't have birthday";
          if (Number(birthdayDate.month) - 1 == today.getMonth() + 1) {
            hasBirthday = "Next month";
          }
          if (Number(birthdayDate.month) == today.getMonth() + 1) {
            hasBirthday = "Has birthday";
          }
          if (today.getMonth() + 1 == 12) {
            if (Number(birthdayDate.month) == 1) {
              hasBirthday = "Next month";
            }
          }
          if (hasBirthday == "Has birthday") {
            birthdays.push(birthdayDate);
          } else if (hasBirthday == "Next month") {
            birthdays.push(birthdayDate);
          }
        });
        setData(birthdays);
      }
    } catch (error) {
      console.error("Error getting data:", error);
    }
  }
  return (
    <View>
      <Text style={styles.titleText3}>
        People who have birthdays in this month or next month:
      </Text>
      <ScrollView>
      {data
        ? data.map((e, key) => (
            <View key={key} style={[styles.showAllFlex.showAllFlexbox,
            key == data.length - 1 ? styles.showAllFlex.lastChild : null]}>
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
            </View>
          ))
        : null}
      </ScrollView>
    </View>
  );
};

export default Home;

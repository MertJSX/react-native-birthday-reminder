import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View, TouchableOpacity } from "react-native";
import styles from "./global_styles";
import CreateBirthDate from "./pages/CreateBirthDate/CreateBirthDate";
import ShowAll from "./pages/ShowAll/ShowAll";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home/Home";
import * as BackgroundFetch from "expo-background-fetch";
import * as TaskManager from "expo-task-manager";
import React from "react";
import * as Notifications from "expo-notifications";
import AsyncStorage from "@react-native-async-storage/async-storage";

const BIRTHDAY_REMINDER_BIRTHDAY_CONTROL = "background-fetch";

async function getBirthdayDates() {
  try {
    const value = await AsyncStorage.getItem("birthDayDates");
    if (value !== null) {
      const parsedValue = JSON.parse(value);
      return parsedValue;
    }
  } catch (error) {
    console.error("Error getting data:", error);
  }
}

TaskManager.defineTask(BIRTHDAY_REMINDER_BIRTHDAY_CONTROL, async () => {
  const today = new Date();
  console.log(
    `Got background fetch call at date: ${new Date(today).toISOString()}`
  );
  let birthdayDates = await getBirthdayDates();
  if (birthdayDates == undefined) {
    return BackgroundFetch.BackgroundFetchResult.NewData;
  }
  let birthdaysInThisMonth = [];
  let birthdaysInNextMonth = [];
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
      birthdaysInThisMonth.push(birthdayDate);
    } else if (hasBirthday == "Next month") {
      birthdaysInNextMonth.push(birthdayDate);
    }
  });
  if (birthdaysInThisMonth.length !== 0) {
    let birthdayGuys = "";
    birthdaysInThisMonth.forEach((e) => {
      birthdayGuys = birthdayGuys + `${e.name} day ${e.day}, `;
    });
    Notifications.scheduleNotificationAsync({
      content: {
        title: "Birthday reminder",
        body: `In this month ${birthdayGuys} has birthday!`,
      },
      trigger: {
        seconds: 1,
      },
    });
  }
  if (birthdaysInNextMonth.length !== 0) {
    let birthdayGuys = "";
    birthdaysInNextMonth.forEach((e) => {
      birthdayGuys = birthdayGuys + `${e.name} day ${e.day}, `;
    });
    Notifications.scheduleNotificationAsync({
      content: {
        title: "Birthday reminder",
        body: `In next month ${birthdayGuys} has birthday!`,
      },
      trigger: {
        seconds: 1,
      },
    });
  }
  registerBackgroundFetchAsync();
  return BackgroundFetch.BackgroundFetchResult.NewData;
});

async function registerBackgroundFetchAsync() {
  return BackgroundFetch.registerTaskAsync(BIRTHDAY_REMINDER_BIRTHDAY_CONTROL, {
    minimumInterval: 60 * 60 * 24,
    stopOnTerminate: false,
    startOnBoot: true,
  });
}

async function unregisterBackgroundFetchAsync() {
  return BackgroundFetch.unregisterTaskAsync(
    BIRTHDAY_REMINDER_BIRTHDAY_CONTROL
  );
}

export default function App() {
  const [page, setPage] = useState("home");
  const [isRegistered, setIsRegistered] = React.useState(false);
  const [status, setStatus] = React.useState(null);

  React.useEffect(() => {
    checkStatusAsync();
    if (!isRegistered) {
      toggleFetchTask();
    }
  }, []);
  React.useEffect(() => {
    console.log(status);
  });

  const checkStatusAsync = async () => {
    const status = await BackgroundFetch.getStatusAsync();
    const isRegistered = await TaskManager.isTaskRegisteredAsync(
      BIRTHDAY_REMINDER_BIRTHDAY_CONTROL
    );
    setStatus(status);
    setIsRegistered(isRegistered);
  };

  const toggleFetchTask = async () => {
    if (!isRegistered) {
      console.log("Task has started");
      await registerBackgroundFetchAsync();
    } else {
      console.log("Task has stopped");
      await unregisterBackgroundFetchAsync();
    }
    checkStatusAsync();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Birthday Reminder</Text>
      <Navbar setPage={setPage} />
      {page == "create" ? (
        <CreateBirthDate />
      ) : page == "showall" ? (
        <ShowAll />
      ) : isRegistered ? (
        <View>
          <TouchableOpacity style={styles.button2} onPress={toggleFetchTask}>
            <Text
              style={{
                color: "#85BC84",
                fontWeight: 800,
                textAlign: "center",
                fontSize: 18,
              }}
            >
              {" "}
              Notifications: Enabled
            </Text>
          </TouchableOpacity>
            <Home />
        </View>
      ) : (
        <View>
          <TouchableOpacity style={styles.button2} onPress={toggleFetchTask}>
            <Text
              style={{
                color: "#85BC84",
                fontWeight: 800,
                textAlign: "center",
                fontSize: 18,
              }}
            >
              {" "}
              Notifications: Disabled
            </Text>
          </TouchableOpacity>
          <Home />
        </View>
      )}

      <StatusBar style="auto" />
    </View>
  );
}

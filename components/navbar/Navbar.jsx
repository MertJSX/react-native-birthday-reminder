import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "../../global_styles";

const Navbar = (props) => {
  return (
    <View style={styles.navView}>
      <TouchableOpacity
        style={styles.navButton}
        onPressOut={() => {
          props.setPage("home");
        }}
      >
        <Text
          style={{
            color: "#96d495",
            fontWeight: 800,
            textAlign: "center",
            fontSize: 18,
            textShadowColor: "black",
            textShadowOffset: { width: 1, height: 1 },
            textShadowRadius: 5,
          }}
        >
          Home
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.navButton}
        onPressOut={() => {
          props.setPage("showall");
        }}
      >
        <Text
          style={{
            color: "#96d495",
            fontWeight: 800,
            textAlign: "center",
            fontSize: 18,
            textShadowColor: "black",
            textShadowOffset: { width: 1, height: 1 },
            textShadowRadius: 5,
          }}
        >
          Birthdays
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.navButton}
        onPressOut={() => {
          props.setPage("create");
        }}
      >
        <Text
          style={{
            color: "#96d495",
            fontWeight: 800,
            textAlign: "center",
            fontSize: 18,
            textShadowColor: "black",
            textShadowOffset: { width: 1, height: 1 },
            textShadowRadius: 5,
          }}
        >
          Create
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Navbar;

import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from '../../global_styles'

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
            style={{ color: "#96d495", fontWeight: 800, textAlign: "center",fontSize: 18 }}
          >
            Home
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navButton}
          onPressOut={() => {
            props.setPage("create");
          }}
        >
          <Text
            style={{ color: "#96d495", fontWeight: 800, textAlign: "center",fontSize: 18 }}
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
            style={{ color: "#96d495", fontWeight: 800, textAlign: "center",fontSize: 18 }}
          >
            Create
          </Text>
        </TouchableOpacity>
      </View>
  )
}

export default Navbar
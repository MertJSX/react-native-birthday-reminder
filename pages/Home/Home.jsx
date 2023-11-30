import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import styles from "../../global_styles";

const Home = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>Home page</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      color: 'green',
      fontSize: 24,
      marginTop: 10
    },
    input: {
      fontSize: 20,
      borderColor: 'black',
      borderStyle: 'solid',
      borderWidth: 2,
      padding: 5,
      borderRadius: 15,
      width: 200,
      textAlign: 'center',
      backgroundColor: '#eaa'
    }
  });

export default Home
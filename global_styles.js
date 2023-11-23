import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#252525",
      //alignItems: 'center',
      //justifyContent: 'center'
    },
    container2: {
      flex: 1,
      backgroundColor: "#252525",
      alignItems: "center",
      marginTop: 30,
      //justifyContent: 'center'
    },
    titleText: {
      color: "#8fce00",
      fontSize: 24,
      marginTop: 30,
      marginLeft: 20,
      textAlign: "center",
      fontWeight: '900',
      marginBottom: 20
    },
    input: {
      fontSize: 15,
      borderColor: "#82dfab",
      borderStyle: "solid",
      borderWidth: 2,
      padding: 2,
      borderRadius: 8,
      width: "70%",
      textAlign: "center",
      backgroundColor: "#181d23",
      color: "#82dfab",
      marginBottom: 10
    },
    button: {
      fontSize: 15,
      borderColor: "#82dfab",
      borderStyle: "solid",
      borderWidth: 2,
      padding: 2,
      borderRadius: 8,
      width: "70%",
      textAlign: "center",
      backgroundColor: "#a7eca6",
      color: "#82dfab",
    },
    navButton: {
        fontSize: 15,
        borderColor: "#82dfab",
        borderStyle: "solid",
        borderWidth: 2,
        padding: 2,
        //borderRadius: 15,
        //width: 100,
        backgroundColor: "#a7eca6",
        color: "#82dfab",
        flexGrow: 1
      },
    navView: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        width: "100%"
    }
  });

  export default styles;
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#212f21",
    //alignItems: 'center',
    //justifyContent: 'center'
  },
  container2: {
    flex: 1,
    alignItems: "center",
    marginTop: 30,
    //justifyContent: 'center',
    //alignItems: "center",
    //backgroundColor: "#324631",
    //width: 300
  },
  homeContainer: {
    width: "100%",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 200,
    lastChild: {
      marginBottom: 220,
    },
  },
  titleText: {
    color: "#74a574",
    fontSize: 34,
    marginTop: 30,
    marginLeft: 20,
    textAlign: "center",
    fontWeight: "900",
    marginBottom: 20,
    textShadowColor: "black",
    textShadowOffset: {width: 3, height: 3},
    textShadowRadius: 5
  },
  titleText2: {
    color: "#74a574",
    fontSize: 30,
    marginTop: 20,
    textAlign: "center",
    fontWeight: "900",
    marginBottom: 20,
    textShadowColor: "black",
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 5
  },
  titleText3: {
    color: "#74a574",
    fontSize: 20,
    marginTop: 20,
    textAlign: "center",
    fontWeight: "900",
    marginBottom: 20,
    textShadowColor: "black",
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 5
  },
  input: {
    fontSize: 18,
    //borderColor: "#82dfab",
    //borderStyle: "solid",
    //borderWidth: 2,
    padding: 3,
    borderRadius: 18,
    width: "70%",
    textAlign: "center",
    backgroundColor: "#a7eca6",
    color: "#69920c",
    fontWeight: "800",
    marginBottom: 10,
  },
  button: {
    //borderColor: "#82dfab",
    //borderStyle: "solid",
    //borderWidth: 2,
    padding: 3,
    borderRadius: 18,
    width: "70%",
    textAlign: "center",
    backgroundColor: "#425e42",
  },
  button2: {
    //borderColor: "#82dfab",
    //borderStyle: "solid",
    //borderWidth: 2,
    padding: 3,
    borderRadius: 18,
    width: "100%",
    textAlign: "center",
    backgroundColor: "#425e42",
    marginBottom: 10,
    marginTop: 10,
  },
  navButton: {
    fontSize: 15,
    borderColor: "#96d495",
    borderStyle: "solid",
    borderWidth: 2,
    padding: 2,
    //borderRadius: 15,
    //width: 100,
    backgroundColor: "#537653",
    flexGrow: 1,
  },
  navView: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
  },
  showAllFlex: {
    //display: "flex",
    //flexDirection: "row",
    //flexWrap: "wrap",
    width: "100%",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 200,
    flexView : {
      paddingBottom: 100,
    },
    lastChild: {
      marginBottom: 50,
    },
    showAllFlexbox: {
      display: "flex",
      flexDirection: "column",
      flexWrap: "wrap",
      width: "90%",
      margin: 10,
      padding: 10,
      borderRadius: 15,
      backgroundColor: "#324631",
      textStyle: {
        color: "#85BC84",
        fontWeight: "500",
        fontSize: 20
      },
      textStyle2: {
        color: "#a7eca6",
        fontWeight: "800",
        fontSize: 20
      }
    },
  },
});

export default styles;

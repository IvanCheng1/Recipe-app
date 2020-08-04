import { StyleSheet, Dimensions } from "react-native";
const windowWidth = Dimensions.get("window").width;
const windowHalfWidth = windowWidth / 2;
const windowHeight = Dimensions.get("window").height;

export const myStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  recipeList: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    // alignItems: "flex-start",
  },
  imageList: {
    width: windowHalfWidth * 0.95,
    height: windowHalfWidth * 0.95,
  },
  box: {
    borderColor: "grey",
    borderWidth: 1,
  },
  recipeContainer: {
    paddingTop: 5,
    paddingBottom: 5,
    width: windowHalfWidth,
    // height: windowHalfWidth + 50,
    alignItems: "center",
    justifyContent: "center",
  },
  recipeTitle: {
    fontSize: 20,
    lineHeight: 26,
    color: "#f4511e",
    fontWeight: "bold",
    textAlign: "center",
  },
  receipeNotes: {
    fontSize: 14,
    lineHeight: 18,
    color: "#f4511e",
    textAlign: "center",
  },
  title: {
    fontSize: 28,
    lineHeight: 36,
    color: "#f4511e",
    margin: 20,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 18,
    lineHeight: 22,
    color: "#f88967",
  },
  imageRecipe: {
    width: windowWidth,
    height: windowHeight / 3,
    resizeMode: "cover",
  },
});

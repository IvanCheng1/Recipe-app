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
  containerNonCenter: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
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
    margin: 10,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 18,
    lineHeight: 22,
    marginBottom: 20,
    color: "#f88967",
  },
  imageRecipe: {
    width: windowWidth,
    height: windowHeight / 3,
    resizeMode: "cover",
  },
  recipeShoppingList: {
    width: "60%",
  },
  recipePadding: {
    lineHeight: 20,
  },
  recipeIngredientsText: {
    fontSize: 24,
    lineHeight: 24,
    margin: 5,
    fontWeight: "bold",
    textAlign: "center",
  },
  recipeCatText: {
    fontSize: 20,
    lineHeight: 24,
    margin: 5,
    marginTop: 15,
    fontWeight: "bold",
    textAlign: "center",
  },
  recipeItemGroup: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
    borderColor: "grey",
    borderWidth: 1,
    borderRadius: 6,
    height: 30,
  },
  recipeItemQuan: {
    fontSize: 16,
    lineHeight: 25,
    textAlign: "left",
    marginRight: 5,
    marginLeft: 4,
    // width: 50
  },
  recipeItemUnit: {
    fontSize: 16,
    lineHeight: 25,
    textAlign: "left",
    marginRight: 5,
    // marginLeft: 4,
    // width: 50
  },
  recipeItem: {
    fontSize: 16,
    lineHeight: 25,
    textAlign: "left",
  },
  btn: {
    backgroundColor: "#f56436",
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    width: 250,
    height: 50,
  },
  btnDisabled: {
    backgroundColor: "grey",
    
  },
  btnSmall: {
    backgroundColor: "#f56436",
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    width: 150,
    height: 40,
  },
  btnDark: {
    backgroundColor: "#bc3409",
  },
  btnText: {
    color: "#FFF",
    fontSize: 15,
  },
  input: {
    padding: 15,
    borderColor: "#f4511e",
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 20,
    width: 300,
  },
  inputRecipeGroup: {
    flexDirection: "row",
  },
  inputQuantityRight: {
    padding: 15,
    borderColor: "#f4511e",
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 20,
    width: 80,
  },
  inputItemLeft: {
    padding: 15,
    borderColor: "#f4511e",
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 20,
    width: 250,
  },
  addRecipeContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
  },
  img: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
    backgroundColor: 'black',
    borderRadius: 10,
  },
  imgPlaceHolder: {
    width: 300,
    height: 300,
    borderColor: "#f4511e",
    borderWidth: 1,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  shoppingListSectionTitle: {
    fontSize: 20,
    lineHeight: 26,
    color: "#f4511e",
    fontWeight: "bold",
    textAlign: "left",
    margin: 10,
  },
  shoppingListItem: {
    // flexDirection: "row",
    // borderColor: "#f4511e",
    // borderWidth: 1,
    // borderRadius: 10,
    // width: windowWidth * 0.95,
    // flex: 1,
    // padding: 0,
  },
  checkBox: {
    marginRight: 15,
  },
  shoppingItemDescription: {
    flex: 1,
  },
  shoppingItemDescriptionFor: {
    color: "grey",
    fontSize: 13,
    // paddingLeft: 5,
  },
  shoppingItemDescriptionCrossed: {
    textDecorationLine: 'line-through',
    color: "grey",
  },
  shoppingListBin: {
    marginLeft: 10,
    marginRight: 10,
  }
});

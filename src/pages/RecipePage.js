import React, { Component } from "react";
import { connect } from "react-redux";
import { myStyles } from "../utils/myStyles";
import { Text, View, Image, ScrollView, Alert } from "react-native";
import RecipeShoppingList from "../components/RecipeShoppingList";
import { TouchableOpacity } from "react-native-gesture-handler";
import { capitaliseWord } from "../utils/helpers";
import { handleDeleteRecipes } from "../actions/recipes";
import { handleAddShopping } from "../actions/shoppingList";
import Toast from "react-native-tiny-toast";
import { Card, Fab, Icon } from "native-base";

function mapStateToProps({ recipes }) {
  return {
    recipes,
  };
}

class RecipePage extends Component {
  confirmDelete = (id) => {
    Alert.alert(
      "Delete Recipe",
      "Are you sure you want to remove this recipe?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Ok",
          onPress: () => this.onDelete(id),
        },
      ],
      { cancelable: false }
    );
  };

  onDelete = (id) => {
    this.props.dispatch(handleDeleteRecipes(id));
    this.props.navigation.navigate("Home");
  };

  onAddToShoppinglist = (recipe, title) => {
    this.props.dispatch(handleAddShopping(recipe, title));
    Toast.showSuccess("Added to Shopping List!");
  };

  render() {
    const { id } = this.props.route.params;
    const { recipes } = this.props;
    const item = recipes[id];

    if (!item) {
      return <View></View>;
    }

    const image = item.image
      ? { uri: item.image }
      : require("../images/plate.jpg");

    return (
      <View style={myStyles.container}>
        <ScrollView>
          <View style={myStyles.container}>
            <Image style={myStyles.imageRecipe} source={image} />
            {/* <Text style={myStyles.title}>{capitaliseWord(item.title)}</Text> */}
            {item.notes !== "" && (
              <Text style={myStyles.notes}>From: {item.notes}</Text>
            )}
            {/* <Text style={myStyles.recipePadding}></Text> */}
            {/* <View style={myStyles.box}> */}

            <Card style={myStyles.recipeCard}>
              {/* <CardItem style={[myStyles.container, {flex: 1}, myStyles.box]}> */}
              <RecipeShoppingList id={id} />
              {/* </CardItem> */}
            </Card>

            {/* </View> */}

            {/* <TouchableOpacity
            style={myStyles.btn}
            onPress={() => alert("Edit Recipe")}
            >
            <Text style={myStyles.btnText}>Edit Recipe</Text>
          </TouchableOpacity> */}
            <TouchableOpacity
              style={myStyles.btn}
              onPress={() =>
                this.onAddToShoppinglist(item.ingredients, item.title)
              }
            >
              <Text style={myStyles.btnText}>Add to Shopping List</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[myStyles.btn, myStyles.btnDark]}
              onPress={() => this.confirmDelete(id)}
            >
              <Text style={myStyles.btnText}>Delete Recipe</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default connect(mapStateToProps)(RecipePage);

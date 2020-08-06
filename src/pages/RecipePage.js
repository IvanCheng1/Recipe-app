import React, { Component } from "react";
import { connect } from "react-redux";
import { myStyles } from "../utils/myStyles";
import { Text, View, Image, ScrollView } from "react-native";
import RecipeShoppingList from "../components/RecipeShoppingList";
import { TouchableOpacity } from "react-native-gesture-handler";
import { capitaliseWord } from "../utils/helpers";
import { handleDeleteRecipes } from "../actions/recipes";

function mapStateToProps({ recipes }) {
  return {
    recipes,
  };
}

class RecipePage extends Component {
  onSubmit = (id) => {
    this.props.dispatch(handleDeleteRecipes(id));
    this.props.navigation.navigate("Home");
  };

  render() {
    const { id } = this.props.route.params;
    const { recipes } = this.props;
    const item = recipes[id];

    if (!item) {
      return <View></View>
    }

    const image = item.image
      ? { uri: item.image }
      : require("../images/plate.jpg");

    return (
      <ScrollView>
        <View style={myStyles.container}>
          <Image style={myStyles.imageRecipe} source={image} />
          <Text style={myStyles.title}>{capitaliseWord(item.title)}</Text>
          {item.notes !== "" && (
            <Text style={myStyles.subtitle}>"{item.notes}"</Text>
          )}
          {/* <Text style={myStyles.recipePadding}></Text> */}

          <RecipeShoppingList id={id} />

          <TouchableOpacity
            style={myStyles.btn}
            onPress={() => alert("Add to Shopping List")}
          >
            <Text style={myStyles.btnText}>Add to Shopping List</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={myStyles.btn}
            onPress={() => alert("Edit Recipe")}
          >
            <Text style={myStyles.btnText}>Edit Recipe</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[myStyles.btn, myStyles.btnDark]}
            onPress={() => this.onSubmit(id)}
          >
            <Text style={myStyles.btnText}>Delete Recipe</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

export default connect(mapStateToProps)(RecipePage);

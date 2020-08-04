import React, { Component } from "react";
import { connect } from "react-redux";
import { myStyles } from "../utils/myStyles";
import {
  Text,
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from "react-native";
// import { getRecipes } from "../utils/api";
import Recipe from "../components/Recipe";
import { Searchbar } from "react-native-paper";
import { handleReceiveRecipes } from "../actions/recipes";

function mapStateToProps(state) {
  return {
    state,
  };
}

class Recipes extends Component {
  state = {
    recipes: [],
    query: "",
  };

  componentDidMount() {
    // getRecipes().then((recipes) => this.setState({ recipes }));

    this.props.dispatch(handleReceiveRecipes()).then(() => {
      this.setState({ recipes: this.props.state.recipes });
    });
  }

  onChangeSearch = (query) => {
    this.setState({ query });
  };

  renderItem = ({item} ) => {
    const { recipes } = this.state;
    const recipe = recipes[item]
    // console.log(key)
    return (
      <TouchableOpacity onPress={() => this.navigateToRecipe(recipe, item)}>
        <Recipe recipe={recipe} />
      </TouchableOpacity>
    );
  };

  navigateToRecipe = (recipe, key) => {
    this.props.navigation.navigate("Recipe Page", {
      id: key,
      name: recipe.title,
    });
  };

  render() {
    const { recipes } = this.state;
    // console.log(Object.keys(recipes));

    return (
      <SafeAreaView style={myStyles.container}>
        <Searchbar
          placeholder="Search"
          onChangeText={this.onChangeSearch}
          value={this.state.query}
        />
        <FlatList
          style={myStyles.recipeList}
          data={Object.keys(recipes)}
          renderItem={this.renderItem}
          numColumns={2}
          keyExtractor={(item) => item}
        />
      </SafeAreaView>
    );
  }
}

export default connect(mapStateToProps)(Recipes);

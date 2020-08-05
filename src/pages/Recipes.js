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
import Recipe from "../components/Recipe";
import { Searchbar } from "react-native-paper";
import { handleReceiveRecipes } from "../actions/recipes";

function mapStateToProps({ recipes }) {
  return {
    recipes,
  };
}

class Recipes extends Component {
  state = {
    recipes: {},
    query: "",
  };

  componentDidMount() {
    this.props.dispatch(handleReceiveRecipes()).then(() => {
      const recipes = this.props.recipes;
      this.setState({ recipes: this.props.recipes });
    });
  }

  onChangeSearch = (query) => {
    this.setState({ query });

    const { recipes } = this.props;

    if (query === "") {
      // reset
      this.setState({ recipes: recipes });
      // console.log("reset", recipes, "reset")
    }

    // const filtered = Object.values(recipes).filter((item) => {
    //   return item.title.toLowerCase().includes(query.toLowerCase());
    // });

    let filtered = {};

    for (const [key, item] of Object.entries(recipes)) {
      if (item.title.toLowerCase().includes(query.toLowerCase())) {
        // if title contains query
        filtered[key] = item;
        continue;
      } else {
        for (const category of Object.values(item.ingredients)) {
          for (const ingredient of Object.keys(category)) {
            if (ingredient.toLowerCase().includes(query.toLowerCase())) {
              filtered[key] = item;
              continue;
            }
          }
        }
      }
      // console.log(key)
    }

    // console.log(filtered, "filter")
    this.setState((prev) => ({
      recipes: filtered,
    }));

    // console.log(this.state.recipes);
  };

  renderItem = (item) => {
    const { recipes } = this.state;
    const recipe = recipes[item];

    return (
      <TouchableOpacity onPress={() => this.navigateToRecipe(recipe, item)}>
        <Recipe recipe={recipe} />
      </TouchableOpacity>
      // <Text>hi</Text>
    );
  };

  navigateToRecipe = (recipe, key) => {
    // console.log(recipe, key)
    this.props.navigation.navigate("Recipe Page", {
      id: key,
      name: recipe.title,
    });
  };

  render() {
    const { recipes } = this.state;
    // const list = recipes
    // const keys = Object.keys(list);
    // console.log(Object.keys(recipes))
    // console.log(recipes, "recipes");

    return (
      <SafeAreaView style={myStyles.container}>
        <Searchbar
          placeholder="Search"
          onChangeText={(query) => this.onChangeSearch(query)}
          value={this.state.query}
        />

        {recipes && (
          <FlatList
            style={myStyles.recipeList}
            data={Object.keys(recipes).sort()}
            extraData={this.state.recipes}
            renderItem={({ item }) => this.renderItem(item)}
            numColumns={2}
            keyExtractor={(item) => item}
          />
        )}
      </SafeAreaView>
    );
  }
}

export default connect(mapStateToProps)(Recipes);

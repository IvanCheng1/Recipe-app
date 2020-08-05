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
    }

    let filtered = {};

    for (const [key, item] of Object.entries(recipes)) {
      if (item.title.toLowerCase().includes(query.toLowerCase())) {
        // if title contains query
        filtered[key] = item;
        continue;
      } else {
        for (const list of Object.values(item.ingredients)) {
          if (list.length === 0) {
            continue;
          }
          for (const ingredient of list) {
            if (ingredient.item.toLowerCase().includes(query.toLowerCase())) {
              filtered[key] = item;
              continue;
            }
          }
        }
      }
    }

    this.setState({
      recipes: filtered,
    });
  };

  renderItem = (item) => {
    const { recipes } = this.state;
    const recipe = recipes[item];

    return (
      <TouchableOpacity onPress={() => this.navigateToRecipe(recipe, item)}>
        <Recipe recipe={recipe} />
      </TouchableOpacity>
    );
  };

  navigateToRecipe = (recipe, key) => {
    //reset
    this.setState({
      query: "",
      recipes: this.props.recipes,
    });

    this.props.navigation.navigate("Recipe Page", {
      id: key,
      name: recipe.title,
    });
  };

  render() {
    const { recipes } = this.state;

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

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
      this.setState({ recipes });
    }

    const filtered = Object.values(recipes).filter((item) => {
      return item.title.includes(query);
    });


    if (filtered) {
      // console.log(filtered)
      this.setState({
        recipes: filtered,
      });
    }

    // console.log(this.state.recipes);
  };

  renderItem = (thing) => {
    const { recipes } = this.state;
    const item = thing.item;
    const recipe = recipes[item];
    console.log(thing);

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
    // const list = Object.keys(recipes)

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
            data={Object.keys(recipes)}
            extraData={this.state}
            renderItem={this.renderItem}
            numColumns={2}
            keyExtractor={(item) => item}
          />
        )}
      </SafeAreaView>
    );
  }
}

export default connect(mapStateToProps)(Recipes);

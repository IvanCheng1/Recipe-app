import React, { Component } from "react";
import { connect } from "react-redux";
import { myStyles } from "../utils/myStyles";
import { Text, View } from "react-native";
import { capitaliseWord } from "../utils/helpers";

function mapStateToProps({ recipes }, { id }) {
  return {
    id,
    recipes,
  };
}

class RecipeShoppingList extends Component {
  render() {
    const { id, recipes } = this.props;
    const ingredients = recipes[id].ingredients;
    const items = [];

    for (const [category, list] of Object.entries(ingredients)) {
      if (list.length === 0) {
        // category is empty
        continue;
      }

      items.push(<Text key={category} style={myStyles.recipeCatText}>{category}</Text>);
      
      for (const item of list) {
        items.push(
          <View key={item.item} style={myStyles.recipeItemGroup}>
            <Text style={myStyles.recipeItemQuan}>{item.quantity}</Text>
            <Text style={myStyles.recipeItem}>{capitaliseWord(item.item)}</Text>
          </View>
        )
      }
    }

    return (
      <View style={[myStyles.recipeShoppingList]}>
        <Text style={myStyles.recipeIngredientsText}>Ingredients</Text>

        {items}
      </View>
    );
  }
}

export default connect(mapStateToProps)(RecipeShoppingList);

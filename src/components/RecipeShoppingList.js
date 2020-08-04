import React, { Component } from "react";
import { connect } from "react-redux";
import { myStyles } from "../utils/myStyles";
import { Text, View } from "react-native";
function mapStateToProps({ recipes }, { id }) {
  return {
    id,
    recipes,
  };
}

class RecipeShoppingList extends Component {
  render() {
    const { id, recipes } = this.props;
    const item = recipes[id];
    const spices = item.ingredients.spices;
    const vegs = item.ingredients.veg;

    return (
      <View style={[myStyles.recipeShoppingList]}>
        <Text style={myStyles.recipeIngredientsText}>Ingredients</Text>
        <Text style={myStyles.recipeCatText}>Spices</Text>
        {Object.keys(spices).map((spice) => {
          return (
            <View key={spice} style={myStyles.recipeItemGroup}>
              <Text style={myStyles.recipeItemQuan}>
                {spices[spice]}
              </Text>
              <Text style={myStyles.recipeItem}>
                {spice}
              </Text>
            </View>
          );
        })}
        <Text style={myStyles.recipeCatText}>Vegetables</Text>
        {Object.keys(vegs).map((veg) => {
          return (
            <View key={veg} style={myStyles.recipeItemGroup}>
              <Text style={myStyles.recipeItemQuan}>
                {vegs[veg]}
              </Text>
              <Text style={myStyles.recipeItem}>
                {veg}
              </Text>
            </View>
          );
        })}
      </View>
    );
  }
}

export default connect(mapStateToProps)(RecipeShoppingList);

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

    return (
      <View>
        <Text>Ingredients</Text>
        <Text>spices</Text>
        {Object.keys(item.ingredients.spices).map((spice) => {
          return (
            <Text key={spice}>
              {spice} - {item.ingredients.spices[spice]}
            </Text>
          );
        })}
      </View>
    );
  }
}

export default connect(mapStateToProps)(RecipeShoppingList);

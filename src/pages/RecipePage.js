import React, { Component } from "react";
import { connect } from "react-redux";
import { myStyles } from "../utils/myStyles";
import { Text, View, Image, ScrollView } from "react-native";
import RecipeShoppingList from "../components/RecipeShoppingList";

function mapStateToProps({ recipes }) {
  return {
    recipes,
  };
}

class RecipePage extends Component {
  render() {
    const { id } = this.props.route.params;
    const { recipes } = this.props;
    const item = recipes[id];

    return (
      <ScrollView>
        <View style={myStyles.container}>
          <Image style={myStyles.imageRecipe} source={{ uri: item.image }} />
          <Text style={myStyles.title}>{item.title}</Text>
          {item.notes !== "" && (
            <Text style={myStyles.subtitle}>"{item.notes}"</Text>
          )}
          <RecipeShoppingList id={id}/>
        </View>
      </ScrollView>
    );
  }
}

export default connect(mapStateToProps)(RecipePage);

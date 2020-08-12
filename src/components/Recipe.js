import React, { Component } from "react";
import { connect } from "react-redux";
import { myStyles } from "../utils/myStyles";
import { Text, View, Image } from "react-native";
import { capitaliseWord } from "../utils/helpers";

function mapStateToProps(state, { recipe }) {
  return { recipe };
}

class Recipe extends Component {
  state = {};

  componentDidMount() {}
  render() {
    const { recipe } = this.props;
    const image = recipe.image
      ? { uri: recipe.image }
      : require("../images/plate.jpg");

    return (
      <View style={myStyles.recipeContainer}>
        <Image style={myStyles.imageList} source={image} />
        <Text style={myStyles.recipeTitle}>{capitaliseWord(recipe.title)}</Text>
        <Text style={myStyles.receipeNotes}>{recipe.notes}</Text>
      </View>
    );
  }
}

export default connect(mapStateToProps)(Recipe);

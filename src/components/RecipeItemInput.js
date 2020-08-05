import React, { Component } from "react";
import { connect } from "react-redux";
import { myStyles } from "../utils/myStyles";
import { Text, View, TextInput } from "react-native";

function mapStateToProps(state, { id, category, onChangeItem, onChangeQty }) {
  return {
    id,
    category,
    onChangeItem,
    onChangeQty,
  };
}

class RecipeItemInput extends Component {
  render() {
    const { id, category, onChangeItem, onChangeQty } = this.props;
    return (
      <View key={id} style={[myStyles.box, myStyles.inputRecipeGroup]}>
        <TextInput
          // value={input}
          style={myStyles.inputItemLeft}
          placeholder="Item..."
          onChangeText={(input) => onChangeItem(input, id, category)}
        />
        <TextInput
          // value={'input'}
          style={myStyles.inputQuantityRight}
          placeholder="Qty"
          onChangeText={(input) => onChangeQty(input, id, category)}
        />
      </View>
    );
  }
}

export default connect(mapStateToProps)(RecipeItemInput);

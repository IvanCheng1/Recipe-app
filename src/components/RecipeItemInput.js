import React, { Component } from "react";
import { connect } from "react-redux";
import { myStyles } from "../utils/myStyles";
import { Text, View, TextInput } from "react-native";

function mapStateToProps(state, { id, onChange }) {
  return {
    id,
    onChange,
  };
}

class RecipeItemInput extends Component {
  render() {
    const { id, onChangeItem, onChangeQty } = this.props;
    return (
      <View key={id} style={[myStyles.box, myStyles.inputRecipeGroup]}>
        <TextInput
          // value={input}
          style={myStyles.inputItemLeft}
          placeholder="Item..."
          onChangeText={(input) => onChangeItem(input)}
        />
        <TextInput
          // value={'input'}
          style={myStyles.inputQuantityRight}
          placeholder="Qty"
          onChangeText={(input) => onChangeQty(input)}
        />
      </View>
    );
  }
}

export default connect(mapStateToProps)(RecipeItemInput);

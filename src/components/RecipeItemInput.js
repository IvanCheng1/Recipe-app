import React, { Component } from "react";
import { connect } from "react-redux";
import { myStyles } from "../utils/myStyles";
import { Text, View, TextInput } from "react-native";

function mapStateToProps(
  state,
  { id, category, onChangeItem, onChangeQty, values }
) {
  return {
    id,
    category,
    onChangeItem,
    onChangeQty,
    values,
  };
}

class RecipeItemInput extends Component {
  state = {
    item: "",
    quantity: "",
  };
  render() {
    const { id, category, onChangeItem, onChangeQty, values } = this.props;

    if (values) {
      return (
        <View key={id} style={myStyles.inputRecipeGroup}>
          <TextInput
            style={myStyles.inputItemLeft}
            placeholder="Item..."
            onChangeText={(input) => onChangeItem(input, id, category)}
            value={values ? values.item : ""}
          />
          <TextInput
            style={myStyles.inputQuantityRight}
            placeholder="Qty"
            onChangeText={(input) => onChangeQty(input, id, category)}
            value={values ? values.quantity : ""}
          />
        </View>
      );
    } else {
      return (
        <View key={id} style={myStyles.inputRecipeGroup}>
          <TextInput
            style={myStyles.inputItemLeft}
            placeholder="Item..."
            onChangeText={(input) => onChangeItem(input, id, category)}
          />
          <TextInput
            style={myStyles.inputQuantityRight}
            placeholder="Qty"
            onChangeText={(input) => onChangeQty(input, id, category)}
          />
        </View>
      );
    }
  }
}

export default connect(mapStateToProps)(RecipeItemInput);

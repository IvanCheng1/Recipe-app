import React, { Component } from "react";
import { connect } from "react-redux";
import { myStyles } from "../utils/myStyles";
import { Text, View, TextInput } from "react-native";

function mapStateToProps(
  state,
  { id, category, onChangeItem, onChangeQty, onChangeUnit, update }
) {
  return {
    id,
    category,
    onChangeItem,
    onChangeQty,
    onChangeUnit,
    update,
  };
}

class RecipeItemInput extends Component {
  state = {
    item: "",
    quantity: "",
    unit: "",
  };

  render() {
    const { id, category, onChangeItem, onChangeQty, onChangeUnit } = this.props;

    return (
      <View key={id} style={[myStyles.box, myStyles.inputRecipeGroup]}>
        <TextInput
          style={myStyles.inputItemLeft}
          placeholder="Item..."
          onChangeText={(input) => onChangeItem(input, id, category)}
          // ref={(input) => {
          //   this.textInputValue = input;
          // }}
        />
        <TextInput
          style={myStyles.inputQuantityRight}
          placeholder="Qty"
          onChangeText={(input) => onChangeQty(input, id, category)}
          // ref={(input) => {
          //   this.textInputQty = input;
          // }}
        />
        <TextInput
          style={myStyles.inputQuantityRight}
          placeholder="Unit"
          onChangeText={(input) => onChangeUnit(input, id, category)}
          // ref={(input) => {
          //   this.textInputQty = input;
          // }}
        />
      </View>
    );
  }
}

export default connect(mapStateToProps)(RecipeItemInput);

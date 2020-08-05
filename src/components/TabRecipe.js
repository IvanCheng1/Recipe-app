import React, { Component } from "react";
import { connect } from "react-redux";
import { myStyles } from "../utils/myStyles";
import {
  Text,
  View,
  TextInput,
  ScrollView,
  Button,
  TouchableOpacity,
} from "react-native";
import { Container, Tab, Tabs, ScrollableTab, Header } from "native-base";
import RecipeItemInput from "../components/RecipeItemInput";

function mapStateToProps(
  state,
  { category, catInput, onChangeItem, onChangeQty, catInputName, addInput }
) {
  return {
    category,
    catInput,
    onChangeItem,
    onChangeQty,
    addInput,
    catInputName,
  };
}

class TabRecipe extends Component {
  render() {
    const {
      category,
      catInput,
      catInputName,
      onChangeItem,
      onChangeQty,
      addInput,
    } = this.props;

    return (
      // <Tab heading={category}>
      <ScrollView>
        <View style={myStyles.addRecipeContainer}>
          <RecipeItemInput
            id={0}
            category={category}
            onChangeItem={onChangeItem}
            onChangeQty={onChangeQty}
          />

          {catInput.map((value, index) => {
            return value;
          })}
        </View>
        <Button
          title="+"
          onPress={() => addInput(catInput.length + 1, category, catInputName)}
        />
      </ScrollView>
      // </Tab>
    );
  }
}

export default connect(mapStateToProps)(TabRecipe);

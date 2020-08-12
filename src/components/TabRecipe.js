import React, { Component } from "react";
import { connect } from "react-redux";
import { myStyles } from "../utils/myStyles";
import {
  Text,
  View,
  ScrollView,
  Button,
  KeyboardAvoidingView,
} from "react-native";
// import { Container, Tab, Tabs, ScrollableTab, Header } from "native-base";
import RecipeItemInput from "../components/RecipeItemInput";

function mapStateToProps(
  state,
  { category, onChangeItem, onChangeQty, values }
) {
  return {
    category,
    onChangeItem,
    onChangeQty,
    values,
  };
}

class TabRecipe extends Component {
  checkAndAddInputFields = () => {
    const {
      category,
      onChangeItem,
      onChangeQty,
      addInput,
      input,
      values,
    } = this.props;

    const currentCatId = `${category}${input[category].length}`;

    const currentInputFields = values[category][currentCatId];
    if (currentInputFields) {
      if (
        currentInputFields.item !== "" &&
        currentInputFields.quantity !== ""
      ) {
        // add new field
        addInput(
          input[category].length + 1,
          category,
          onChangeItem,
          onChangeQty
        );
      }
    }
  };

  render() {
    const {
      category,
      onChangeItem,
      onChangeQty,
      addInput,
      input,
      values,
    } = this.props;

    // this.checkAndAddInputFields();

    return (
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "position" : "height"}
        // style={myStyles.container}
        keyboardVerticalOffset={64}
      >
        <ScrollView>
          <View style={myStyles.addRecipeContainer}>
            <RecipeItemInput
              id={`${category}0`}
              key={`${category}0`}
              category={category}
              onChangeItem={onChangeItem}
              onChangeQty={onChangeQty}
              values={
                values[category][`${category}0`]
                  ? values[category][`${category}0`]
                  : ""
              }
            />

            {input[category]}
          </View>
          <View style={{alignItems: "center"}}>
            <Button
              title="Add another row"
              onPress={() =>
                addInput(
                  input[category].length + 1,
                  category,
                  onChangeItem,
                  onChangeQty
                )
              }
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

export default connect(mapStateToProps)(TabRecipe);

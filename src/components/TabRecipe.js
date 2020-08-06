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
  state = {
    input: [],
  };

  addInput = (key, category, onChangeItem, onChangeQty) => {
    let input = this.state.input;

    input.push(
      <RecipeItemInput
        key={key}
        id={key}
        category={category}
        onChangeItem={onChangeItem}
        onChangeQty={onChangeQty}
      />
    );
    this.setState({ input: input });
  };

  render() {
    const {
      category,
      // catInput,
      // catInputName,
      onChangeItem,
      onChangeQty,
      // addInput,
    } = this.props;

    // console.log(this.state)

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

          {this.state.input.map((value, index) => {
            return value;
          })}
        </View>
        <Button
          title="+"
          onPress={() =>
            this.addInput(
              this.state.input.length + 1,
              category,
              onChangeItem,
              onChangeQty
            )
          }
        />
      </ScrollView>
      // </Tab>
    );
  }
}

export default connect(mapStateToProps)(TabRecipe);

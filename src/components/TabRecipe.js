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
  state = {
    input: [],
  };

  // addInput = (key, category, onChangeItem, onChangeQty) => {
  //   let input = this.state.input;

  //   input.push(
  //     <RecipeItemInput
  //       key={`${category}${key}`}
  //       id={`${category}${key}`}
  //       category={category}
  //       onChangeItem={onChangeItem}
  //       onChangeQty={onChangeQty}
  //     />
  //   );
  //   this.setState({ input: input });
  // };

  render() {
    const {
      category,
      onChangeItem,
      onChangeQty,
      addInput,
      input,
      values,
    } = this.props;
    // const { input } = this.state;

    // console.log(values[category][`${category}0`] ? values[category][`${category}0`] : "nothing")

    // if (input[category].length === 0) {

    //   addInput(0, category, onChangeItem, onChangeQty)
    // }

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

            {/* {input[category] && input[category].map((value) => {
            return value;
          })} */}
            {input[category]}
          </View>
          <Button
            title="Add another row"
            onPress={() =>
              // this.addInput(input.length + 1, category, onChangeItem, onChangeQty)
              addInput(
                input[category].length + 1,
                category,
                onChangeItem,
                onChangeQty
              )
            }
          />
      </ScrollView>
        </KeyboardAvoidingView>
    );
  }
}

export default connect(mapStateToProps)(TabRecipe);

import React, { Component } from "react";
import { connect } from "react-redux";
import { myStyles } from "../utils/myStyles";
import { Text, View, ScrollView, Button } from "react-native";
// import { Container, Tab, Tabs, ScrollableTab, Header } from "native-base";
import RecipeItemInput from "../components/RecipeItemInput";

function mapStateToProps(
  state,
  { category, onChangeItem, onChangeQty, onChangeUnit, update }
) {
  return {
    category,
    onChangeItem,
    onChangeQty,
    onChangeUnit,
    update,
  };
}

class TabRecipe extends Component {
  state = {
    input: [],
  };

  addInput = (key, category, onChangeItem, onChangeQty, onChangeUnit) => {
    let input = this.state.input;

    input.push(
      <RecipeItemInput
        key={`${category}${key}`}
        id={`${category}${key}`}
        category={category}
        onChangeItem={onChangeItem}
        onChangeQty={onChangeQty}
        onChangeUnit={onChangeUnit}
      />
    );
    this.setState({ input: input });
  };

  render() {
    const { category, onChangeItem, onChangeQty, onChangeUnit, update } = this.props;
    const { input } = this.state;

    if (update) {
      this.setState({
        input: [],
      });
    }

    return (
      <ScrollView>
        <View style={myStyles.addRecipeContainer}>
          <RecipeItemInput
            id={`${category}0`}
            key={`${category}0`}
            category={category}
            onChangeItem={onChangeItem}
            onChangeQty={onChangeQty}
            onChangeUnit={onChangeUnit}
            update={update}
          />

          {input.map((value) => {
            return value;
          })}
        </View>
        <Button
          title="Add another row"
          onPress={() =>
            this.addInput(input.length + 1, category, onChangeItem, onChangeQty, onChangeUnit)
          }
        />
      </ScrollView>
    );
  }
}

export default connect(mapStateToProps)(TabRecipe);

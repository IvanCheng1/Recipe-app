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
import TabRecipe from "../components/TabRecipe";

function mapStateToProps(state) {
  return {};
}

class AddRecipePage extends Component {
  state = {
    title: "",
    notes: "",
    course: "",
    Spice: {},
    // spiceInput: [],
    Vegetables: {},
    // vegInput: [],
  };

  onChangeItem = (input, key, category) => {
    this.setState((prev) => ({
      [category]: {
        ...prev[category],
        [key]: {
          item: input,
          quantity: prev[category][key] ? prev[category][key].quantity : "",
        },
      },
    }));
  };

  onChangeQty = (input, key, category) => {
    this.setState((prev) => ({
      [category]: {
        ...prev[category],
        [key]: {
          quantity: input,
          item: prev[category][key] ? prev[category][key].item : "",
        },
      },
    }));
  };

  addInput = (key, category, catInput) => {
    let input = this.state[catInput];

    input.push(
      <RecipeItemInput
        key={key}
        id={key}
        category={category}
        onChangeItem={this.onChangeItem}
        onChangeQty={this.onChangeQty}
      />
    );
    this.setState({ [catInput]: input });
  };

  render() {
    const { title, notes, course } = this.state;
    console.log("------------------------\n", this.state);

    return (
      <Container style={myStyles.container}>
        {/* <Header hasTabs /> */}
        <Tabs>
          <Tab heading="Details">
            <ScrollView>
              <View style={myStyles.addRecipeContainer}>
                {/* <Text style={myStyles.title}>Title</Text> */}
                <TextInput
                  // value={input}
                  style={myStyles.input}
                  placeholder="Title"
                  onChangeText={(input) => this.setState({ title: input })}
                />
                <TextInput
                  // value={input}
                  style={myStyles.input}
                  placeholder="Course"
                  onChangeText={(input) => this.setState({ course: input })}
                />
                <TextInput
                  // value={input}
                  style={myStyles.input}
                  placeholder="Notes"
                  onChangeText={(input) => this.setState({ notes: input })}
                />
              </View>
            </ScrollView>
          </Tab>
          <Tab heading="Spices">
            <TabRecipe
              category={"Spice"}
              catInput={this.state.spiceInput}
              onChangeItem={this.onChangeItem}
              onChangeQty={this.onChangeQty}
              addInput={this.addInput}
              catInputName={"spiceInput"}
            />
          </Tab>

          {/* <Tab heading="Spices">
            <ScrollView>
              <View style={myStyles.addRecipeContainer}>
                <RecipeItemInput
                  id={0}
                  category={"Spice"}
                  onChangeItem={this.onChangeItem}
                  onChangeQty={this.onChangeQty}
                />

                {this.state.spiceInput.map((value, index) => {
                  return value;
                })}
              </View>
              <Button
                title="+"
                onPress={() =>
                  this.addInput(
                    this.state.spiceInput.length + 1,
                    "Spice",
                    "spiceInput"
                  )
                }
              />
            </ScrollView>
          </Tab> */}
          {/* <Tab heading="Vegetables">
            <ScrollView>
              <View style={myStyles.addRecipeContainer}>
                <RecipeItemInput
                  id={0}
                  category={"Vegetables"}
                  onChangeItem={this.onChangeItem}
                  onChangeQty={this.onChangeQty}
                />

                {this.state.vegInput.map((value, index) => {
                  return value;
                })}
              </View>
              <Button
                title="+"
                onPress={() =>
                  this.addInput(
                    this.state.vegInput.length + 1,
                    "Vegetables",
                    "vegInput"
                  )
                }
              />
            </ScrollView>
          </Tab> */}
        </Tabs>
        <TouchableOpacity onPress={() => alert("yay")} title="Add Recipe" />
        <TouchableOpacity
          style={[myStyles.btn, myStyles.btnDark]}
          onPress={() =>
            console.log(
              "---------------------\n------ Submit ------\n",
              this.state
            )
          }
          // disabled={
          //   title === "" || notes === "" || course === "" ? true : false
          // }
        >
          <Text style={myStyles.btnText}>Submit</Text>
        </TouchableOpacity>
      </Container>
    );
  }
}

export default connect(mapStateToProps)(AddRecipePage);

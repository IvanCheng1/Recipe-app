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

function mapStateToProps(state) {
  return {};
}

class AddRecipePage extends Component {
  state = {
    title: "",
    notes: "",
    course: "",
    spiceInput: [],
    Spice: {},
  };

  onChangeItem = (input, key, category) => {
    this.setState((prev) => ({
      [category]: {
        ...prev[category],
        [key]: [
          {
            item: input,
            quantity: prev[category][key]
              ? prev[category][key][0].quantity
              : "",
          },
        ],
      },
    }));
  };

  onChangeQty = (input, key, category) => {
    this.setState((prev) => ({
      [category]: {
        ...prev[category],
        [key]: [
          {
            quantity: input,
            item: prev[category][key] ? prev[category][key][0].item : "",
          },
        ],
      },
    }));
  };

  addSpiceInput = (key) => {
    const category = "Spice";
    let spiceInput = this.state.spiceInput;
    // spiceInput.push(
    //   <View key={key} style={[myStyles.box, myStyles.inputRecipeGroup]}>
    //     <TextInput
    //       // value={input}
    //       style={myStyles.inputItemLeft}
    //       placeholder="Curry powder..."
    //       onChangeText={(input) => this.onChangeItem(input, key, category)}
    //     />
    //     <TextInput
    //       // value={'input'}
    //       style={myStyles.inputQuantityRight}
    //       placeholder="2 tsbp"
    //       onChangeText={(input) => this.onChangeQty(input, key, category)}
    //     />
    //   </View>
    // );
    spiceInput.push(
      <RecipeItemInput
        key={key}
        id={key}
        category={category}
        onChangeItem={this.onChangeItem}
        onChangeQty={this.onChangeQty}
      />
    );
    this.setState({ spiceInput });
  };

  render() {
    // const { input } = this.state;
    // console.log("------------------------\n", this.state.Spice);

    return (
      <Container style={myStyles.container}>
        {/* <Header hasTabs /> */}
        <Tabs>
          <Tab heading="Spices">
            <ScrollView>
              <View style={myStyles.container}>
                <RecipeItemInput
                  id={0}
                  category={"Spice"}
                  onChangeItem={this.onChangeItem}
                  onChangeQty={this.onChangeQty}
                />

                {/* <View key={'0'} style={[myStyles.box, myStyles.inputRecipeGroup]}>
                  <TextInput
                    // value={input}
                    style={myStyles.inputItemLeft}
                    placeholder="Curry powder..."
                    onChangeText={(input) =>
                      this.setState((prev) => ({
                        Spice: {
                          ...prev.Spice,
                          '0': [
                            {
                              item: input,
                              quantity: prev.Spice['0'] ? prev.Spice['0'][0].quantity : ""
                            },
                          ],
                        },
                      }))
                    }
                  />
                  <TextInput
                    // value={'input'}
                    style={myStyles.inputQuantityRight}
                    placeholder="2 tsbp"
                    onChangeText={(input) =>
                      this.setState((prev) => ({
                        Spice: {
                          ...prev.Spice,
                          '0': [
                            {
                              quantity: input,
                              item: prev.Spice['0'] ? prev.Spice['0'][0].item : ""
                            },
                          ],
                        },
                      }))
                    }
                  />
                </View> */}

                {this.state.spiceInput.map((value, index) => {
                  return value;
                })}
              </View>
              <Button
                title="+"
                onPress={() =>
                  this.addSpiceInput(this.state.spiceInput.length + 1)
                }
              />
            </ScrollView>
          </Tab>
          <Tab heading="Details">
            <ScrollView>
              <View style={myStyles.container}>
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
        </Tabs>
        <TouchableOpacity
          onPress={() => alert("yay")}
          // disabled={question === "" || answer === "" ? true : false}
          title="Add Recipe"
        />
        <TouchableOpacity
          style={[myStyles.btn, myStyles.btnDark]}
          onPress={() =>
            console.log("---------------------\n", this.state.Spice)
          }
        >
          <Text style={myStyles.btnText}>Submit</Text>
        </TouchableOpacity>
      </Container>
    );
  }
}

export default connect(mapStateToProps)(AddRecipePage);

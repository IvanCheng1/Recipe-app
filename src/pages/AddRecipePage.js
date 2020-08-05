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

function mapStateToProps(state) {
  return {};
}

class AddRecipePage extends Component {
  state = {
    // title: "",
  };
  render() {
    // const { input } = this.state;
    console.log(this.state);

    return (
      <Container style={myStyles.container}>
        {/* <Header hasTabs /> */}
        <Tabs>
          <Tab heading="Spices">
            <ScrollView>
              <View style={myStyles.container}>
                {/* <Text style={myStyles.title}>Title</Text> */}
                <View style={[myStyles.box, myStyles.inputRecipeGroup]}>
                  <TextInput
                    // value={'input'}
                    style={myStyles.inputQuantityLeft}
                    placeholder="2 tsbp"
                    onChangeText={(input) => this.setState({ quantity: input })}
                    editable={true}
                  />
                  <TextInput
                    // value={input}
                    style={myStyles.inputItemRight}
                    placeholder="Curry powder..."
                    onChangeText={(input) => this.setState({ spice: input })}
                  />
                </View>
              </View>
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
          onPress={() => alert("yay")}
        >
          <Text style={myStyles.btnText}>Submit</Text>
        </TouchableOpacity>
      </Container>
    );
  }
}

export default connect(mapStateToProps)(AddRecipePage);

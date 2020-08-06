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
import TabRecipe from "../components/TabRecipe";
import { handleCreateRecipes } from "../actions/recipes";

function mapStateToProps(state) {
  return {};
}

class AddRecipePage extends Component {
  state = {
    title: "",
    notes: "",
    course: "",
    Spice: {},
    Vegetables: {},
    Colds: {},
    Frozen: {},
    Dry: {},
    Other: {},
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

  onSubmit = () => {
    // alert("Saving Recipe");

    // const recipeId = this.state.title.replace(/\s+/g, "");

    const recipe = {
      title: "Chicken Curry",
      course: "main",
      ingredients: {
        Spices: [
          {
            item: "curry powder",
            quantity: "222g",
          },
          {
            item: "pepper",
            quantity: "1 tbsp",
          },
        ],
        Colds: [],
        Vegetables: [
          {
            item: "cauliflower",
            quantity: "222g",
          },
        ],
        Frozen: [],
        Dry: [
          {
            item: "rice",
            quantity: "500g",
          },
          {
            item: "cornflour",
            quantity: "1 tbsp",
          },
        ],
        Other: [],
      },
      notes: "Takes a lot of effort",
      image:
        "https://image.shutterstock.com/z/stock-photo-butter-chicken-curry-murgh-makhani-with-tender-chicken-breast-cream-butter-honey-610126394.jpg",
    };

    const recipeId = recipe.title.replace(/\s+/g, "");

    // add recipe
    this.props.dispatch(handleCreateRecipes(recipe, recipeId));

    // set state
    this.setState({
      title: "",
      notes: "",
      course: "",
      Spice: {},
      Vegetables: {},
      Colds: {},
      Frozen: {},
      Dry: {},
      Other: {},
    });

    // go to home
    this.props.navigation.navigate("Home");

    // this.props.navigation.navigate("Recipe Page", {
    //   id: recipeId,
    //   name: recipe.title,
    // });
  };

  render() {
    const { title, notes, course } = this.state;
    // console.log("------------------------\n", this.state);

    return (
      <Container style={myStyles.container}>
        {/* <Header hasTabs /> */}
        <Tabs renderTabBar={() => <ScrollableTab />}>
          <Tab heading="Details">
            <ScrollView>
              <View style={myStyles.addRecipeContainer}>
                {/* <Text style={myStyles.title}>Title</Text> */}
                <TextInput
                  value={this.state.title}
                  style={myStyles.input}
                  placeholder="Title"
                  onChangeText={(input) => this.setState({ title: input })}
                />
                <TextInput
                  value={this.state.course}
                  style={myStyles.input}
                  placeholder="Course"
                  onChangeText={(input) => this.setState({ course: input })}
                />
                <TextInput
                  value={this.state.notes}
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
              onChangeItem={this.onChangeItem}
              onChangeQty={this.onChangeQty}
            />
          </Tab>
          <Tab heading="Vegetables">
            <TabRecipe
              category={"Vegetables"}
              onChangeItem={this.onChangeItem}
              onChangeQty={this.onChangeQty}
            />
          </Tab>
          <Tab heading="Colds">
            <TabRecipe
              category={"Colds"}
              onChangeItem={this.onChangeItem}
              onChangeQty={this.onChangeQty}
            />
          </Tab>
          <Tab heading="Frozen">
            <TabRecipe
              category={"Frozen"}
              onChangeItem={this.onChangeItem}
              onChangeQty={this.onChangeQty}
            />
          </Tab>
          <Tab heading="Dry">
            <TabRecipe
              category={"Dry"}
              onChangeItem={this.onChangeItem}
              onChangeQty={this.onChangeQty}
            />
          </Tab>
          <Tab heading="Other">
            <TabRecipe
              category={"Other"}
              onChangeItem={this.onChangeItem}
              onChangeQty={this.onChangeQty}
            />
          </Tab>
        </Tabs>
        <TouchableOpacity
          style={[myStyles.btn, myStyles.btnDark]}
          onPress={() => this.onSubmit()}
          // disabled={
          //   title === "" || notes === "" || course === "" ? true : false
          // }
        >
          <Text style={myStyles.btnText}>Save Recipe</Text>
        </TouchableOpacity>
      </Container>
    );
  }
}

export default connect(mapStateToProps)(AddRecipePage);

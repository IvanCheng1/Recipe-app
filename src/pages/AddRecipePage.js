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
  Image,
} from "react-native";
import { Container, Tab, Tabs, ScrollableTab, Header } from "native-base";
import TabRecipe from "../components/TabRecipe";
import { handleCreateRecipes } from "../actions/recipes";
import * as ImagePicker from "expo-image-picker";
import Constants from "expo-constants";
import * as Permissions from "expo-permissions";
import RecipeItemInput from "../components/RecipeItemInput";

function mapStateToProps(state) {
  return {};
}

class AddRecipePage extends Component {
  state = {
    title: "",
    notes: "",
    course: "",
    ingredients: {
      Spices: {},
      Vegetables: {},
      Colds: {},
      Frozen: {},
      Dry: {},
      Other: {},
    },
    input: {
      Spices: [],
      Vegetables: [],
      Colds: [],
      Frozen: [],
      Dry: [],
      Other: [],
    },
    image: null,
    update: false,
  };

  componentDidMount() {
    this.getPermissionAsync();
  }

  onChangeItem = (input, key, category) => {
    this.setState((prev) => ({
      ingredients: {
        ...prev.ingredients,
        [category]: {
          ...prev.ingredients[category],
          [key]: {
            item: input,
            quantity: prev.ingredients[category][key]
              ? prev.ingredients[category][key].quantity
              : "",
            unit: prev.ingredients[category][key]
              ? prev.ingredients[category][key].unit
              : "",
          },
        },
      },
    }));
  };

  onChangeQty = (input, key, category) => {
    this.setState((prev) => ({
      ingredients: {
        ...prev.ingredients,
        [category]: {
          ...prev.ingredients[category],
          [key]: {
            quantity: input,
            item: prev.ingredients[category][key]
              ? prev.ingredients[category][key].item
              : "",
            unit: prev.ingredients[category][key]
              ? prev.ingredients[category][key].unit
              : "",
          },
        },
      },
    }));
  };

  onChangeUnit = (input, key, category) => {
    this.setState((prev) => ({
      ingredients: {
        ...prev.ingredients,
        [category]: {
          ...prev.ingredients[category],
          [key]: {
            unit: input,
            item: prev.ingredients[category][key]
              ? prev.ingredients[category][key].item
              : "",
            quantity: prev.ingredients[category][key]
              ? prev.ingredients[category][key].quantity
              : "",
          },
        },
      },
    }));
  };

  addInput = (
    key,
    category,
    inputFields,
    onChangeItem,
    onChangeQty,
    onChangeUnit
  ) => {
    inputFields.push(
      <RecipeItemInput
        key={`${category}${key}`}
        id={`${category}${key}`}
        category={category}
        onChangeItem={onChangeItem}
        onChangeQty={onChangeQty}
        onChangeUnit={onChangeUnit}
      />
    );
    this.setState((prev) => ({
      input: {
        ...prev,
        [category]: inputFields,
      },
    }));
  };

  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
      }
    }
  };

  pickImage = async () => {
    this.getPermissionAsync();

    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });
      if (!result.cancelled) {
        this.setState({ image: result.uri });
      }

      console.log(result);
    } catch (e) {
      console.log(e);
    }
  };

  onSubmit = () => {
    // alert("Saving Recipe");
    const submitRecipe = this.state;

    let recipe = {};
    recipe.title = submitRecipe.title;
    recipe.course = submitRecipe.course;
    recipe.notes = submitRecipe.notes;
    recipe.image = submitRecipe.image;
    recipe.ingredients = submitRecipe.ingredients;

    const recipeId = recipe.title.replace(/\s+/g, "");

    // set state
    this.setState({
      title: "",
      course: "",
      ingredients: {
        Spices: {},
        Vegetables: {},
        Colds: {},
        Frozen: {},
        Dry: {},
        Other: {},
      },
      input: {
        Spices: [],
        Vegetables: [],
        Colds: [],
        Frozen: [],
        Dry: [],
        Other: [],
      },
      notes: "",
      image: null,
    });

    // add recipe
    this.props.dispatch(handleCreateRecipes(recipe, recipeId));

    // this.props.navigation.navigate("Recipe Page", {
    //   id: recipeId,
    //   name: recipe.title,
    // });
  };

  render() {
    const { title, notes, course } = this.state;
    // console.log("------------------------\n", this.state);
    const { image } = this.state;
    const defaultCategories = [
      "Spices",
      "Vegetables",
      "Colds",
      "Frozen",
      "Dry",
      "Other",
    ];
    const renderTabs = [];

    for (const category of defaultCategories) {
      renderTabs.push(
        <Tab heading={category} key={category}>
          <TabRecipe
            category={category}
            onChangeItem={this.onChangeItem}
            onChangeQty={this.onChangeQty}
            onChangeUnit={this.onChangeUnit}
          />
        </Tab>
      );
    }

    return (
      <Container style={myStyles.container}>
        {/* <Header hasTabs /> */}
        <Tabs renderTabBar={() => <ScrollableTab />} initialPage={0}>
          <Tab heading="Details">
            <ScrollView>
              <View style={myStyles.addRecipeContainer}>
                {/* <Text style={myStyles.title}>Title</Text> */}
                <TouchableOpacity
                  onPress={this.pickImage}
                  style={{ marginBottom: 20 }}
                >
                  {image ? (
                    <Image style={myStyles.img} source={{ uri: image }} />
                  ) : (
                    <View style={myStyles.imgPlaceHolder}>
                      <Text>Choose Image</Text>
                    </View>
                  )}
                </TouchableOpacity>
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
          {renderTabs}
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

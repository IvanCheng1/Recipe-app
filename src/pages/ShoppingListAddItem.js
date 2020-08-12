import React, { Component } from "react";
import { connect } from "react-redux";
import { myStyles } from "../utils/myStyles";
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { handleAddItemShopping } from "../actions/shoppingList";
// import { Picker } from "@react-native-community/picker";
// import RNPickerSelect from "react-native-picker-select";

function mapStateToProps(state) {
  return {};
}

class ShoppingListAddItem extends Component {
  state = {
    item: "",
    quantity: "",
    category: "",
  };

  onSubmit = () => {
    const { item, quantity, category } = this.state;
    this.props.dispatch(handleAddItemShopping(item, quantity, category));

    this.setState({
      item: "",
      quantiti: "",
      category: "",
    });

    this.props.navigation.navigate("Shopping List");
  };

  render() {
    const categories = [
      {
        label: "Spices",
        value: "Spices",
      },
      {
        label: "Vegetables",
        value: "Vegetables",
      },
      {
        label: "Colds",
        value: "Colds",
      },
      {
        label: "Frozen",
        value: "Frozen",
      },
      {
        label: "Dry",
        value: "Dry",
      },
      {
        label: "Other",
        value: "Other",
      },
    ];

    return (
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={myStyles.container}
      >
        <View style={myStyles.container}>
          <View style={myStyles.inputRecipeGroup}>
            <TextInput
              style={myStyles.inputItemLeft}
              placeholder="Item..."
              onChangeText={(input) => this.setState({ item: input })}
            />
            <TextInput
              style={myStyles.inputQuantityRight}
              placeholder="Qty"
              onChangeText={(input) => this.setState({ quantity: input })}
            />
          </View>
          <DropDownPicker
            items={categories}
            placeholder="Select a category"
            containerStyle={{ height: 50, width: 250 }}
            style={{ backgroundColor: "#fafafa" }}
            dropDownStyle={{ backgroundColor: "#fafafa", height: 200 }}
            onChangeItem={(item) =>
              this.setState({
                category: item.value,
              })
            }
          />
          <TouchableOpacity
            style={[
              myStyles.btn,
              myStyles.btnDark,
              this.state.item === "" ||
              this.state.quantity === "" ||
              this.state.category === ""
                ? myStyles.btnDisabled
                : "",
            ]}
            onPress={() => this.onSubmit()}
            disabled={
              this.state.item === "" ||
              this.state.quantity === "" ||
              this.state.category === ""
                ? true
                : false
            }
          >
            <Text style={myStyles.btnText}>Add item</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

export default connect(mapStateToProps)(ShoppingListAddItem);

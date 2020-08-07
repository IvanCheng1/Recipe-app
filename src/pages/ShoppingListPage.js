import React, { Component } from "react";
import { connect } from "react-redux";
import { myStyles } from "../utils/myStyles";
import { Text, View, TouchableOpacity } from "react-native";
// import { CheckBox } from "react-native-elements";
// import CheckBox from "react-native-check-box";
import { Feather } from "@expo/vector-icons";

import {
  Container,
  Header,
  Content,
  ListItem,
  CheckBox,
  Body,
  Fab,
  Icon,
} from "native-base";
import { ReactiveList } from "@appbaseio/reactivesearch-native";
import { capitaliseWord } from "../utils/helpers";
import { ScrollView } from "react-native-gesture-handler";

function mapStateToProps(state) {
  return {};
}

class ShoppingListPage extends Component {
  state = {
    ingredients: {},
  };

  componentDidMount() {
    this.setState({
      ingredients: {
        Spices: {
          Spices0: {
            item: "curry powder",
            quantity: "222g",
          },
          Spices1: {
            item: "pepper",
            quantity: "1 tbsp",
          },
          Spices2: {
            item: "a",
            quantity: "3",
          },
        },
        Colds: {},
        Vegetables: {
          Vegetables0: {
            item: "cauliflower",
            quantity: "222g",
          },
        },
      },
    });
  }

  toggleCheck = (category, itemId) => {
    this.setState((prev) => ({
      ingredients: {
        ...prev.ingredients,
        [category]: {
          ...prev.ingredients[category],
          [itemId]: {
            ...prev.ingredients[category][itemId],
            checked: prev.ingredients[category][itemId].checked
              ? !prev.ingredients[category][itemId].checked
              : true,
          },
        },
      },
    }));
  };

  onDelete = (category, itemId) => {
    let prevStateIngredients = this.state.ingredients;
    delete prevStateIngredients[category][itemId];

    this.setState({
      ingredients: prevStateIngredients,
    });
  };

  render() {
    const { ingredients } = this.state;

    let shoppingList = [];

    // console.log(ingredients)

    for (const [category, list] of Object.entries(ingredients).sort()) {
      if (Object.keys(list).length === 0) {
        continue;
      }

      shoppingList.push(
        <Text key={category} style={myStyles.shoppingListSectionTitle}>
          {category}
        </Text>
      );

      for (const [itemId, details] of Object.entries(list).sort(
        ([aKey, a], [bKey, b]) => {
          if (a.checked === true && b.checked === true) {
            return a.item < b.item ? -1 : 1;
          } else if (a.checked !== true && b.checked !== true) {
            return a.item < b.item ? -1 : 1;
          } else if (a.checked === true && b.checked !== true) {
            return 1;
          } else {
            return -1;
          }
        }
      )) {
        shoppingList.push(
          <ListItem key={itemId} style={myStyles.shoppingListItem}>
            <CheckBox
              style={myStyles.checkBox}
              // key={`${itemId}-checkBox`}
              checked={details.checked}
              onPress={() => this.toggleCheck(category, itemId)}
            />
            <Text
              style={[
                myStyles.shoppingItemDescription,
                details.checked && myStyles.shoppingItemDescriptionCrossed,
              ]}
            >
              {details.quantity} {capitaliseWord(details.item)}
            </Text>
            <TouchableOpacity
              style={myStyles.shoppingListBin}
              // key={`${itemId}-trash`}
              onPress={() => this.onDelete(category, itemId)}
            >
              <Feather name="trash-2" size={24} color="lightgrey" />
            </TouchableOpacity>
          </ListItem>
        );
      }
    }

    return (
      <View style={myStyles.containerNonCenter}>
        <ScrollView>
          <View>{shoppingList}</View>
        </ScrollView>
        <Fab
          direction="up"
          containerStyle={{}}
          style={{ backgroundColor: "#f4511e" }}
          position="bottomRight"
          onPress={() => alert("Feature coming")}
        >
          <Icon name="add" />
        </Fab>
      </View>
    );
  }
}

export default connect(mapStateToProps)(ShoppingListPage);

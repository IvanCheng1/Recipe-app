import React, { Component } from "react";
import { connect } from "react-redux";
import { myStyles } from "../utils/myStyles";
import { Text, View, TouchableOpacity, Alert, Button } from "react-native";
import { Feather } from "@expo/vector-icons";
import { ListItem, CheckBox, Fab, Icon } from "native-base";
import { capitaliseWord } from "../utils/helpers";
import { ScrollView } from "react-native-gesture-handler";
import {
  handleGetShopping,
  handleToggleCheckShopping,
  handleDeleteShoppingListItem,
  handleClearShoppingList,
} from "../actions/shoppingList";

function mapStateToProps({ shoppingList }) {
  return {
    shoppingList,
  };
}

class ShoppingListPage extends Component {
  componentDidMount() {
    this.props.dispatch(handleGetShopping());
  }

  toggleCheck = (category, itemId) => {
    this.props.dispatch(handleToggleCheckShopping(category, itemId));
  };

  onDelete = (category, itemId) => {
    this.props.dispatch(handleDeleteShoppingListItem(category, itemId));
  };

  onClickAddItem = () => {
    this.props.navigation.navigate("Add Item");
  };

  clearAll = () => {
    Alert.alert(
      "Clear All",
      "Are you sure you want to clear all?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Ok",
          onPress: () => this.props.dispatch(handleClearShoppingList()),
        },
      ],
      { cancelable: false }
    );
  };

  render() {
    const ingredients = this.props.shoppingList;
    let shoppingList = [];

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
            <View style={myStyles.shoppingItemDescription}>
              <Text
                style={
                  details.checked && myStyles.shoppingItemDescriptionCrossed
                }
              >
                {capitaliseWord(details.item)} - {details.quantity}
              </Text>
              {details.for && (
                <Text
                  style={[
                    myStyles.shoppingItemDescriptionFor,
                    details.checked && myStyles.shoppingItemDescriptionCrossed,
                  ]}
                >
                  {details.for}
                </Text>
              )}
            </View>
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
        {shoppingList.length === 0 ? (
          <View style={myStyles.container}>
            <Text>Shopping List is Empty!</Text>
            <Text>Go and add items from the recipe page.</Text>
          </View>
        ) : (
          <ScrollView>
            <View>{shoppingList}</View>
            <View style={{ alignItems: "center", margin: 20 }}>
              <Button
                title="Clear All"
                onPress={() => this.clearAll()}
              />
               
            </View>
          </ScrollView>
        )}
        <Fab
          direction="up"
          containerStyle={{}}
          style={{ backgroundColor: "#f4511e" }}
          position="bottomRight"
          onPress={() => this.onClickAddItem()}
        >
          <Icon name="add" />
        </Fab>
      </View>
    );
  }
}

export default connect(mapStateToProps)(ShoppingListPage);

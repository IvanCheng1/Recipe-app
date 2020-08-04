import React, { Component } from 'react';
import { connect } from 'react-redux';
import { myStyles } from '../utils/myStyles';
import { Text, View } from "react-native";

function mapStateToProps(state) {
  return {

  };
}

class ShoppingListTab extends Component {
  render() {
    return (
      <View style={myStyles.container}>
        <Text>Shopping List</Text>
      </View>
    );
  }
}

export default connect(
  mapStateToProps,
)(ShoppingListTab);
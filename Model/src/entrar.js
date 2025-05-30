import React, { Component } from "react";
import { StyleSheet, Text, View, Button, Modal } from "react-native";

export default class App extends Component {


  render() {
    return (

          <View style={styles.modal}>
            <Text style={{ color: "#fff", fontSize: 28 }}>Seja bem vindo</Text>
            <Button title="Sair" onPress={this.props.fechar}></Button>
          </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {

  modal: {
    backgroundColor: '#292929',
    //flex: 1,
    width:'100%',
    height: 340,
    borderRadius:15,
  }
}
});
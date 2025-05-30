import React, { Component } from "react";
import { StyleSheet, Text, View, Button, Modal } from "react-native";
import Entrar from "./src/entrar";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visibleModal: false,
    };
    this.entrar = this.entrar.bind(this);
  }

  entrar() {
    this.setState({ visibleModal: true });
  }

  sair(visible) {
    this.setState({ visibleModal: visible });
  }

  render() {
    return (
      <View style={styles.container}>
        <Button title="Entrar" onPress={this.entrar}></Button>

        <Modal
          visible={this.state.visibleModal}
          animationType="slide"
          transparent={true}
        >
          <View style={styles.viewModal}>
            <Calcular resultado={this.state.resultado} />
            <TouchableOpacity
              onPress={() => this.voltar(false)}
              style={{
                backgroundColor: "#fff",
                marginTop: 20,
                padding: 10,
                borderRadius: 10,
              }}
            >
              <Text style={{ fontWeight: "bold" }}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </Modal>

        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  viewModal: {
    margin: 15,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
    borderRadius: 15,
  },
});

import React, { Component } from "react";
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import Calcular from "./src/calcular";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gasolina: "",
      alcool: "",
      resultado: "",
      visibleModal: false,
    };
    this.calcular = this.calcular.bind(this);
  }

calcular = () => {
  const { alcool, gasolina } = this.state;
  const a = parseFloat(alcool.replace(",", "."));
  const g = parseFloat(gasolina.replace(",", "."));
  const melhor = a / g < 0.7 ? "Álcool" : "Gasolina";

  this.setState({ resultado: melhor, visibleModal: true });
};
  fecharModal = () => {
    this.setState({visibleModal: false});
  };

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require("./src/imagem/bomba_gasolina_icon.png")}
          style={styles.imagem}
        />

        <View style={styles.retangulo}>
          <Text style={styles.Titulo}>Álcool ou Gasolina?</Text>

          <Text style={styles.label}>Preço do Álcool: </Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder="Ex: 4.50"
            onChangeText={(text) => this.setState({ alcool: text })}
          />

          <Text style={styles.label}>Preço da Gasolina: </Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder="Ex: 4.50"
            onChangeText={(text) => this.setState({ gasolina: text })}
          />

          <TouchableOpacity onPress={this.calcular} style={styles.botao}>
            <Text style={styles.textoBotao}>Calcular</Text>
          </TouchableOpacity>
        </View>

        <Calcular
          visible={this.state.visibleModal}
          resultado={this.state.resultado}
          onClose={this.fecharModal}
        ></Calcular>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2E7D32",
  },

  header: {
    padding: 30,
  },

  retangulo: {
    backgroundColor: "#439F3A",
    padding: 20,
    borderRadius: 20,
    width: 360,
    alignItems: "center",
  },

  Titulo: {
    marginTop: 5,
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
  },

  imagem: {
    width: 150,
    height: 150,
    marginBottom: 25,
  },

  label: {
    color: "#fff",
    fontWeight: "bold",
    marginTop: 20,
    alignSelf: "flex-start",
  },

  input: {
    backgroundColor: "#fff",
    padding: 8,
    borderRadius: 20,
    marginTop: 10,
    width: 300,
    alignSelf: "flex-start",
  },

  botao: {
    marginTop: 30,
    backgroundColor: "#BAFF9A",
    width: 120,
    height: 33,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },

  textoBotao: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

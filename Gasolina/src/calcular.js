import React, { Component } from "react";
import { Modal, View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

export default class App extends Component {
  render() {



    const {visible, resultado, onClose} = this.props;
    return (
      <Modal
        visible={visible}
        animationType="slide"
        transparent={true}
      >
        <View style={styles.backdrop}>
          <View style={styles.modalBox}>
            <Image
              source={require("./imagem/bomba_gasolina_icon3.png")}
              style={styles.imagem}
            />
            <Text style={styles.titulo}>Resultado</Text>
            <Text style={styles.texto}>
              Compensa usar:{" "}
              <Text style={{ fontWeight: "bold" }}>{resultado}</Text>
            </Text>

            <TouchableOpacity onPress={onClose} style={styles.botao}>
              <Text style={styles.textoBotao}>Voltar a calcular</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: "#2E7D32",
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBox: {
    backgroundColor: "#439F3A",
    width: 300,
    padding: 20,
    borderRadius: 20,
    alignItems: 'center',
  },
  imagem: {
    width: 110,
    height: 110,
    marginBottom: 15,
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'darkred',
    marginBottom: 10,
  },
  texto: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  botao: {
    backgroundColor: '#BAFF9A',
    width: 140,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  textoBotao: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
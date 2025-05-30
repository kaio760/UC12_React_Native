import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

class Lista extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: this.props.data,
      //this.state.feed.descricao
    };
    this.like = this.like.bind(this);
    this.carregaIcone = this.carregaIcone.bind(this);
    this.mostrarLikes = this.mostrarLikes.bind(this);
  }
  carregaIcone(likeada) {
    return likeada ? require("../img/likeada.png") : require("../img/like.png");
  }

  like() {
    let curtir = this.state.feed;

    if (curtir.likeada === true) {
      this.setState({
        feed: {
          ...curtir,
          likeada: false,
          likers: curtir.likers - 1,
        },
      });
    } else {
      this.setState({
        feed: {
          ...curtir,
          likeada: true,
          likers: curtir.likers + 1,
        },
      });
    }
  }

  mostrarLikes() {
    let feed = this.state.feed;

    if (feed.likers <= 0) {
      return;
    }
    return (
      <Text style={styles.likes}>
        {feed.likers} {feed.likers > 1 ? "Curtidas" : "Curtida"}
      </Text>
    );
  }

  render() {
    return (
      <View style={styles.areaFeed}>
        <View style={styles.viewPerfil}>
          <Image
            style={styles.fotoPerfil}
            source={{ uri: this.state.feed.imgperfil }}
          ></Image>

          <Text style={styles.nomePerfil}>{this.state.feed.nome}</Text>
        </View>

        <Image
          style={styles.fotoPublicacao}
          source={{ uri: this.state.feed.imgPublicacao }}
          resizeMode="cover"
        ></Image>

        <View style={styles.areaBtn}>
          <TouchableOpacity onPress={this.like}>
            <Image
              style={styles.iconeLike}
              source={this.carregaIcone(this.state.feed.likeada)}
            ></Image>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnsend}>
            <Image
              style={styles.iconeLike}
              source={require("../img/send.png")}
            ></Image>
          </TouchableOpacity>
        </View>

        {this.mostrarLikes(this.state.feed.likers)}

        <View style={styles.viewRodape}>
          <Text style={styles.nomeRodape}>{this.state.feed.nome} </Text>
          <Text style={styles.descricaoRodape}>
            {this.state.feed.descricao}{" "}
          </Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  areaFeed: {},
  viewPerfil: {},
  fotoPerfil: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },

  viewPerfil: {
    flex: 1,
    flexDirection: "row",
    padding: 8,
    alignItems: "center",
  },
  nomePerfil: {
    textAlign: "left",
    marginLeft: 8,
  },
  fotoPublicacao: {
    flex: 1,
    height: 400,
    alignItems: "center",
  },

  areaBtn: {
    flex: 1,
    flexDirection: "row",
    width: 400,
    height: 30,
    padding: 2,
    backgroundColor: "FFF1",
    justifyContent: "left",
  },
  iconeLike: {
    margin: 1,
    width: 25,
    height: 25,
  },

  btnsend: {},

  viewRodape: {
    flexDirection: "row",
    alignItems: "center",
  },
  nomeRodape: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#000",
    paddingLeft: 4,
  },
  descricaoRodape: {
    paddingLeft: 5,
    fontSize: 15,
    color: "#000",
  },
  likes: {
    fontWeight: "bold",
    marginLeft: 10,
    fontSize: 16,
  },
});
export default Lista;

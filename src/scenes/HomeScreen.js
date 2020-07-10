import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  Alert,
} from "react-native";
import Header from "../components/Header";

const HomeScreen = () => {
  const [address, setAddress] = useState("");
  const [position, setPosition] = useState({});

  function handleSearch() {
    const urlBase =
      "https://maps.googleapis.com/maps/api/geocode/json?address=";
    const apiKey = "&key=AIzaSyCwUZdS5HbYDe-Ycb7_vPS10nP4sGs5NPg";

    if (address) {
      var url = urlBase + address.split(" ").join("+") + apiKey;
      fetch(url)
        .then((response) => response.json())
        .then((json) => {
          if (json.status === "OK") {
            setPosition(JSON.stringify(json.results[0].geometry.location));
            Alert.alert(position);
            //TODO: BUSCAR DISTRIBUIDORES PROXIMOS A MIM
            //TODO: ENVIAR ID DOS DISTRIBUIDORES PARA A PROXIMA TELA
          } else {
            Alert.alert(
              "Ops...",
              "Houve um erro ao realizar a pesquisa... Verifique a conexão e tente novamente!"
            );
          }
        })
        .catch(() =>
          Alert.alert(
            "Ops...",
            "Houve um erro ao realizar a pesquisa... Verifique a conexão e tente novamente!"
          )
        );
    } else {
      Alert.alert("Atenção!", "Você esqueceu de digitar o seu endereço.");
    }
  }

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Text style={styles.title}>Hey, onde vamos beber hoje?</Text>
        <TextInput
          placeholder="Digite seu endereço aqui"
          style={styles.inputAddress}
          onChangeText={(addr) => setAddress(addr)}
        />
        <TouchableHighlight
          style={styles.searchButton}
          onPress={() => handleSearch()}
        >
          <Text style={styles.textButton}>Buscar</Text>
        </TouchableHighlight>
        {/** //TODO: ADICIONAR RODAPÉ COM VALOR TOTAL DO CARRINHO */}
      </View>
    </View>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  title: {
    fontSize: 26,
    textAlign: "center",
  },
  inputAddress: {
    backgroundColor: "white",
    borderRadius: 10,
    borderColor: "#0055cc",
    borderWidth: 2,
    width: "100%",
    height: 60,
    padding: 5,
    paddingLeft: 15,
    marginVertical: 10,
  },
  searchButton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    height: 60,
    width: 200,
    borderRadius: 10,
  },
  textButton: {
    fontSize: 26,
    color: "#0055cc",
    fontWeight: "600",
  },
  footer: {
    alignItems: "center",
    justifyContent: "center",
    height: 80,
    backgroundColor: "green",
  },
});

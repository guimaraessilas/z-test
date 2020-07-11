import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  Alert,
  ActivityIndicator,
} from "react-native";
import Header from "../components/Header";
import { useLazyQuery } from "react-apollo";
import gql from "graphql-tag";
import { getLocation } from "../utils/maps-service";

const GET_PLACES = gql`
  query pocSearchMethod(
    $now: DateTime!
    $algorithm: String!
    $lat: String!
    $long: String!
  ) {
    pocSearch(now: $now, algorithm: $algorithm, lat: $lat, long: $long) {
      id
    }
  }
`;

const HomeScreen = ({ navigation }) => {
  const [address, setAddress] = useState("");
  const [loadStore, { called, loading, data }] = useLazyQuery(GET_PLACES);

  function handleSearch() {
    if (address) {
      getLocation(address).then((res) => {
        loadStore({
          variables: {
            algorithm: "NEAREST",
            lat: JSON.parse(res).lat.toString(),
            long: JSON.parse(res).lng.toString(),
            now: new Date().toISOString(),
          },
        });
      });
    } else {
      Alert.alert("Atenção", "Você esqueceu de digitar o seu endereço...");
    }
  }

  if (data) {
    navigation.navigate("Product", { storeData: data.pocSearch });
  }

  return (
    <View style={styles.container}>
      <Header title={"Zé Cachaceiro"} />
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
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator size="small" color="blue" />
          ) : (
            <Text style={styles.textButton}>Buscar</Text>
          )}
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

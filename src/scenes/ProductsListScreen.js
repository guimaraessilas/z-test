import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Header from "../components/Header";

//TODO: RECEBER ID DO DISTRIBUIDOR
//TODO: BUSCAR PRODUTOS VIA GRAPHQL
const ProductListScreen = () => {
  const produtos = [
    { title: "Titulo 1", price: 11.5 },
    { title: "Titulo 2", price: 12.5 },
    { title: "Titulo 3", price: 13.5 },
    { title: "Titulo 4", price: 14.5 },
    { title: "Titulo 5", price: 15.5 },
    { title: "Titulo 6", price: 11.5 },
    { title: "Titulo 7", price: 12.5 },
    { title: "Titulo 8", price: 13.5 },
    { title: "Titulo 9", price: 14.5 },
    { title: "Titulo 10", price: 15.5 },
  ];

  //TODO: BUSCAR CATEGORIAS VIA GRAPHQL
  let categorias = [
    { title: "categoria 1" },
    { title: "categoria 2" },
    { title: "categoria 3" },
  ];
  return (
    <View style={styles.container}>
      <Header />
      {/** //TODO: DESENVOLVER UMA FORMA DE REALIZAR O FILTRO */}
      <View style={styles.searchContainer}>
        {/** //TODO: REALIZAR PESQUISA POR TEXTO E POR FILTRO NO SERVIDOR */}
        <TextInput style={styles.searchInput} placeholder="Pesquisar" />
        {/** //TODO: ADICIONAR ÍCONE PARA FILTRO */}
        {/** //TODO: ADICIONAR ÍCONE PARA PESQUISAR */}
      </View>
      <FlatList
        style={styles.list}
        data={produtos}
        numColumns={2}
        renderItem={({ item }) => Card(item)}
      />
    </View>
  );
};

const Card = (produto) => {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{produto.title}</Text>
      <Text styles={styles.cardPrice}>
        R$
        {produto.price}
      </Text>
      <View style={styles.cardFooter}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <Text>0</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  searchContainer: {
    backgroundColor: "#0088cc",
    width: "100%",
    height: 80,
  },
  searchInput: {
    backgroundColor: "white",
    marginHorizontal: 15,
    borderRadius: 10,
    padding: 10,
  },
  list: {
    backgroundColor: "#BDBDBD",
    flex: 1,
    paddingHorizontal: 5,
  },
  card: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "white",
    marginHorizontal: 2,
    marginVertical: 5,
    height: 160,
    width: Dimensions.get("window").width / 2.1,
    borderRadius: 5,
    padding: 5,
  },
  cardTitle: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    color: "#212121",
  },
  cardPrice: {
    fontSize: 14,
    color: "#757575",
    textAlign: "center",
  },
  cardFooter: {
    flexDirection: "row",
    width: "70%",
    alignItems: "center",
    justifyContent: "space-around",
  },
  button: {
    height: 40,
    width: 40,
    borderRadius: 100,
    backgroundColor: "#757575",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    textAlign: "center",
    fontSize: 30,
    color: "white",
  },
});

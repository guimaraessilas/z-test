import React from "react";
import { View, Text, StyleSheet, TextInput, FlatList } from "react-native";
import Header from "../components/Header";
import { useQuery } from "react-apollo";
import Card from "../components/Card";
import Footer from "../components/Footer";
import { GET_PRODUCTS } from "../utils/queries";

const ProductListScreen = ({ route, navigation }) => {
  const { storeData } = route.params;

  const params = {
    id: storeData[0].id,
    search: "",
    categoryId: null,
  };

  const { loading, error, data } = useQuery(GET_PRODUCTS, {
    variables: params,
  });

  if (loading) {
    return <Text>carregando...</Text>;
  }
  if (error) {
    return <Text>Erro ao buscar os produtos...</Text>;
  }

  return (
    <View style={styles.container}>
      <Header />

      <FlatList
        style={styles.list}
        data={data.poc.products}
        numColumns={2}
        renderItem={({ item }) => <Card product={item} />}
      />

      <Footer />
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
  list: {
    backgroundColor: "#BDBDBD",
    flex: 1,
    paddingHorizontal: 5,
  },
});

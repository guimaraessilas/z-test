import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
} from "react-native";
import { numberToBLR } from "../utils/helper";
import { useDispatch } from "react-redux";
import { remove, add } from "../redux/actions";

const Card = (props) => {
  const CardImage = (props) => {
    const [err, setErr] = useState(false);
    return (
      <Image
        source={{
          uri: err
            ? "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSYg54LY5wKBL_envlsopC2rnb0oAFqMhLO0A&usqp=CAU"
            : props.src,
        }}
        onError={() => setErr(true)}
        style={styles.imageCard}
      />
    );
  };
  const dispatch = useDispatch();
  const [qtd, setQtd] = useState(0);

  const addItem = (price) => {
    dispatch(add(price));
    setQtd(qtd + 1);
  };

  const removeItem = (price) => {
    if (qtd > 0) {
      dispatch(remove(price));
      setQtd(qtd - 1);
    }
  };

  return (
    <View style={styles.card}>
      <CardImage style={styles.imageCard} src={props.product.images[0].url} />
      <Text style={styles.cardTitle}>{props.product.title}</Text>
      <Text styles={styles.cardPrice}>
        {numberToBLR(props.product.productVariants[0].price)}
      </Text>
      <View style={styles.cardFooter}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => removeItem(props.product.productVariants[0].price)}
        >
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <Text>{qtd}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => addItem(props.product.productVariants[0].price)}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
    marginHorizontal: 2,
    marginVertical: 5,
    height: 250,
    width: Dimensions.get("window").width / 2.1,
    borderRadius: 5,
    padding: 5,
  },
  cardTitle: {
    fontSize: 16,
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
  imageCard: {
    flex: 1,
    resizeMode: "contain",
    width: "100%",
    height: 200,
  },
});

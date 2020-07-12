import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { numberToBLR } from "../utils/helper";
import { useSelector } from "react-redux";

const Footer = () => {
  const amount = useSelector((state) => state);
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>Total: {numberToBLR(amount)}</Text>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  footer: {
    height: 70,
    width: "100%",
    backgroundColor: "#0088cc",
    justifyContent: "center",
    alignItems: "center",
  },
  footerText: {
    fontSize: 26,
    textAlign: "center",
    color: "white",
    fontWeight: "700",
  },
});

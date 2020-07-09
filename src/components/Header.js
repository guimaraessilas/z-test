import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const Header = () => {
    return (
    <View style={styles.header}>
        <Text style={styles.headerText}>Zé Cachaceiro</Text>
      </View>
    )
}

export default Header;

const styles = StyleSheet.create({
    header: {
        width: "100%",
        height: 60,
        backgroundColor: "#0088cc",
        alignItems: "center",
        justifyContent: "center",
      },
      headerText: {
        fontSize: 26,
        fontWeight: "700",
        color: "white",
      },
})
/* eslint-disable comma-dangle */
/* eslint-disable quotes */
import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Hello World </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#7159c1",
    justifyContent: "center",
    alignItems: "center"
  },
  texto: {
    fontWeight: "bold",
    color: "#FFF",
    fontSize: 20
  }
});

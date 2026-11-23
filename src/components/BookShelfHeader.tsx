import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";

export default function BookShelfHeader() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>BookShelf</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EE9972",
    padding: 32,
    // Évite le chevauchement avec la barre de navigation du template sur le web
    paddingTop: Platform.OS === "web" ? 100 : 32,
  },
  headerText: {
    fontSize: 30,
    textAlign: "center",
    color: "black",
  },
});

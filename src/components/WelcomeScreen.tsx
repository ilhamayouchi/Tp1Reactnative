import React from "react";
import { ScrollView, Text, StyleSheet } from "react-native";

export default function WelcomeScreen() {
  return (
    <ScrollView
      indicatorStyle="white"
      style={styles.screenContainer}
      contentContainerStyle={styles.contentContainer}
    >
      <Text style={styles.title}>Bienvenue sur BookShelf</Text>
      <Text style={styles.description}>
        BookShelf est votre bibliothèque personnelle : parcourez vos livres,
        suivez vos lectures et découvrez de nouvelles histoires. Organisez vos
        étagères, gardez une trace de ce que vous avez lu et retrouvez en un
        instant vos titres préférés.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: "#333333",
  },
  contentContainer: {
    padding: 32,
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    textAlign: "center",
    color: "#EDEFEE",
    marginBottom: 16,
  },
  description: {
    fontSize: 20,
    lineHeight: 28,
    textAlign: "center",
    color: "#C9CCCB",
  },
});

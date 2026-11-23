import React from "react";
import { View, StyleSheet } from "react-native";

import BookShelfHeader from "../components/BookShelfHeader";
import WelcomeScreen from "../components/WelcomeScreen";
import BookShelfFooter from "../components/BookShelfFooter";

export default function App() {
  return (
    <View style={styles.appContainer}>
      <BookShelfHeader />
      <WelcomeScreen />
      <BookShelfFooter />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: "#333333",
  },
});

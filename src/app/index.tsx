import React from "react";
import { View, StyleSheet } from "react-native";

import AppHeader from "../components/AppHeader";
import AppFooter from "../components/AppFooter";
import AboutScreen from "../components/AboutScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <AppHeader />

      <View style={styles.content}>
        <AboutScreen />
      </View>

      <AppFooter />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#495E57",
  },
  content: {
    flex: 1,
  },
});

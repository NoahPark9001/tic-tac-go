import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/tic-tac-go-logo.png")}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.title}>Tic Tac Go</Text>
      <Text style={styles.subtitle}>Choose a play mode</Text>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: "#ff6347" }]}
        onPress={() => navigation.navigate("Game")}
      >
        <Text style={styles.buttonText}>With AI</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: "#32cd32" }]}
        onPress={() => navigation.navigate("Game")}
      >
        <Text style={styles.buttonText}>With a friend</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  logo: {
    width: 200,
    height: 200,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginTop: 20,
  },
  subtitle: {
    fontSize: 20,
    marginTop: 10,
    marginBottom: 20,
  },
  button: {
    width: "80%",
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

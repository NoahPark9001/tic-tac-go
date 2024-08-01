import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

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
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.aiButton]}
          onPress={() => navigation.navigate("Game", { mode: "AI" })}
        >
          <Text style={styles.buttonText}>With AI</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.friendButton]}
          onPress={() => navigation.navigate("Game", { mode: "Friend" })}
        >
          <Text style={styles.buttonText}>With a friend</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
  },
  buttonContainer: {
    width: "80%",
  },
  button: {
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: "center",
  },
  aiButton: {
    backgroundColor: "red",
  },
  friendButton: {
    backgroundColor: "green",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
});

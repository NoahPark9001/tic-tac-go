import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function GameOver({ winner, onRestart }) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Game Over!</Text>
      {winner && <Text style={styles.message}>{winner} won!</Text>}
      {!winner && <Text style={styles.message}>It's a draw!</Text>}
      <TouchableOpacity style={styles.button} onPress={onRestart}>
        <Text style={styles.buttonText}>Rematch!</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  message: {
    fontSize: 18,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#007BFF",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
  },
});

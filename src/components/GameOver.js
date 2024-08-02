import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from "react-native";

const GAME_BOARD_SIZE = 300;

export default function GameOver({ winner, onRestart }) {
  return (
    <View style={styles.overlayContainer}>
      <View style={styles.overlay}>
        <Text style={styles.heading}>GAME OVER</Text>
        {winner && <Text style={styles.message}>{winner} Won</Text>}
        {!winner && <Text style={styles.message}>It's a draw!</Text>}
        <TouchableOpacity style={styles.button} onPress={onRestart}>
          <Text style={styles.buttonText}>Restart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  overlayContainer: {
    position: "relative",
    width: GAME_BOARD_SIZE,
    height: GAME_BOARD_SIZE,
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#e83815",
    marginBottom: 10,
  },
  message: {
    fontSize: 24,
    color: "white",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#e83815",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    borderColor: "black",
    borderWidth: 1,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
});

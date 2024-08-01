import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function GameBoard({ onSelectSquare, board }) {
  return (
    <View style={styles.board}>
      {board.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {row.map((playerSymbol, colIndex) => (
            <TouchableOpacity
              key={colIndex}
              style={styles.cell}
              onPress={() => onSelectSquare(rowIndex, colIndex)}
              disabled={playerSymbol !== null}
            >
              <Text style={styles.cellText}>{playerSymbol}</Text>
            </TouchableOpacity>
          ))}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  board: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  row: {
    flexDirection: "row",
  },
  cell: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#000",
  },
  cellText: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

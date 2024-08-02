import React from "react";
import { View, TouchableOpacity, Image, StyleSheet } from "react-native";

export default function GameBoard({ onSelectSquare, board }) {
  return (
    <View style={styles.board}>
      {board.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {row.map((playerSymbol, colIndex) => {
            const symbolImage =
              playerSymbol === "X"
                ? require("../../assets/x-mark.png")
                : playerSymbol === "O"
                ? require("../../assets/o-mark.png")
                : null;
            return (
              <TouchableOpacity
                key={colIndex}
                onPress={() => onSelectSquare(rowIndex, colIndex)}
                style={styles.square}
                disabled={playerSymbol !== null}
              >
                {symbolImage && (
                  <Image source={symbolImage} style={styles.symbolImage} />
                )}
              </TouchableOpacity>
            );
          })}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  board: {
    width: 300,
    height: 300,
    backgroundColor: "black",
    padding: 2,
  },
  row: {
    flexDirection: "row",
  },
  square: {
    width: 97,
    height: 97,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "#87a648",
    margin: 1,
  },
  symbolImage: {
    width: 80,
    height: 80,
  },
});

import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Log({ turns }) {
  return (
    <View style={styles.logContainer}>
      {turns.map((turn) => (
        <View
          key={`${turn.square.row}${turn.square.col}`}
          style={styles.logItem}
        >
          <Text style={styles.logText}>
            {turn.player} selected {turn.square.row},{turn.square.col}
          </Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  logContainer: {
    marginTop: 20,
    padding: 10,
    width: "100%",
  },
  logItem: {
    marginBottom: 5,
  },
  logText: {
    fontSize: 16,
  },
});

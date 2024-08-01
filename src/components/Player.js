import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function Player({
  initialName,
  symbol,
  isActive,
  onChangeName,
}) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing(!isEditing);
    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }

  return (
    <View style={[styles.playerContainer, isActive && styles.active]}>
      <View style={styles.playerInfo}>
        {isEditing ? (
          <TextInput
            style={styles.input}
            value={playerName}
            onChangeText={setPlayerName}
          />
        ) : (
          <Text style={styles.playerName}>{playerName}</Text>
        )}
        <Text style={styles.playerSymbol}>{symbol}</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleEditClick}>
        <Text style={styles.buttonText}>{isEditing ? "Save" : "Edit"}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  playerContainer: {
    padding: 10,
    marginVertical: 5,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  active: {
    backgroundColor: "#e0e0e0",
  },
  playerInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  playerName: {
    fontSize: 18,
  },
  playerSymbol: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
  },
  input: {
    borderBottomWidth: 1,
    fontSize: 18,
    marginRight: 10,
  },
  button: {
    backgroundColor: "#007BFF",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "#FFF",
  },
});

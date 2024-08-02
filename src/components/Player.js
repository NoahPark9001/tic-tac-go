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

  function handleChange(text) {
    setPlayerName(text);
  }

  return (
    <View style={styles.container}>
      <Text style={[styles.symbol, isActive ? styles.active : null]}>
        {symbol}
      </Text>
      {isEditing ? (
        <TextInput
          style={styles.input}
          value={playerName}
          onChangeText={handleChange}
          onBlur={handleEditClick}
          autoFocus
        />
      ) : (
        <Text style={styles.name}>{playerName}</Text>
      )}
      <TouchableOpacity onPress={handleEditClick} style={styles.editButton}>
        <Text style={styles.editButtonText}>{isEditing ? "Save" : "Edit"}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
    justifyContent: "space-between",
  },
  symbol: {
    fontSize: 18,
    fontWeight: "bold",
    marginRight: 5,
    color: "white",
  },
  active: {
    color: "green",
  },
  name: {
    fontSize: 14,
    marginRight: 5,
    color: "white",
  },
  input: {
    fontSize: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    marginRight: 5,
    padding: 0,
    color: "white",
    width: 80,
  },
  editButton: {
    backgroundColor: "#e83815",
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 4,
  },
  editButtonText: {
    color: "#fff",
    fontSize: 12,
  },
});

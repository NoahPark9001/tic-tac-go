import React, { useState } from "react";
import { ScrollView, StyleSheet, View, Image, Text } from "react-native";
import Player from "../src/components/Player";
import GameBoard from "../src/components/GameBoard";
import Log from "../src/components/Log";
import GameOver from "../src/components/GameOver";
import { WINNING_COMBINATIONS } from "../winning-combinations";

const PLAYERS = {
  X: "Player 1",
  O: "Player 2",
};

const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function deriveActivePlayer(gameTurns) {
  return gameTurns.length % 2 === 0 ? "X" : "O";
}

function deriveGameBoard(gameTurns) {
  const gameBoard = [...INITIAL_GAME_BOARD.map((array) => [...array])];
  gameTurns.forEach(({ square, player }) => {
    const { row, col } = square;
    gameBoard[row][col] = player;
  });
  return gameBoard;
}

function deriveWinner(gameBoard, players) {
  let winner;
  WINNING_COMBINATIONS.forEach((combination) => {
    const firstSymbol = gameBoard[combination[0].row][combination[0].column];
    const secondSymbol = gameBoard[combination[1].row][combination[1].column];
    const thirdSymbol = gameBoard[combination[2].row][combination[2].column];
    if (
      firstSymbol &&
      firstSymbol === secondSymbol &&
      firstSymbol === thirdSymbol
    ) {
      winner = players[firstSymbol];
    }
  });
  return winner;
}

export default function GameScreen() {
  const [players, setPlayers] = useState(PLAYERS);
  const [gameTurns, setGameTurns] = useState([]);

  const activePlayer = deriveActivePlayer(gameTurns);
  const gameBoard = deriveGameBoard(gameTurns);
  const winner = deriveWinner(gameBoard, players);
  const hasDraw = gameTurns.length === 9 && !winner;

  function handleSelectSquare(rowIndex, colIndex) {
    setGameTurns((prevTurns) => [
      { square: { row: rowIndex, col: colIndex }, player: activePlayer },
      ...prevTurns,
    ]);
  }

  function handleRestart() {
    setGameTurns([]);
  }

  function handlePlayerNameChange(symbol, newName) {
    setPlayers((prevPlayers) => ({
      ...prevPlayers,
      [symbol]: newName,
    }));
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/tic-tac-go-logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.title}>Tic Tac Go</Text>
      </View>
      <View style={styles.playersContainer}>
        <Player
          initialName={PLAYERS.X}
          symbol="X"
          isActive={activePlayer === "X"}
          onChangeName={handlePlayerNameChange}
        />
        <Player
          initialName={PLAYERS.O}
          symbol="O"
          isActive={activePlayer === "O"}
          onChangeName={handlePlayerNameChange}
        />
      </View>
      {winner || hasDraw ? (
        <GameOver winner={winner} onRestart={handleRestart} />
      ) : (
        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
      )}
      <Log turns={gameTurns} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#f0f0f0",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  logo: {
    width: 200,
    height: 200,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
  },
  playersContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "black",
    padding: 10,
    width: "90%",
    marginBottom: 1,
  },
});

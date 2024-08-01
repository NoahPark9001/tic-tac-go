import React, { useState } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
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
  let gameBoard = INITIAL_GAME_BOARD.map((array) => [...array]);
  for (const turn of gameTurns) {
    const { square, player } = turn;
    gameBoard[square.row][square.col] = player;
  }
  return gameBoard;
}

function deriveWinner(gameBoard, players) {
  let winner;
  for (const combination of WINNING_COMBINATIONS) {
    const [a, b, c] = combination;
    const firstSquareSymbol = gameBoard[a.row][a.column];
    const secondSquareSymbol = gameBoard[b.row][b.column];
    const thirdSquareSymbol = gameBoard[c.row][c.column];
    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = players[firstSquareSymbol];
    }
  }
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
      ...prevTurns,
      { square: { row: rowIndex, col: colIndex }, player: activePlayer },
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
      <View style={styles.players}>
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
      {(winner || hasDraw) && (
        <GameOver winner={winner} onRestart={handleRestart} />
      )}
      <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
      <Log turns={gameTurns} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  players: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginBottom: 20,
  },
});

import React, { useState, useEffect } from "react";
import Tile from "./Tile";
import ScoreBoard from "./ScoreBoard";
import Controls from "./Controls";
import {
  generateEmptyBoard,
  addRandomTile,
  moveTiles,
} from "../utils/gameLogic";
import { Box } from "@mui/material";
import anime from "animejs";

const GameBoard = ({ onScoreChange }) => {
  const [board, setBoard] = useState(addRandomTile(generateEmptyBoard()));
  const [history, setHistory] = useState([]);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const handleKeyDown = (event) => {
      const keyMap = {
        ArrowUp: "up",
        ArrowDown: "down",
        ArrowLeft: "left",
        ArrowRight: "right",
      };
      if (keyMap[event.key]) handleMove(keyMap[event.key]);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [board]);

  const handleMove = (direction) => {
    let prevBoard = board.map((row) => row.slice());
    let { newBoard, score: gainedScore, moved } = moveTiles(board, direction);

    if (moved) {
      newBoard = addRandomTile(newBoard);
      setBoard(newBoard);
      setHistory([...history, prevBoard]);
      setScore(score + gainedScore);
      onScoreChange(score + gainedScore);
      animateTiles();
    }
  };

  const animateTiles = () => {
    anime({
      targets: ".tile",
      scale: [0.8, 1],
      duration: 200,
      easing: "easeOutQuad",
    });
  };

  const resetGame = () => {
    setBoard(addRandomTile(generateEmptyBoard()));
    setHistory([]);
    setScore(0);
    onScoreChange(0);
  };

  const undoMove = () => {
    if (history.length > 0) {
      setBoard(history[history.length - 1]);
      setHistory(history.slice(0, -1));
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100vw",
        height: "100vh",
        overflow: "hidden", // ✅ Prevents scrolling inside game
        gap: 2,
      }}
    >
      <ScoreBoard score={score} />

      <Box
        sx={{
          backgroundColor: "#F57C00",
          padding: "10px",
          borderRadius: "10px",
          boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(4, minmax(60px, 80px))",
            gap: 1,
            padding: 2,
            backgroundColor: "#BBADA0",
            borderRadius: "8px",
          }}
        >
          {board.flat().map((tile, index) => (
            <Tile key={index} value={tile} />
          ))}
        </Box>
      </Box>

      <Controls onReset={resetGame} onUndo={undoMove} />
    </Box>
  );
};

export default GameBoard;

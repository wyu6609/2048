import React, { useState } from "react";
import GameBoard from "./components/GameBoard";
import ScoreBoard from "./components/ScoreBoard";
import { Box } from "@mui/material";

const App = () => {
  const [score, setScore] = useState(0);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#FAFAFA",
        gap: 2,
        paddingTop: "30px", // Adds padding at the top
      }}
    >
      <ScoreBoard score={score} />
      <GameBoard onScoreChange={setScore} />
    </Box>
  );
};

export default App;

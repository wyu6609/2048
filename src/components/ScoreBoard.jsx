import React from "react";
import { Typography, Box } from "@mui/material";

const ScoreBoard = ({ score }) => (
  <Box
    sx={{
      marginTop: "20px",
      padding: 2,
      backgroundColor: "#F57C00",
      color: "white",
      textAlign: "center",
      borderRadius: "8px",
      width: "200px",
      fontSize: "20px",
      fontWeight: "bold",
    }}
  >
    <Typography variant="h6">Score: {score}</Typography>
  </Box>
);

export default ScoreBoard;

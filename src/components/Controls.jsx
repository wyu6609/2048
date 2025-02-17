import React from "react";
import { Box, Button } from "@mui/material";

const Controls = ({ onReset, onUndo }) => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        justifyContent: "center",
        marginTop: "20px",
      }}
    >
      <Button variant="contained" onClick={onReset} sx={buttonStyle}>
        🔄 Reset
      </Button>
      <Button variant="contained" onClick={onUndo} sx={buttonStyle}>
        ⏪ Undo
      </Button>
    </Box>
  );
};

// Reusable Button Styles
const buttonStyle = {
  backgroundColor: "#F57C00",
  color: "#FFF",
  fontWeight: "bold",
  borderRadius: "8px",
  padding: "10px 20px",
  fontSize: "16px",
  "&:hover": { backgroundColor: "#FF9800" },
};

export default Controls;

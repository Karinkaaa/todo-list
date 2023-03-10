import { TextField } from "@mui/material";
import React, { useState } from "react";

export const TodoInput: React.FC = () => {
  const [value, setValue] = useState("");

  return (
    <TextField
      fullWidth
      placeholder="Enter the thing you need to do:"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onKeyDown={() => console.log(value)}
    />
  );
};

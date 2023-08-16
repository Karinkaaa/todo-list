import { ToggleButtonGroup, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import { PriorityType, StatusType } from "../../types";
import { StyledToggleButton } from "./StyledToggleButton";

interface Props {
  title: string;
  value: string;
  values: Array<StatusType | PriorityType>;
  onChange: (event: any) => void;
}

export const StyledToggleButtonGroup: React.FC<Props> = ({
  title,
  value,
  values,
  onChange,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <ToggleButtonGroup
      fullWidth={isMobile}
      color="primary"
      size="small"
      title={title}
      value={value}
      exclusive
      onChange={onChange}
    >
      {values.map((item) => (
        <StyledToggleButton key={item} value={item} />
      ))}
    </ToggleButtonGroup>
  );
};

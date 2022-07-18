import React from "react";
import {
  CircularProgress,
  CircularProgressLabel,
  Text,
} from "@chakra-ui/react";

interface CircularProgressWithLabelProps {
  value: number;
  label: string;
}

const CircularProgressWithLabel = (props: CircularProgressWithLabelProps) => {
  return (
    <div style={{ position: "relative" }}>
      <CircularProgress value={props.value} color="green.400" size={200}>
        <CircularProgressLabel>{props.value}%</CircularProgressLabel>
      </CircularProgress>
      <Text>{props.label}</Text>
    </div>
  );
};

export default CircularProgressWithLabel;

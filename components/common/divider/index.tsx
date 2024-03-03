import React from "react";
import styled from "styled-components";

const StyledDivider = styled.div<{ width?: string }>`
  width: ${(props) => props.width || "100%"};
  height: 0.5px;
  background-color: #fff;
  margin: ${(props) => (props.width ? "0 auto" : "0")};
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

type DividerProps = {
  width?: string;
};

function Divider({ width }: DividerProps) {
  return <StyledDivider width={width} />;
}

export default Divider;

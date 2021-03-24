import React, { Component } from "react";
import styled from "styled-components";

import { COLORS } from "./constants";

// reduce the padding by 4px to accomodate for the border size

const SIZES = {
  small: {
    "--borderRadius": 2 + "px",
    "--fontSize": 16 / 16 + "rem",
    "--padding": "4px 12px"
  },
  medium: {
    "--borderRadius": 2 + "px",
    "--fontSize": 18 / 16 + "rem",
    "--padding": "12px 20px"
  },
  large: {
    "--borderRadius": 4 + "px",
    "--fontSize": 21 / 16 + "rem",
    "--padding": "16px 32px"
  }
};

const Button = ({ variant, size, children }) => {
  const styles = SIZES[size];

  let Component;
  if (variant === "fill") {
    Component = FillButton;
  } else if (variant === "outline") {
    Component = OutlineButton;
  } else {
    Component = GhostButton;
  }

  return <Component style={styles}>{children}</Component>;
};

// transparent border extends to fill the space

const ButtonElem = styled.button`
  font-size: var(--fontSize);
  font-family: "Roboto", sans-serif;
  padding: var(--padding);
  border-radius: var(--borderRadius);
  border 2px solid transparent; 

  &:focus {
    outline-color:${COLORS.primary};
    outline-offset:4px;
  }

`;

const FillButton = styled(ButtonElem)`
  background-color: ${COLORS.primary};
  color: ${COLORS.white};
  &:hover {
    background-color: ${COLORS.primaryLight};
  }
`;

const OutlineButton = styled(ButtonElem)`
  background-color: ${COLORS.white};
  color: ${COLORS.primary};
  border: 2px solid currentColor;
  &:hover {
    background-color: ${COLORS.offwhite};
  }
`;

const GhostButton = styled(ButtonElem)`
  background-color: ${COLORS.white};
  color: ${COLORS.gray};
  &:focus {
    outline-color: ${COLORS.gray};
  }
  &:hover {
    background-color: ${COLORS.transparentGray15};
    color: ${COLORS.black};
  }
`;

export default Button;

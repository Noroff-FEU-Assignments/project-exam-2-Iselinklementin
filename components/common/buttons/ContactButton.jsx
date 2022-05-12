import React from "react";
import styled from "styled-components";
import { StyledButton } from "./Button.styles";

export const StyledContactBtn = styled(StyledButton)`
  background: ${(props) => props.theme.secondaryColour};
  padding: 6px 10px;
  letter-spacing: 0.8px;
  font-weight: 500;
  transition: background-color 0.3s;

  &:hover {
    background: #462670;
    background: ${(props) => props.theme.primaryColour};
  }
`;

export const ContactButton = ({ style }) => {
  return <StyledContactBtn className={style}>Contact</StyledContactBtn>;
};

// export default ContactButton;

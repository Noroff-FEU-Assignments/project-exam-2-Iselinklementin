import { device } from "global/ThemeConfig";
import { Button } from "react-bootstrap";
import styled from "styled-components";

export const StyledButton = styled.a`
  background: ${(props) => props.theme.primaryColour};
  text-transform: Uppercase;
  font-size: 14px;
  border-color: transparent;
  display: inline-flex;
  color: white;
  border-radius: 6px;

  &:hover,
  &:focus {
    background: ${(props) => props.theme.secondaryColour};
    border-color: transparent;
    color: white;
  }
`;

// denne er bra, de under her kan beholdes.
// Se gjennom det over, funker ikke godt nok.
// bare skift navn så den ikke heter "form"

export const StyledMobileButton = styled(StyledButton)`
  width: 100%;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledFormButton = styled(Button)`
  background: ${(props) => props.theme.primaryColour};
  text-transform: Uppercase;
  font-size: 14px;
  border-color: transparent;
  display: inline-flex;
  color: white;
  border-radius: 6px;
  width: 100%;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover,
  &:focus,
  &:active {
    /* background: ${(props) => props.theme.secondaryColour}; */
    background: #f4454b;
    border-color: transparent;
    color: white;
    box-shadow: 0 0 0 0.25rem #fb76793d;
  }

  @media ${device.tablet} {
    width: unset;
    padding: 0 30px;
  }
`;

export const StyledAddBtn = styled.a`
  background: ${(props) => props.theme.primaryColour};
  padding: 8px 8px 5px 10px;
  cursor: pointer;
  border-color: transparent;

  &:hover {
    background: ${(props) => props.theme.secondaryColour};
  }
`;

export const StyledEnquireBtn = styled.a`
  background: ${(props) => props.theme.primaryColour};
  height: 44px;
  cursor: pointer;
  border: transparent;

  &:hover {
    background: ${(props) => props.theme.secondaryColour};
  }
`;

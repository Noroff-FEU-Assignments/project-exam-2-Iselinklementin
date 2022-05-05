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
  /* font-weight: 500; */

  &:hover,
  &:focus {
    background: ${(props) => props.theme.secondaryColour};
    border-color: transparent;
    color: white;
  }
`;

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
  &:focus {
    background: ${(props) => props.theme.secondaryColour};
    border-color: transparent;
    color: white;
  }
`;

export const StyledAddBtn = styled.a`
  background: ${(props) => props.theme.primaryColour};
  padding: 8px 8px 5px 10px;
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme.secondaryColour};
  }
`;

export const StyledEnquireBtn = styled.a`
  background: ${(props) => props.theme.primaryColour};
  height: 44px;
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme.secondaryColour};
  }
`;

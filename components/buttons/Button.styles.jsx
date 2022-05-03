import styled from "styled-components";

export const StyledButton = styled.a`
  background: ${(props) => props.theme.primaryColour};
  text-transform: Uppercase;
  font-size: 14px;
  border-color: transparent;
  display: inline-flex;

  &:hover,
  &:focus {
    background: ${(props) => props.theme.secondaryColour};
    border-color: transparent;
  }
`;

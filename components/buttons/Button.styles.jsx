import styled from "styled-components";

export const StyledButton = styled.a`
  background: ${(props) => props.theme.primaryColour};
  text-transform: Uppercase;
  font-size: 14px;
  border-color: transparent;
  display: inline-flex;
  color: white;
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

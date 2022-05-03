import styled from "styled-components";
import { Button } from "react-bootstrap";

export const StyledButton = styled(Button)`
  background: ${(props) => props.theme.primaryColour};
  text-transform: Uppercase;
  font-size: 14px;
  display: flex;
  border-color: transparent;
`;

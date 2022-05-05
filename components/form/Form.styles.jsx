import { Alert, Form } from "react-bootstrap";
import styled from "styled-components";
// noe av denne koden er 2 ganger
// også i searchfunksjonen

export const StyledForm = styled(Form)`
  input {
    border-radius: 6px;
    height: 50px;
    background: white;
  }

  input::placeholder {
    font-size: 14px;
    color: ${(props) => props.theme.body};
    opacity: 0.8;
  }
`;

export const StyledFeedbackContainer = styled.div`
  position: relative;

  .alert-primary {
    background-color: transparent;
    color: ${(props) => props.theme.error};
    padding: 0 0 0 2.6rem;
    border: none;
    font-size: 14px;
  }

  .warning-icon {
    position: absolute;
    right: 15px;
    top: -2.7rem;
  }
`;

export const WrongInput = styled(Alert)`
  background-color: transparent;
  color: ${(props) => props.theme.error};
  border: none;
`;

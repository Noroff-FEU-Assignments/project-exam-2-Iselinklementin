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
    color: ${props => props.theme.body};
    opacity: 0.8;
  }

  h3 {
    font-size: 16px;
  }

  // her må det gjøres mer
  .select {
    width: 100%;
  }

  .text-area-container {
    position: relative;
    display: flex;
    align-items: flex-start;

    .counter {
      position: absolute;
      right: 10px;
      bottom: -30px;
      color: grey;
      font-size: 14px;
    }
  }

  .checkboxes {
    .form-check {
      margin: 1rem 0 1rem 0;
    }

    input {
      height: 20px;
      width: 20px;
    }
    label {
      margin-left: 1rem;
    }
  }
`;

export const StyledFeedbackContainer = styled.div`
  position: relative;

  .alert-primary {
    background-color: transparent;
    color: ${props => props.theme.error};
    padding: 0 0 0 2.9rem;
    border: none;
    font-size: 14px;
  }

  .warning-icon {
    position: absolute;
    right: 15px;
    top: -2.7rem;
  }

  .text-area-icon {
    top: -10.5rem;
  }
`;

export const WrongInput = styled(Alert)`
  background-color: transparent;
  color: ${props => props.theme.error};
  border: none;
`;

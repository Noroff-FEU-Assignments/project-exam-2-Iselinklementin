import styled from "styled-components";

export const StyledAccordion = styled.div`
  button {
  }
  .accordion-button {
    background: ${props => props.theme.light};
    color: ${props => props.theme.body};
    word-break: break-word;
  }

  .accordion-button::after {
    width: 40%;
  }

  .accordion-button:focus {
    box-shadow: none;
  }

  .received-container {
    position: absolute;
    right: 10px;
    top: 18px;
    display: flex;

    p {
      line-height: 1.5;
    }
  }

  .date {
    font-size: 14px;
  }

  .text-container {
    max-width: 240px;
    p {
      margin-bottom: 4px;
      word-break: break-word;
    }

    span {
      font-weight: 500;
    }
  }
`;

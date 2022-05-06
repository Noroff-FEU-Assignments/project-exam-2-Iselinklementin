import styled from "styled-components";

export const StyledAccordion = styled.div`
  button {
  }
  .accordion-button {
    background: ${props => props.theme.light};
    color: ${props => props.theme.body};
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
    p {
      margin-bottom: 4px;
      max-width: 500px;
    }

    span {
      font-weight: 500;
    }
  }
`;

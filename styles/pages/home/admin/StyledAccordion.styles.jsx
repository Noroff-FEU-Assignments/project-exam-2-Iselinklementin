import styled from "styled-components";

export const StyledAccordion = styled.div`
  button {
  }
  .accordion-button {
    background: ${(props) => props.theme.light};
    color: ${(props) => props.theme.body};
  }

  .accordion-button:focus {
    box-shadow: none;
  }

  .accordion-body {
    /* font-size: 14px; */
  }

  .message-icon {
    position: absolute;
    right: 10px;
  }

  .date {
    font-size: 14px;
  }
`;

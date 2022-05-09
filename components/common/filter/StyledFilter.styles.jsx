import styled from "styled-components";

export const StyledFilter = styled.div`
  background-color: ${props => props.theme.light};

  button {
    background-color: transparent;
    border-radius: 6px;
    padding: 5px 10px;
    border: 1px solid grey;
  }

  .hidden {
    display: none;
  }
`;

import styled from "styled-components";

export const SearchBox = styled.div`
  position: relative;
  width: 100vw;
  background: ${(props) => props.theme.primaryColour};
  color: white;

  input {
    padding-left: 38px;
    border: none;
  }

  input::placeholder {
    font-size: 14px;
    color: ${(props) => props.theme.body};
    opacity: 0.8;
  }

  .search-icon {
    position: absolute;
    left: 20px;
    top: 82.5px;
  }
`;

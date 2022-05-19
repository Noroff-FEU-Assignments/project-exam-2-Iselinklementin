import styled from "styled-components";
import Select from "react-select";

export const StyledSelect = styled(Select)`
  width: 100%;
  border-radius: 6px;

  :focus-visible {
    outline-color: #fc5156;
  }

  input:focus {
    box-shadow: none;
  }

  .react-select__placeholder {
    height: 35px;
  }

  .react-select__input-container {
    height: 50px;
  }

  .react-select__control--is-focused,
  .react-select__control--menu-is-open {
    border-color: #fc5156;
    box-shadow: 0 0 0 1px rgb(252 81 86 / 25%);
  }

  .react-select__menu {
    .react-select__option--is-selected {
      background: #fc5156;
    }

    .react-select__option--is-focused {
      background: #fdc2c2;
      color: ${(props) => props.theme.body};
    }
  }
`;

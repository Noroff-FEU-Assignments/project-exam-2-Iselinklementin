import styled from "styled-components";

export const SearchBox = styled.div`
  width: 100vw;
  background: ${(props) => props.theme.primaryColour};
  color: white;
`;

// export const SearchDropdown = styled.div`
//   position: relative;

//   input {
//     padding-left: 38px;
//     border: none;
//   }

//   input::placeholder {
//     font-size: 14px;
//     color: ${(props) => props.theme.body};
//     opacity: 0.8;
//   }

//   .icon-container {
//     position: absolute;
//     left: 10px;
//     top: 44px;
//   }
// `;

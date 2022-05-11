import styled from "styled-components";

export const StyledFilter = styled.div`
  background-color: ${(props) => props.theme.light};
  /* transition: all 0.6s; */

  .filter-container {
    padding-top: 1.5rem;
  }

  .rating-container {
    input {
      margin-right: 0.8rem;
    }
  }

  button {
    background-color: transparent;
    border-radius: 6px;
    padding: 5px 10px;
    border: 1px solid grey;
  }

  .hidden {
    display: none;
  }

  .active {
    background-color: ${(props) => props.theme.primaryColour};
    border: transparent;
    color: white;

    #icon-filter {
      svg {
        color: white;
      }
    }
  }

  .results-btn-container {
    display: flex;
    margin-top: 2rem;
    justify-content: space-between;
    padding: 1rem;
  }

  .results,
  .clear {
    text-transform: uppercase;
    padding: 10px;
    font-size: 14px;
  }

  .results {
    color: ${(props) => props.theme.primaryColour};
  }
`;

export const StyledFilterBtn = styled.div`
  /* transition: all ease-in-out 7s; */
`;

/* .active {
    background-color: ${(props) => props.theme.primaryColour};
    color: ${(props) => props.theme.light};
  } */
// // export const StyledFilterButton = styled.button.attrs((props) => ({
// //   background: props.active ? "orange" : "white",
// // }))`
// //   padding: 10px;
// //   /* background: ${(props) => (props.active ? "blue" : "red")}; */
// //   border: 1px solid grey;
// //   border-radius: 4px;
// // `;

// export const CustomStyle = styled.div`
//   button {
//     background: ${({ clicked }) => (clicked ? "black" : "red")};
//   }
// `;

// export const StyledChip = styled.button`
//   /* border-radius: 6px;
//   padding: 5px 10px;
//   border: 1px solid grey;
//   display: inline-block;
//   margin: 0.5rem 0.5rem 0 0; */
//   background-color: transparent;
//   border-radius: 6px;
//   padding: 5px 10px;
//   border: 1px solid grey;
//   background: ${(props) => (props.active ? "light" : "orange")};

//   & .active {
//     background-color: ${(props) => props.theme.primaryColour};
//     color: ${(props) => props.theme.light};
//   }
//   /* ::active {
//     background-color: ${(props) => props.theme.primaryColour};
//     color: ${(props) => props.theme.light};
//   } */
// `;

import styled from "styled-components";

export const StyledImageContainer = styled.div`
  position: relative;
  width: 300px;
  height: 250px;

  .img-placeholder {
    background-color: ${props => props.theme.secondaryColour};
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

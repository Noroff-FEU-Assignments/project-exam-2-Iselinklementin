import styled from "styled-components";

export const MenuContainer = styled.div`
  button {
    box-shadow: none;
    border: none;
    background: transparent;
    position: relative;
  }

  .menu {
    position: absolute;
    background: ${(p) => p.theme.backgroundColour};
    top: 5rem;
    left: 0;
    right: 0;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;
    width: 100vw;
  }

  .menu.active {
    opacity: 1;
    visibility: visible;
    -webkit-box-shadow: 0 4px 6px -6px black;
    -moz-box-shadow: 0 4px 6px -6px black;
    box-shadow: 0 4px 6px -6px black;
  }
`;

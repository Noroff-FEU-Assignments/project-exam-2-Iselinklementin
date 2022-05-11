import styled from "styled-components";

export const MenuContainer = styled.div`
  /* border: blue solid thin;
  transition: transform 1s ease, top 1s ease; */
  button {
    box-shadow: none;
    border: none;
    background: transparent;
    position: relative;
    /* transition: opacity 1s ease, transform 1s ease, visibility 1s; */
    /* transition: transform 1s ease;
   */
  }

  .menu {
    position: absolute;
    background: ${(p) => p.theme.backgroundColour};
    top: 5rem;
    left: 0;
    right: 0;
    opacity: 0;
    visibility: hidden;
    width: 100vw;
    z-index: 2;
    padding-bottom: 1rem;
  }

  .menu.active {
    opacity: 1;
    visibility: visible;
    -webkit-box-shadow: 0 4px 6px -6px black;
    -moz-box-shadow: 0 4px 6px -6px black;
    box-shadow: 0 4px 6px -6px black;
    /* border: red solid thin; */
  }
`;

export const StyledLogoutBtn = styled.div`
  display: flex;
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.primaryColour};
  }
`;

export const StyledIconContainer = styled.div`
  margin-right: 10px;
  height: 28px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* border: red solid thin; */

  .userIcon {
    margin-bottom: 4px;
  }

  .logout-icon {
    margin-top: 1px;
    margin-left: 6px;
  }
`;

export const StyledWideContainer = styled.div`
  font-weight: 500;
  text-transform: uppercase;
  font-size: 14px;
  display: flex;
  align-items: center;

  button {
    background: transparent;
    box-shadow: none;
    border: none;
    position: relative;
  }

  .admin-menu {
    position: absolute;
    background: ${(p) => p.theme.light};
    max-width: 170px;
    right: 7%;
    padding: 10px;
    top: 6rem;
    opacity: 0;
    visibility: hidden;
    z-index: 2;
    padding-bottom: 1rem;

    a {
      display: block;
    }

    .logout-icon {
      margin-top: -6px;
    }
  }

  .admin-menu.active {
    opacity: 1;
    visibility: visible;
    -webkit-box-shadow: 1px 3px 5px 0px darkgrey;
    -moz-box-shadow: 1px 3px 5px 0px darkgrey;
    box-shadow: 1px 3px 5px 0px darkgrey;
  }
`;

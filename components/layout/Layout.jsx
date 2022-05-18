import AuthContext from "context/AuthContext";
import { useContext, useEffect, useRef, useState } from "react";
import { Container, ListGroup, ListGroupItem, Navbar } from "react-bootstrap";
import Image from "next/image";
import LogoIcon from "assets/logo_element.svg";
import Logo from "assets/logo.svg";
import Stays from "assets/stays.svg";
import Icon, { icons } from "constants/icons";
import Link from "next/link";
import {
  MenuContainer,
  StyledCoordinatesContainer,
  StyledIconContainer,
  StyledLogoutBtn,
  StyledNav,
  StyledWideContainer,
} from "./layout.styles";
import Footer from "./footer/Footer";
import { AdminMenu } from "./menu/AdminMenu";
import { CustomerMenu } from "./menu/CustomerMenu";
import { useWindowSize } from "hooks/useWindowSize";
import { SCREEN } from "constants/misc";
import Coordinates from "assets/coordinates.svg";
import { useRouter } from "next/router";
import styled from "styled-components";
import { StyledButton } from "components/common/buttons/Button.styles";
import { StyledContactBtn } from "components/common/buttons/ContactButton";
import { ShowModal } from "components/modal/ShowModal";

// const StyledContentWrapper = styled.div``;

//     {size.width} <- bredde
//     {size.height} <- høyde

export default function ({ children }) {
  const [authorized, setAuthorized] = useState(false);
  const [auth, setAuth] = useContext(AuthContext);
  const [isActive, setIsActive] = useState(false);
  const [activeAdmin, setActiveAdmin] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const size = useWindowSize();
  const router = useRouter();

  // This removes React Hydration Error

  useEffect(() => {
    auth ? setAuthorized(true) : false;
  }, []);

  function logout() {
    setAuth(null);
    setModalShow(false);
    router.push("/");
  }

  function hideModal() {
    setModalShow(false);
  }

  // Dropdown Menu Admin

  const DropdownMenuAdmin = () => {
    const dropdownRefAdmin = useRef(null);

    return (
      <div>
        <button
          aria-label="navigation admin"
          className="p-2 admin-menu-trigger"
          onClick={() => setActiveAdmin(!activeAdmin)}
          // onMouseEnter={(e) => setActiveAdmin(!activeAdmin)}
        >
          <Icon icon={icons.map((icon) => icon.moreHorizontal)} color="#FC5156" fontSize="26px" />
        </button>

        <Container
          ref={dropdownRefAdmin}
          onMouseLeave={() => setActiveAdmin(!activeAdmin)}
          className={`admin-menu ${activeAdmin ? "active" : ""}`}
        >
          <ListGroup>
            <ListGroupItem>
              <Link href="/add">
                <a className="d-flex align-items-center">
                  <StyledIconContainer>
                    <Icon icon={icons.map((icon) => icon.plus)} />
                  </StyledIconContainer>
                  Add stay
                </a>
              </Link>
            </ListGroupItem>
            {/* onClick={logout} */}
            <ListGroupItem className="item-logout" onClick={() => setModalShow(true)}>
              <StyledLogoutBtn>
                <StyledIconContainer>
                  <Icon icon={icons.map((icon) => icon.logout)} className="logout-icon" />
                </StyledIconContainer>
                Log out
              </StyledLogoutBtn>
            </ListGroupItem>
          </ListGroup>
        </Container>
        <ShowModal
          modalShow={modalShow}
          cancel={hideModal}
          heading="Sign out"
          message="Are you sure?"
          confirmed={logout}
        />
      </div>
    );
  };

  // Dropdown Menu Mobile

  const DropdownMenu = () => {
    const dropdownRef = useRef(null);
    const onClick = (e) => {
      e.preventDefault();
      setIsActive(!isActive);
    };

    return (
      <MenuContainer>
        <button
          aria-label="navigation"
          className="p-0 menu-trigger"
          onClick={(e) => {
            onClick(e);
          }}
        >
          <Icon icon={icons.map((icon) => icon.burger)} fontSize="28px" color="#FC5156" />
        </button>

        <div ref={dropdownRef} className={`menu ${isActive ? "active" : "inactive"}`}>
          <div className={isActive ? "dropdown-menu-container show" : "dropdown-menu-container"}>
            {authorized ? <AdminMenu /> : <CustomerMenu />}
          </div>
        </div>
      </MenuContainer>
    );
  };

  return (
    <>
      {size.width <= SCREEN.tablet ? (
        <>
          <StyledNav expand="lg">
            <Container className="mt-3 justify-space-between">
              <DropdownMenu />
              <Navbar.Brand className="logo">
                <Link href="/" passHref>
                  <a>
                    <Image src={LogoIcon} alt="Holidaze logo element" width="38.71" height="38.69" />
                  </a>
                </Link>
              </Navbar.Brand>

              <Link href="/stays">
                <a style={{ lineHeight: "0.9" }}>
                  <Image src={Stays} alt="Icon, a house with a chimney" width="28.18" height="20" />
                </a>
              </Link>
            </Container>
          </StyledNav>
        </>
      ) : (
        <>
          <StyledNav expand="lg">
            <Container className="mt-4">
              <StyledCoordinatesContainer>
                <Image src={Coordinates} alt="Bergen Coordinates" width="20" height="200" />
              </StyledCoordinatesContainer>
              <Navbar.Brand>
                <Link href="/" passHref>
                  <a>
                    <Image src={Logo} alt="Holidaze logo" width="160.08" height="45" />
                  </a>
                </Link>
              </Navbar.Brand>

              <StyledWideContainer>
                <Link href="/stays">
                  <a className="me-4">Stays</a>
                </Link>
                <Link href="/contact" passHref>
                  <StyledContactBtn className="me-4">Contact</StyledContactBtn>
                </Link>

                {authorized ? (
                  <>
                    <Link href="/admin">
                      <a className="me-4">Admin</a>
                    </Link>
                    <DropdownMenuAdmin />
                  </>
                ) : (
                  <Link href="/login">
                    <a className="me-4">Login</a>
                  </Link>
                )}
              </StyledWideContainer>
            </Container>
          </StyledNav>
        </>
      )}

      {children}
    </>
  );
}

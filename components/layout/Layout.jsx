import AuthContext from "context/AuthContext";
import { useContext, useRef, useState } from "react";
import { useRouter } from "next/router";
import { Container, Navbar, Nav } from "react-bootstrap";
import Image from "next/image";
import LogoIcon from "assets/logo_element.svg";
import Stays from "assets/stays.svg";
import Icon, { icons } from "lib/icons";
import Link from "next/link";
import { MenuContainer } from "./layout.styles";

export default function ({ children }) {
  const [auth, setAuth] = useContext(AuthContext);

  const DropdownMenu = () => {
    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useState(false);
    const onClick = () => setIsActive(!isActive);

    return (
      <MenuContainer>
        <button aria-label="navigation" className="p-0 menu-trigger" onClick={onClick}>
          <Icon icon={icons.map((icon) => icon.burger)} fontSize="28px" color="#FC5156" />
        </button>

        <Container ref={dropdownRef} className={`border-bottom menu ${isActive ? "active" : "inactive"}`}>
          <Container className="py-4">
            <Link href="/">
              <a className="d-flex my-2">
                <Icon icon={icons.map((icon) => icon.apartment)} fontSize="16px" className="me-4" />
                Stays
              </a>
            </Link>
            <hr />
            <Link href="/contact">
              <a className="d-flex my-2">
                <Icon icon={icons.map((icon) => icon.email)} fontSize="16px" className="me-4" />
                Contact us
              </a>
            </Link>
            <hr />
            <Link href="/login">
              <a className="d-flex my-2">
                <Icon icon={icons.map((icon) => icon.user)} fontSize="16px" className="me-4" />
                Login
              </a>
            </Link>
          </Container>
        </Container>
      </MenuContainer>
    );
  };

  return (
    <>
      <Navbar expand="lg">
        <Container className="mt-3 justify-space-between align-items-center">
          <DropdownMenu />
          <Navbar.Brand className="">
            <Link href="/" passHref>
              <a>
                <Image src={LogoIcon} alt="Holidaze logo element" width="38.71" height="38.69" />
              </a>
            </Link>
          </Navbar.Brand>

          <Link href="/">
            <a>
              <Image src={Stays} alt="Icon, a house with a chimney" width="29.18" height="23.07" />
            </a>
          </Link>
        </Container>
      </Navbar>
      {children}
    </>
  );
}

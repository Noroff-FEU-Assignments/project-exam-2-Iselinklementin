import * as S from "styles";
import styled from "styled-components";
import AuthContext from "context/AuthContext";
import { useContext } from "react";
import { useRouter } from "next/router";
// import Link from "next/link";
import { Container, Navbar, Nav } from "react-bootstrap";
import Image from "next/image";
import LogoIcon from "assets/logo_element.svg";
import Stays from "assets/stays.svg";
import Icon, { icons } from "lib/icons";
import Link from "next/link";

import { Test } from "styles/NavbarToggler";

export default function ({ children }) {
  const [auth, setAuth] = useContext(AuthContext);

  return (
    <>
      <Navbar expand="lg">
        <Container className="mt-5">
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
          <Test>Jaha</Test>
          {/* <Styled.Toggle aria-controls="basic-navbar-nav"></Styled.Toggle> */}

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto mt-4">
              <Link href="/">
                <a className="d-flex my-2">
                  <Icon icon={icons.map(icon => icon.apartment)} fontSize="16px" className="me-4" />
                  Stays
                </a>
              </Link>
              <hr />
              <Link href="/contact">
                <a className="d-flex my-2">
                  <Icon icon={icons.map(icon => icon.email)} fontSize="16px" className="me-4" />
                  Contact us
                </a>
              </Link>
              <hr />
              <Link href="/login">
                <a className="d-flex my-2">
                  <Icon icon={icons.map(icon => icon.user)} fontSize="16px" className="me-4" />
                  Login
                </a>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* 
      <nav>
        <Link href="/admin">
          <a>Admin</a>
        </Link>
        <Link href="/enquire">
          <a>Enquire</a>
        </Link>

        <Link href="/add">
          <a>Add</a>
        </Link>
      </nav> */}
      <div>{children}</div>
    </>
  );
}

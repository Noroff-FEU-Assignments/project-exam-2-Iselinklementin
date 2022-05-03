import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Mountain from "assets/mountain.svg";
import Link from "next/link";
import LogoIcon from "assets/logo_element.svg";
import { Container } from "react-bootstrap";

const StyledFooter = styled.footer`
  padding: 1rem;
  margin-top: 8rem;
  text-align: center;
`;

const StyledLink = styled.a`
  text-transform: uppercase;
  font-size: 14px;
  margin: 10px;
  font-weight: 500;
`;

export default function Footer() {
  return (
    <>
      <StyledFooter>
        <div style={{ position: "relative", width: "100%", height: "95px" }}>
          <Image src={Mountain} alt="image" layout="responsive" objectFit="cover" style={{ opacity: "0.8" }} />
        </div>
        <Link href="/">
          <a>
            <Image src={LogoIcon} alt="Holidaze logo element" width="34.28" height="34.28" />
          </a>
        </Link>
        <Container className="mb-5 mt-3">
          <Link href="/">
            <StyledLink>Stays</StyledLink>
          </Link>
          <Link href="/contact">
            <StyledLink>Contact</StyledLink>
          </Link>
          <Link href="/login">
            <StyledLink>Login</StyledLink>
          </Link>
        </Container>
      </StyledFooter>
    </>
  );
}

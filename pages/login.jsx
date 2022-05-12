import React from "react";
import Layout from "components/layout/Layout";
import { Container } from "react-bootstrap";
import Head from "components/layout/Head";
import Heading from "components/typography/Heading";
import LoginForm from "components/form/LoginForm";
import styled from "styled-components";

const StyledContainer = styled(Container)`
  max-width: 500px;
`;

function login() {
  return (
    <Layout>
      <Head title="Login" />
      <StyledContainer className="p-4">
        <Heading className="mt-5" size="1">
          Login
        </Heading>
        <LoginForm />
      </StyledContainer>
    </Layout>
  );
}

export default login;

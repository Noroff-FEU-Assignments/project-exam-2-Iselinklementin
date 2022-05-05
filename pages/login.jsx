import React from "react";
import Layout from "components/layout/Layout";
import { Container } from "react-bootstrap";
import Head from "components/layout/Head";
import Heading from "components/typography/Heading";
import LoginForm from "components/form/LoginForm";

function login() {
  return (
    <Layout>
      <Head title="Login" />
      <Container className="py-4 mt-4">
        <Heading className="" size="1">
          Login
        </Heading>
        <LoginForm />
      </Container>
    </Layout>
  );
}

export default login;

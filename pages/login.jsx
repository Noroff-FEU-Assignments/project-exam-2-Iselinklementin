import React, { useState } from "react";
import Layout from "components/layout/Layout";
import { Container } from "react-bootstrap";
import Head from "components/layout/Head";
import Heading from "components/typography/Heading";
import LoginForm from "components/form/LoginForm";

import { StyledContainerSmall } from "styles/StyledContainerSmall";

function login() {
  return (
    <Layout>
      <Head title="Login" />
      <StyledContainerSmall className="p-4">
        <Heading className="mt-5" size="1">
          Login
        </Heading>
        <LoginForm />
      </StyledContainerSmall>
    </Layout>
  );
}

export default login;

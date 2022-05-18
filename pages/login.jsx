import React, { useState } from "react";
import Layout from "components/layout/Layout";
import { Container } from "react-bootstrap";
import Head from "components/layout/Head";
import Heading from "components/typography/Heading";
import LoginForm from "components/form/LoginForm";
import styled from "styled-components";
import { StyledContainerSmall } from "styles/StyledContainerSmall";
import { ShowModal } from "components/modal/ShowModal";

function login() {
  // const [modalShow, setModalShow] = useState(false);

  // function hideModal() {
  //   setModalShow(false);
  // }

  return (
    <Layout>
      <Head title="Login" />
      <StyledContainerSmall className="p-4">
        <Heading className="mt-5" size="1">
          Login
        </Heading>
        <LoginForm />
        {/* <p onClick={() => setModalShow(true)}>Her åpnes modal</p>
        <ShowModal modalShow={modalShow} cancel={hideModal} heading="Sign out" message="Are you sure?" /> */}
      </StyledContainerSmall>
    </Layout>
  );
}

export default login;

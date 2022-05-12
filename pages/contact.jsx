import React from "react";
import { Container } from "react-bootstrap";
import ContactForm from "components/form/ContactForm";
import Head from "components/layout/Head";
import Layout from "components/layout/Layout";
import Heading from "components/typography/Heading";
import styled from "styled-components";

const StyledContainer = styled(Container)`
  max-width: 500px;
`;

function contact() {
  return (
    <Layout>
      <Head title="Contact us" />
      <StyledContainer className="p-4">
        <Heading className="mt-5" size="1">
          Contact us
        </Heading>
        <ContactForm />
      </StyledContainer>
    </Layout>
  );
}

export default contact;

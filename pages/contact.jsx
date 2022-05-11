import React from "react";
import { Container } from "react-bootstrap";
import ContactForm from "components/form/ContactForm";
import Head from "components/layout/Head";
import Layout from "components/layout/Layout";
import Heading from "components/typography/Heading";

function contact() {
  return (
    <Layout>
      <Head title="Contact us" />
      <Container className="p-4">
        <Heading className="mt-3" size="1">
          Contact us
        </Heading>
        <ContactForm />
      </Container>
    </Layout>
  );
}

export default contact;

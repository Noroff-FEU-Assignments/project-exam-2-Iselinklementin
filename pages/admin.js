import axios from "axios";
import React from "react";
import { Container } from "react-bootstrap";
import Head from "../components/layout/Head";

import Layout from "../components/layout/Layout";
import Heading from "../components/typography/Heading";
const CONTACT_URL = "https://grafs.no/wp-json/wp/v2/holidaze_contact";

function admin({ messages }) {
  return (
    <Layout>
      <Head title="Admin" />
      <Container>
        <Heading className="mt-5" size="1">
          Welcome Admin
        </Heading>

        <div>Messages:</div>
        {messages.map((message) => {
          return (
            <div key={message.acf.id}>
              <h3 key={message.acf.id}>{message.acf.title}</h3>
              <p>sent: {message.acf.date}</p>
              <p>message: {message.acf.message}</p>
              <p>sent from: {message.acf.email}</p>
            </div>
          );
        })}
      </Container>
    </Layout>
  );
}

export default admin;

export async function getStaticProps() {
  let messages = [];

  try {
    const response = await axios.get(CONTACT_URL);
    messages = response.data;
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
      messages,
    },
  };
}

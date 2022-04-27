import axios from "axios";
import React from "react";
import { Container, Tab, Tabs, Accordion } from "react-bootstrap";
import Head from "../components/layout/Head";

import Layout from "../components/layout/Layout";
import Heading from "../components/typography/Heading";
import { ENQUIRES_URL } from "../constants/api";
const CONTACT_URL = "https://grafs.no/wp-json/wp/v2/holidaze_contact";

function admin({ messages, enquire }) {
  console.log(enquire);
  let countMessage = 0;
  let countEnquire = 0;
  return (
    <Layout>
      <Head title="Admin" />
      <Container>
        <Heading className="mt-5" size="1">
          Welcome Admin
        </Heading>

        <Tabs defaultActiveKey="messages" className="mb-3">
          <Tab eventKey="messages" title="Messages">
            <Accordion defaultActiveKey="0" flush>
              {messages.map((message) => {
                countMessage++;
                return (
                  <Accordion.Item eventKey={countMessage}>
                    <Accordion.Header>{message.acf.title}</Accordion.Header>
                    <Accordion.Body>
                      <div key={message.acf.id}>
                        <h3 key={message.acf.id}>{message.acf.title}</h3>
                        <p>sent: {message.acf.date}</p>
                        <p>message: {message.acf.message}</p>
                        <p>sent from: {message.acf.email}</p>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                );
              })}
            </Accordion>
          </Tab>
          <Tab eventKey="enquires" title="Enquires">
            <Accordion defaultActiveKey="0" flush>
              {enquire.map((enquires) => {
                countEnquire++;
                return (
                  <Accordion.Item eventKey={countEnquire}>
                    <Accordion.Header>{enquires.acf.stay_title}</Accordion.Header>
                    <Accordion.Body>
                      <div key={enquires.acf.id}>
                        <h3 key={enquires.acf.id}>{enquires.acf.title}</h3>
                        <p>sent: {enquires.acf.date}</p>
                        <p>message: {enquires.acf.comments}</p>
                        <p>sent from: {enquires.acf.email}</p>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                );
              })}
            </Accordion>
          </Tab>
        </Tabs>
      </Container>
    </Layout>
  );
}

export default admin;

export async function getStaticProps() {
  let messages = [];
  let enquire = [];

  try {
    const responseContact = await axios.get(CONTACT_URL);
    const responseEnquire = await axios.get(ENQUIRES_URL);
    messages = responseContact.data;
    enquire = responseEnquire.data;
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
      messages,
      enquire,
    },
  };
}

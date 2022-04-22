import axios from "axios";
import React from "react";
import Layout from "../components/layout/Layout";
const CONTACT_URL = "https://grafs.no/wp-json/wp/v2/holidaze_contact";

function admin(props) {
  console.log(props.messages);
  return (
    <Layout>
      <div>Admin page</div>
      <div>Messages:</div>
      {props.messages.map(message => {
        return (
          <div key={message.acf.id}>
            <h3 key={message.acf.id}>{message.acf.title}</h3>
            <p>sent: {message.acf.date}</p>
            <p>message: {message.acf.message}</p>
            <p>sent from: {message.acf.email}</p>
          </div>
        );
      })}
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
      messages: messages,
    },
  };
}

import React from "react";
import Layout from "../components/layout/Layout";
import { ENQUIRES_URL } from "../constants/api";
import axios from "axios";
import EnquireForm from "../components/common/forms/EnquireForm";

function Enquire(props) {
  return (
    <Layout>
      <div>Enquires:</div>
      {props.enquires.map(message => {
        console.log(message);
        return (
          <div key={message.acf.id}>
            <h3 key={message.acf.id}>{message.acf.title}</h3>
            <p>name: {message.acf.name}</p>
            <p>message: {message.acf.comments}</p>
            <p>sent from: {message.acf.email}</p>
            <p>From: {message.acf.from_date}</p>
            <p>To: {message.acf.to_date}</p>
            <p>Stay: {message.acf.stay_title}</p>
            <p>phone: {message.acf.phone}</p>
            <p>how many: {message.acf.how_many}</p>
          </div>
        );
      })}
      <EnquireForm />
    </Layout>
  );
}

export default Enquire;

export async function getStaticProps() {
  let enquires = [];

  try {
    const response = await axios.get(ENQUIRES_URL);
    enquires = response.data;
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
      enquires: enquires,
    },
  };
}

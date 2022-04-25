import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import { API_URL } from "../constants/api";
import axios from "axios";
import Contact from "../components/common/forms/Contact";
import Login from "../components/common/forms/Login";
import Layout from "../components/layout/Layout";
import MediaForm from "../components/common/forms/MediaForm";

export default function Home(props) {
  console.log(props.holidaze);
  return (
    <Layout>
      {props.holidaze.map(stays => {
        return (
          <div key={stays.acf.id}>
            <p key={stays.acf.id}>{stays.acf.title}</p>
          </div>
        );
      })}

      <Login />
      <Contact />
      <br />
      <MediaForm />
    </Layout>
  );
}

export async function getStaticProps() {
  let holidaze = [];

  try {
    const response = await axios.get(API_URL);
    holidaze = response.data;
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
      holidaze: holidaze,
    },
  };
}

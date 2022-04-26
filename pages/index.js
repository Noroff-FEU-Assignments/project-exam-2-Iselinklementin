import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import { API_URL, MEDIA_URL } from "../constants/api";
import axios from "axios";
import Contact from "../components/common/forms/Contact";
import Login from "../components/common/forms/Login";
import Layout from "../components/layout/Layout";
import MediaForm from "../components/common/forms/MediaForm";
import { useState } from "react";

async function fetchMedia() {
  const [img, setImg] = useState([]);
  const response = await axios.get(MEDIA_URL);
  const crap = response.data;
  console.log(crap);
  crap.filter(img => {
    setImg(img.post === 597);
  });
  console.log(img);
}

export default function Home(props) {
  console.log(props.holidaze);
  // fetchMedia();

  return (
    <Layout>
      {props.holidaze.map(stays => {
        return (
          <div key={stays.acf.id}>
            <p key={stays.acf.id}>{stays.acf.title}</p>
            <div>{stays.content.rendered}</div>
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

import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import { API_URL } from "../constants/api";
import axios from "axios";
import Contact from "../components/common/forms/Contact";
import Login from "../components/common/forms/Login";

export default function Home(props) {
  return (
    <>
      <div>
        {props.holidaze.map(stays => {
          const stay = stays.acf;
          console.log(stay);
          return (
            <div key={stay.id}>
              <p>{stay.title}</p>
            </div>
          );
        })}
      </div>
      <Login />
      <Contact />
    </>
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

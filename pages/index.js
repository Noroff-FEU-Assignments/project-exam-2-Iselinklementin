import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import { API_URL } from "../constants/api";
import Layout from "../components/layout/Layout";
import axios from "axios";
import { useState } from "react";
import { getStays } from "../lib/getStays";

export default function Home({ stays }) {
  const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);
  // const { loading, error, posts, media } = useApi(API_URL, MEDIA_URL);
  // console.log(error);
  console.log(stays);
  // if (error)
  //   return (
  //     <Alert variant="danger" className="mt-5">
  //       {error}
  //     </Alert>
  //   );

  return (
    <Layout>
      {stays.map((stay) => {
        return (
          <div key={stay.id}>
            <p key={stay.id}>{stay.acf.title}</p>
            <p>{stay.id}</p>
          </div>
        );
      })}
    </Layout>
  );
}

export async function getStaticProps() {
  const stays = await getStays();
  return { props: { stays } };
}

// export async function getStaticProps() {
//   let stays = [];

//   try {
//     const response = await axios.get(API_URL);
//     stays = response.data;
//   } catch (error) {
//     console.log(error);
//   }

//   return {
//     props: {
//       stays,
//     },
//   };
// }

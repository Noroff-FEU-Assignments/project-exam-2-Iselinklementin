import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import { API_URL, BASE_URL, MEDIA_URL } from "../constants/api";
import Contact from "../components/common/forms/Contact";
import Login from "../components/common/forms/Login";
import Layout from "../components/layout/Layout";
import MediaForm from "../components/common/forms/MediaForm";
import useApi from "../hooks/useApi";
import { useState } from "react";
import UseImageFilter from "../components/common/UseImageFilter";

export default function Home() {
  const { loading, error, posts, media } = useApi(API_URL, MEDIA_URL);
  const [postimage, setPostimage] = useState([]);

  console.log(posts);

  if (loading) return <h1>Loading</h1>;
  if (error) return <div>Alert</div>;

  // console.log(postimage);

  return (
    <Layout>
      {posts.map(stays => {
        return (
          <div key={stays.id}>
            <p key={stays.id}>{stays.acf.title}</p>
            <p>{stays.id}</p>
            {/* <MyComponent /> */}
            {/* <UseImageFilter /> */}
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

// export async function getStaticProps() {
//   let holidaze = [];

//   try {
//     const response = await axios.get(API_URL);
//     holidaze = response.data;
//   } catch (error) {
//     console.log(error);
//   }

//   return {
//     props: {
//       holidaze: holidaze,
//     },
//   };
// }

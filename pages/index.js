import Head from "next/head";
import Image from "next/image";
import styles from "styles/Home.module.css";
import Layout from "components/layout/Layout";
import { useState } from "react";
import { getStays } from "lib/getStays";
import Messages from "components/admin/Messages";
import Link from "next/link";

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
      {stays.map(stay => {
        return (
          <Link href={`stay/${stay.id}`}>
            <div key={stay.id}>
              <h1 key={stay.id}>{stay.acf.title}</h1>
              <p>{stay.id}</p>
            </div>
          </Link>
        );
      })}
      <Messages />
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

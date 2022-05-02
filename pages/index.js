import Head from "next/head";
import Image from "next/image";
import styles from "styles/Home.module.css";
import Layout from "components/layout/Layout";
import { useState } from "react";
import { getStays } from "lib/getStays";
import Link from "next/link";
import Search from "components/common/Search";
// import { Bare } from "lib/icons";
import Icon, { icons } from "lib/icons";
import styled from "styled-components";

export const Title = styled.h1`
  color: red;
`;

export default function Home({ stays }) {
  const [loading, setLoading] = useState(false);

  // const [error, setError] = useState(null);
  // const { loading, error, posts, media } = useApi(API_URL, MEDIA_URL);
  // console.log(error);
  // console.log(stays);
  // if (error)
  //   return (
  //     <Alert variant="danger" className="mt-5">
  //       {error}
  //     </Alert>
  //   );

  console.log(icons);

  return (
    <Layout>
      <Title>Test</Title>
      <Search />
      <Icon icon={icons.map(icon => icon.more)} />
      <Icon icon={icons.map(icon => icon.plus)} />
      <Icon icon={icons.map(icon => icon.heart)} />
      <Icon icon={icons.map(icon => icon.user)} />
      <Icon icon={icons.map(icon => icon.text)} />
      <Icon icon={icons.map(icon => icon.shortText)} />
      <Icon icon={icons.map(icon => icon.email)} />
      <Icon icon={icons.map(icon => icon.phone)} />
      <Icon icon={icons.map(icon => icon.userplus)} />
      <Icon icon={icons.map(icon => icon.calendar)} />
      <Icon icon={icons.map(icon => icon.bag)} />
      <Icon icon={icons.map(icon => icon.search)} />
      <Icon icon={icons.map(icon => icon.clock)} />
      <Icon icon={icons.map(icon => icon.lock)} />
      <Icon icon={icons.map(icon => icon.chat)} />
      <Icon icon={icons.map(icon => icon.price)} />
      <Icon icon={icons.map(icon => icon.bed)} />
      <Icon icon={icons.map(icon => icon.hotel)} />
      <Icon icon={icons.map(icon => icon.apartment)} />
      <Icon icon={icons.map(icon => icon.images)} />
      <Icon icon={icons.map(icon => icon.image)} />
      <Icon icon={icons.map(icon => icon.smoking)} />
      <Icon icon={icons.map(icon => icon.check)} />
      <Icon icon={icons.map(icon => icon.error)} />
      <Icon icon={icons.map(icon => icon.pool)} />
      <Icon icon={icons.map(icon => icon.pet)} />
      <Icon icon={icons.map(icon => icon.location)} />
      <Icon icon={icons.map(icon => icon.kitchen)} />
      <Icon icon={icons.map(icon => icon.eat)} />
      <Icon icon={icons.map(icon => icon.wifi)} />
      <Icon icon={icons.map(icon => icon.parking)} />
      <Icon icon={icons.map(icon => icon.title)} />
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

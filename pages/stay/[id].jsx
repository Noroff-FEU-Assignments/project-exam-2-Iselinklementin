import React, { useState } from "react";
import axios from "axios";
import Head from "components/layout/Head";
import Layout from "components/layout/Layout";
import Heading from "components/typography/Heading";
import Paragraph from "components/typography/Paragraph";
import { API_URL } from "constants/api";
import { Container } from "react-bootstrap";
import Carousels from "components/images/Carousel";

export default function stay({ stay }) {
  console.log(stay.acf);
  let image = Object.entries(stay.acf.image);
  let imagesArr = [];
  image.forEach((img) => {
    imagesArr.push(img[1].url);
  });
  console.log(imagesArr);

  return (
    <Layout>
      <Head title={stay.acf.title} />
      <Container>
        <Heading>{stay.acf.title}</Heading>
        <Paragraph>{stay.acf.room.room_type ? stay.acf.room.room_type : stay.acf.room.stay_type}</Paragraph>
        {/* {stay.acf.image.filter((img) => {
          console.log(img);
        })} */}
        {/* {console.log(stay.acf.image)} */}
        <Carousels stays={imagesArr} />
      </Container>
    </Layout>
  );
}

export async function getStaticPaths() {
  try {
    const response = await axios.get(API_URL);
    const stay = response.data;
    const paths = stay.map((item) => ({
      params: {
        id: JSON.stringify(item.id),
      },
    }));

    return { paths: paths, fallback: false };
  } catch (error) {
    console.log(error);
  }
}

export async function getStaticProps({ params }) {
  const url = `${API_URL}/${params.id}`;
  let stay = null;

  try {
    const response = await axios.get(url);
    stay = response.data;
  } catch (error) {
    console.log(error);
  } finally {
    return {
      props: { stay: stay },
    };
  }
}

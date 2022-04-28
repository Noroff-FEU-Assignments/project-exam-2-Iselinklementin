import axios from "axios";
import Head from "components/layout/Head";
import Layout from "components/layout/Layout";
import { API_URL } from "constants/api";
import React from "react";
import { Container } from "react-bootstrap";

export default function stay({ stay }) {
  console.log(stay);
  return (
    <Layout>
      <Head title="Stays" />
      <Container>
        <div>stays</div>
      </Container>
    </Layout>
  );
}

export async function getStaticPaths() {
  try {
    const response = await axios.get(API_URL);
    const stay = response.data;
    const paths = stay.map(item => ({
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

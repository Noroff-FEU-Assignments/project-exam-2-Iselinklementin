import axios from "axios";
import EnquireForm from "components/form/EnquireForm";
import Head from "components/layout/Head";
import Layout from "components/layout/Layout";
import Heading from "components/typography/Heading";
import { API_URL } from "constants/api";
import { Container } from "react-bootstrap";

export default function Enquire({ stay }) {
  console.log(stay);
  return (
    <Layout>
      <Head title="Enquire" />
      <Container>
        <Heading>Enquire</Heading>
        <EnquireForm />
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
    console.log(stay);
  } catch (error) {
    console.log(error);
  } finally {
    return {
      props: { stay: stay },
    };
  }
}

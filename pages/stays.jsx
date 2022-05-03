import React from "react";
import Head from "components/layout/Head";
import Layout from "components/layout/Layout";
import Heading from "components/typography/Heading";
import { Container } from "react-bootstrap";
import Paragraph from "components/typography/Paragraph";
import Icon, { icons } from "lib/icons";
import { getStays } from "lib/getStays";
import StaysCard from "components/common/StaysCard";

function stays({ stays }) {
  return (
    <Layout>
      <Head title="Stays" />
      <Container className="py-4">
        <Heading className="mb-4" size="1">
          Book a stay with free cancellation <span style={{ color: "#FC5156" }}>- apply now!</span>
        </Heading>

        <div className="d-flex align-items-center mt-5">
          <Icon icon={icons.map((icon) => icon.filter)} color="#FC5156" className="me-2" />
          <Paragraph className="mt-2">Here is filter search</Paragraph>
        </div>
        <hr className="mb-5" />
        <StaysCard stays={stays} />
      </Container>
    </Layout>
  );
}

export default stays;

export async function getStaticProps() {
  const stays = await getStays();
  return { props: { stays } };
}

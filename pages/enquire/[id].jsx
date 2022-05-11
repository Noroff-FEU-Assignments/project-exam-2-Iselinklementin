import axios from "axios";
import EnquireForm from "components/form/EnquireForm";
import Head from "components/layout/Head";
import Layout from "components/layout/Layout";
import Heading from "components/typography/Heading";
import Paragraph from "components/typography/Paragraph";
import { StyledHeadingH1, StyledHeadingH2 } from "components/typography/StyledHeading.styles";
import { StyledParagraphColoured } from "components/typography/Paragraph";
import { API_URL } from "constants/api";
import { useRouter } from "next/router";
import { Container } from "react-bootstrap";

export default function Enquire({ stay }) {
  console.log(stay);
  const router = useRouter();
  const query = router.query;
  const room = query.room;

  const showRoom = () => {
    if (room === "Hotel") {
      return (
        <Paragraph className="mt-3">
          <span className="fw-bold">Room: </span>
          {room}
        </Paragraph>
      );
    } else if (room === "Apartment" || room === "Bed & Breakfast") {
      return <Paragraph className="mt-3">{room}</Paragraph>;
    }
    return <Paragraph className="mt-3">{stay.acf.room.stay_type}</Paragraph>;
  };

  return (
    <Layout>
      <Head title="Enquire" />
      <Container className="p-4">
        {showRoom()}
        <StyledHeadingH1 className="mt-3" size="1">
          Start planning your trip to {stay.acf.title}
        </StyledHeadingH1>

        <StyledParagraphColoured className="mt-5">Information</StyledParagraphColoured>
        <StyledHeadingH2 size="2">Who is traveling?</StyledHeadingH2>

        <EnquireForm title={stay.acf.title} room={room} type={stay.acf.room.stay_type} />
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

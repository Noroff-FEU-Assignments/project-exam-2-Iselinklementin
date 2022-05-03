import Layout from "components/layout/Layout";
import { useState } from "react";
import { getStays } from "lib/getStays";
import Link from "next/link";
import Search from "components/common/search/Search";
import Icon, { icons } from "lib/icons";
import { Container, Row, Col, Button } from "react-bootstrap";
import Image from "next/image";
import Mountain from "assets/mountain.svg";
import Bryggen from "assets/bryggen.svg";
import IntroImg from "assets/index_img.jpg";
import Heading from "components/typography/Heading";
import Paragraph from "components/typography/Paragraph";
import { SearchBox } from "components/common/search/Searchbox.styles";
import { StyledButton } from "components/buttons/Button.styles";
import { ExploreContainer } from "styles/pages/home/ExploreContainer.styles";
import { StyledIconHolder } from "components/styles/StyledIconHolder.styles";
import StaysCard from "components/common/StaysCard";

export default function Home({ stays }) {
  const [loading, setLoading] = useState(false);
  console.log(stays);

  return (
    <Layout>
      <div style={{ position: "relative", width: "100vw", height: "80vw" }}>
        <Image src={Mountain} alt="image" layout="fill" objectFit="cover" style={{ opacity: "0.3" }} />
        <div style={{ position: "absolute", padding: "1rem", height: "200px", width: "100%", bottom: "-2rem" }}>
          <Image src={Bryggen} alt="image" layout="responsive" objectFit="cover" />
        </div>
      </div>

      {/* Intro */}

      <Container className="d-flex flex-column align-items-center text-center mb-5">
        <Heading>Welcome to Bergen</Heading>
        <Paragraph>We in Holiday have the best places to stay, handpicked for you!</Paragraph>
      </Container>

      <SearchBox className="d-flex flex-column justify-content-center mt-4 py-4">
        <Search />
      </SearchBox>

      <div className="position-relative">
        <Image src={IntroImg} alt="image" layout="responsive" objectFit="cover" priority />
        <ExploreContainer>
          <Heading size="2">We in Holiday have the best places to stay, handpicked for you!</Heading>
          <Link href="/stays">
            <StyledButton className="px-3 btn btn-primary" role="button">
              Explore stays
              <StyledIconHolder>
                <Icon icon={icons.map((icon) => icon.arrow)} color="white" fontSize="14px" className="ms-2" />
              </StyledIconHolder>
            </StyledButton>
          </Link>
        </ExploreContainer>
      </div>

      {/* Dette må gjøres bedre:  */}

      <Container className="mt-5">
        <div className="border p-3">
          <div className="d-flex mb-1">
            <Icon icon={icons.map((icon) => icon.hotel)} />
            <Heading size="3" fontSize="18px" className="ms-2">
              Hotels
            </Heading>
          </div>
          <Paragraph>We work hard to find the best local places.</Paragraph>
        </div>
      </Container>

      <Container className="mt-4">
        <div className="border p-3">
          <div className="d-flex mb-1">
            <Icon icon={icons.map((icon) => icon.apartment)} />
            <Heading size="3" fontSize="18px" className="ms-2 ">
              Apartments
            </Heading>
          </div>
          <Paragraph>We work hard to find the best local places.</Paragraph>
        </div>
      </Container>

      <Container className="mt-4">
        <div className="border p-3">
          <div className="d-flex mb-1">
            <Icon icon={icons.map((icon) => icon.bed)} />
            <Heading size="3" fontSize="18px" className="ms-2">
              Bed & Breakfast
            </Heading>
          </div>
          <Paragraph>We work hard to find the best local places.</Paragraph>
        </div>
      </Container>

      {/* Inspiration  */}
      <Container className="mt-5">
        <Heading size="4" fontSize="18px" className="mt-5 mb-4">
          Inspiration for your next trip
        </Heading>
        <StaysCard stays={stays} />
      </Container>

      <Container>
        <Heading size="4" fontSize="18px" className="mt-5 mb-4">
          Some of our popular destinations
        </Heading>
      </Container>
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

{
  /* <Icon icon={icons.map((icon) => icon.more)} />
<Icon icon={icons.map((icon) => icon.plus)} />
<Icon icon={icons.map((icon) => icon.heart)} />
<Icon icon={icons.map((icon) => icon.user)} />
<Icon icon={icons.map((icon) => icon.text)} />
<Icon icon={icons.map((icon) => icon.shortText)} />
<Icon icon={icons.map((icon) => icon.email)} />
<Icon icon={icons.map((icon) => icon.phone)} />
<Icon icon={icons.map((icon) => icon.userplus)} />
<Icon icon={icons.map((icon) => icon.calendar)} />
<Icon icon={icons.map((icon) => icon.bag)} />
<Icon icon={icons.map((icon) => icon.search)} />
<Icon icon={icons.map((icon) => icon.clock)} />
<Icon icon={icons.map((icon) => icon.lock)} />
<Icon icon={icons.map((icon) => icon.chat)} />
<Icon icon={icons.map((icon) => icon.price)} />
<Icon icon={icons.map((icon) => icon.bed)} />
<Icon icon={icons.map((icon) => icon.hotel)} />
<Icon icon={icons.map((icon) => icon.apartment)} />
<Icon icon={icons.map((icon) => icon.images)} />
<Icon icon={icons.map((icon) => icon.image)} />
<Icon icon={icons.map((icon) => icon.smoking)} />
<Icon icon={icons.map((icon) => icon.check)} />
<Icon icon={icons.map((icon) => icon.error)} />
<Icon icon={icons.map((icon) => icon.pool)} />
<Icon icon={icons.map((icon) => icon.pet)} />
<Icon icon={icons.map((icon) => icon.location)} />
<Icon icon={icons.map((icon) => icon.kitchen)} />
<Icon icon={icons.map((icon) => icon.eat)} />
<Icon icon={icons.map((icon) => icon.wifi)} />
<Icon icon={icons.map((icon) => icon.parking)} />
<Icon icon={icons.map((icon) => icon.title)} />
<Icon icon={icons.map((icon) => icon.burger)} /> */
}

{
  /* <Link href={`stay/${stay.id}`}>
<div key={stay.id}>
  <h1 key={stay.id}>{stay.acf.title}</h1>
  <p>{stay.id}</p>
</div>
</Link> */
}

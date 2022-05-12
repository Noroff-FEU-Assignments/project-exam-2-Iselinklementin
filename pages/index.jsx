import Layout from "components/layout/Layout";
import { useState } from "react";
import { getStays } from "lib/getStays";
import Link from "next/link";
import Search from "components/common/search/Search";
import Icon, { icons } from "constants/icons";
import { Container } from "react-bootstrap";
import Image from "next/image";
import IntroImg from "assets/index_img.jpg";
import IntroImgDesktop from "assets/introimagedesktop.jpg";
import Heading from "components/typography/Heading";
import Paragraph from "components/typography/Paragraph";
import { SearchBox } from "components/common/search/Searchbox.styles";
import { StyledButton } from "components/common/buttons/Button.styles";

import StaysCard from "components/cards/StaysCard";
import { useWindowSize } from "hooks/useWindowSize";
import { SCREEN } from "constants/misc";
import Head from "components/layout/Head";
import { Intro } from "components/pages/home/Intro";
import { ExploreBergen } from "components/pages/home/ExploreBergen";
import { LinkStays } from "components/pages/home/LinkStays";

export default function Home({ stays }) {
  const [loading, setLoading] = useState(false);
  // console.log(stays);

  const size = useWindowSize();

  return (
    <Layout>
      <Head title="Holidaze" />

      <Intro />

      {/* {size.width <= SCREEN.tablet ? ( */}

      <SearchBox className="d-flex flex-column justify-content-center mt-4 py-4">
        <Search />
      </SearchBox>

      <div className="position-relative">
        {size.width <= SCREEN.small_tablet ? (
          <>
            <Image
              src={IntroImg}
              alt="Girl standing on a mountain near Bergen"
              layout="responsive"
              objectFit="cover"
              priority
            />
            <ExploreBergen />
          </>
        ) : (
          <Container className="mt-5 position-relative" style={{ height: "400px", maxWidth: "960px" }}>
            <Image
              src={IntroImgDesktop}
              alt="Girl standing on a mountain near Bergen"
              layout="fill"
              objectFit="cover"
              priority
            />
            <ExploreBergen />
          </Container>
        )}
      </div>

      {/* Dette må gjøres bedre:  */}
      {/* <Link
        to={{
          pathname: "/courses",
          search: "?sort=name",
          hash: "#the-hash",
          state: { fromDashboard: true },
        }}
      /> 
      
      <Link href="/dashboard?from=loginPage" as="/dashboard" />*/}

      <LinkStays />

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

import { useWindowSize } from "hooks/useWindowSize";
import { SCREEN } from "constants/misc";
import { useState } from "react";
import { getStays } from "lib/getStays";
import { Intro } from "components/pages/home/Intro";
import { ExploreBergen } from "components/pages/home/ExploreBergen";
import { LinkStays } from "components/pages/home/LinkStays";
import { SearchBox } from "components/common/search/Searchbox.styles";
import { Container } from "react-bootstrap";
import Image from "next/image";
import Search from "components/common/search/Search";
import IntroImg from "assets/index_img.jpg";
import IntroImgDesktop from "assets/introimagedesktop.jpg";
import Heading from "components/typography/Heading";
import Layout from "components/layout/Layout";
import StaysCard from "components/cards/StaysCard";
import Head from "components/layout/Head";
import { StyledContainer } from "styles/StyledContainer";

export default function Home({ stays }) {
  const [loading, setLoading] = useState(false);

  const size = useWindowSize();

  return (
    <Layout>
      <Head title="Holidaze" />
      <Intro />
      <SearchBox className="d-flex flex-column justify-content-center mt-4 py-4">
        <Search />
      </SearchBox>

      <div className="position-relative">
        {size.width <= SCREEN.small_tablet ? (
          <>
            <Image
              src={IntroImg}
              placeholder="blur"
              alt="Girl standing on a mountain near Bergen"
              layout="responsive"
              objectFit="cover"
            />
            <ExploreBergen />
          </>
        ) : (
          <StyledContainer className="position-relative" style={{ height: "400px" }}>
            <Image
              src={IntroImgDesktop}
              placeholder="blur"
              alt="Girl standing on a mountain near Bergen"
              layout="fill"
              objectFit="cover"
            />
            <ExploreBergen />
          </StyledContainer>
        )}
      </div>

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
      <Container className="mt-5" style={{ maxWidth: "960px" }}>
        <Heading size="4" fontSize="18px" className="mt-5 mb-4">
          Inspiration for your next trip
        </Heading>
        <StaysCard stays={stays} />
      </Container>

      <Container style={{ maxWidth: "960px" }}>
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

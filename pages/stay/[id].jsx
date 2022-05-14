import React, { useState } from "react";
import axios from "axios";
import Head from "components/layout/Head";
import Layout from "components/layout/Layout";
import Heading from "components/typography/Heading";
import Paragraph from "components/typography/Paragraph";
import { API_URL } from "constants/api";
import { Container, Row, Button } from "react-bootstrap";
import Carousels from "components/images/Carousel";
import Link from "next/link";
import Icon, { icons } from "constants/icons";
import styled from "styled-components";
import { StyledMobileButton } from "components/common/buttons/Button.styles";
import ShowIcons from "components/icons/ShowIcons";
import { StyledSelect } from "components/form/StyledSelect";
import { StyledContainer } from "styles/StyledContainer";
import { useWindowSize } from "hooks/useWindowSize";
import { SCREEN } from "constants/misc";
import { Description } from "components/pages/detailpage/Description";
import { Breadcrumbs } from "components/pages/detailpage/Breadcrumbs";
import { Location } from "components/pages/detailpage/Location";
import { ShowRoomOption } from "components/pages/detailpage/ShowRoomOption";
// import { SmallEnquireBtn } from "components/common/buttons/SmallEnquireBtn";

const StyledNiceToKnow = styled.div`
  width: 720px;
  /* border-right: solid thin grey; */
  padding-right: 2rem;
`;

const StyledSplit = styled.div`
  border-left: solid thin grey;
  height: 105px;
`;

export default function stay({ stay }) {
  const size = useWindowSize();

  let image = Object.entries(stay.acf.image);
  let imagesArr = [];
  image.forEach(img => {
    imagesArr.push(img[1].url);
  });

  return (
    <Layout>
      <Head title={stay.acf.title} />

      <StyledContainer className="mt-5 px-md-0">
        <Container>
          <Breadcrumbs title={stay.acf.title} />
          <div className="d-flex justify-content-between align-items-center mt-4">
            <Heading>{stay.acf.title}</Heading>
            {/* her skal det egentlig være knapp, kan koble Enquirebtn til hotelOptions-function */}
          </div>
          <Paragraph>{stay.acf.room.stay_type}</Paragraph>
        </Container>
      </StyledContainer>

      {size.width <= SCREEN.laptop ? (
        <StyledContainer>
          <Container className="mt-5">
            <Carousels stays={imagesArr} />

            <div className="mt-4">
              <ShowIcons stay={stay.acf.stay_includes} />
            </div>

            <Description
              className="mt-5"
              hSize="2"
              heading="Description"
              body={stay.acf.stay_description}
            />
          </Container>

          <Container>
            <Description
              className="mt-3"
              hSize="2"
              heading="Nice to know"
              body={stay.acf.nice_to_know_text}
            />

            <div className="d-flex">
              <Location
                className="ms-3"
                address={stay.acf.address.full_address}
                location={stay.acf.address.short_description}
              />
            </div>

            <div className="mt-4">
              <ShowIcons stay={stay.acf.nice_to_know} />
            </div>
          </Container>

          <Container>
            <hr className="my-5" />
            <Heading size="3">Room</Heading>
            <ShowRoomOption
              stay_type={stay.acf.room.stay_type}
              room_type={stay.acf.room.room_type}
              price={stay.acf.price}
              id={stay.id}
              info={stay.acf.room.room_info}
            />
          </Container>
        </StyledContainer>
      ) : (
        <StyledContainer>
          <div className="d-flex flex-row justify-content-between">
            <Carousels stays={imagesArr} />

            <div className="ms-5">
              <ShowIcons stay={stay.acf.stay_includes} />
              <Description
                className="mt-5"
                hSize="2"
                heading="Description"
                body={stay.acf.stay_description}
              />
              <ShowRoomOption
                stay_type={stay.acf.room.stay_type}
                room_type={stay.acf.room.room_type}
                price={stay.acf.price}
                id={stay.id}
                info={stay.acf.room.room_info}
              />
            </div>
          </div>
          <div className="mt-5 d-flex justify-content-between align-items-center">
            <StyledNiceToKnow className="border-right">
              <Description
                className="mt-3"
                hSize="2"
                heading="Nice to know"
                body={stay.acf.nice_to_know_text}
              />
            </StyledNiceToKnow>
            <StyledSplit></StyledSplit>
            <div className="ms-5">
              <ShowIcons stay={stay.acf.nice_to_know} />
              <div className="d-flex mt-5">
                <Location
                  className="ms-5"
                  address={stay.acf.address.full_address}
                  location={stay.acf.address.short_description}
                />
              </div>
            </div>
          </div>
        </StyledContainer>
      )}
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

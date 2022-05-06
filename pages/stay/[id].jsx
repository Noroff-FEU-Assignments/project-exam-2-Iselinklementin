import React, { useState } from "react";
import axios from "axios";
import Head from "components/layout/Head";
import Layout from "components/layout/Layout";
import Heading from "components/typography/Heading";
import Paragraph from "components/typography/Paragraph";
import { API_URL } from "constants/api";
import { Breadcrumb, Container, Row, Button } from "react-bootstrap";
import Carousels from "components/images/Carousel";
import Link from "next/link";
import Icon, { icons } from "constants/icons";
import styled from "styled-components";
import Select from "react-select";
import { StyledMobileButton } from "components/common/buttons/Button.styles";
import ShowIcons from "components/icons/ShowIcons";
import { SmallEnquireBtn } from "components/common/buttons/SmallEnquireBtn";
// import ChooseRoom from "components/common/functions/ChooseRoom";

// må fikse knapp på vanlige overnattinger
// og jeg må sjekke om det fins rom eller ikke når man
// kommer inn på enquire

const StyledRoomContainer = styled.div`
  background: ${props => props.theme.light};
`;

const StyledBreadcrumb = styled(Breadcrumb)`
  li {
    font-size: 12px;
    text-transform: uppercase;
  }
`;

export function HotelOptions(options, stay) {
  const [roomOption, setRoomOption] = useState("Choose room");

  const handleInput = newValue => {
    setRoomOption(newValue.value);
    return newValue;
  };

  return (
    <div>
      <p>{roomOption}</p>
      <Select options={options} onChange={handleInput} />
      <Link
        href={{ pathname: `/enquire/${stay.id}`, query: { room: roomOption } }}
        className="mt-4">
        <StyledMobileButton className="btn primary-btn mt-4" role="button">
          <Icon icon={icons.map(icon => icon.bag)} color="white" fontSize="16px" className="me-2" />
          Enquire
        </StyledMobileButton>
      </Link>
    </div>
  );
}

export default function stay({ stay }) {
  let image = Object.entries(stay.acf.image);
  let imagesArr = [];
  image.forEach(img => {
    imagesArr.push(img[1].url);
  });

  function ShowRoom(options) {
    let SELECT_OPTIONS = [];
    if (stay.acf.room.stay_type === "Hotel") {
      stay.acf.room.room_type.map(room => {
        let rooms = { value: room, label: room };
        SELECT_OPTIONS.push(rooms);
      });

      return (
        <StyledRoomContainer className="p-3 pt-4 mt-4">
          {HotelOptions(SELECT_OPTIONS, stay)}
          <hr />
          <Paragraph className="mt-3">
            Price from: <span className="fw-bold">{stay.acf.price},- / night</span>
          </Paragraph>
        </StyledRoomContainer>
      );
    } else {
      return (
        <>
          <Paragraph>{stay.acf.room.room_info}</Paragraph>
          <Paragraph className="mt-3">
            Price from: <span className="fw-bold">{stay.acf.price},- / night</span>
          </Paragraph>
        </>
      );
    }
  }

  return (
    <Layout>
      <Head title={stay.acf.title} />
      <Container className="mt-5">
        {/* Breadcrumbs */}
        <StyledBreadcrumb>
          <li className="breadcrumb-item">
            <Link href="/stays">Stays</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {stay.acf.title}
          </li>
        </StyledBreadcrumb>
        {/* Heading */}
        <div className="d-flex justify-content-between align-items-center mt-4">
          <Heading>{stay.acf.title}</Heading>
          <SmallEnquireBtn />
        </div>

        <Paragraph>{stay.acf.room.stay_type}</Paragraph>

        <Carousels stays={imagesArr} />

        <div className="mt-4">
          <ShowIcons stay={stay.acf.stay_includes} />
        </div>
        <Heading size="2" className="mt-5">
          Description
        </Heading>
        <p>{stay.acf.stay_description}</p>
      </Container>
      <Container className="mb-5">
        <Heading size="2" className="mt-5">
          Nice to know
        </Heading>
        <p>{stay.acf.nice_to_know_text}</p>
        <div className="mt-4">
          <ShowIcons stay={stay.acf.nice_to_know} />
        </div>
      </Container>

      <hr />
      <Container>
        <Heading size="3">Room</Heading>
        {ShowRoom()}
        {/* <Link href="/enquire" className="mt-4">
          <StyledMobileButton
            className="btn primary-btn mt-4"
            role="button"
            data-id={stay.id}
            data-title={stay.acf.title}
          >
            <Icon icon={icons.map((icon) => icon.bag)} color="white" fontSize="14px" className="me-2" />
            Enquire
          </StyledMobileButton>
        </Link> */}
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

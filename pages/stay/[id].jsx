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
import Icon, { icons } from "lib/icons";
import styled from "styled-components";
import Includes from "components/common/Includes";
import Select from "react-select";
import { StyledButton, StyledMobileButton } from "components/buttons/Button.styles";
import { StyledIconHolder } from "components/styles/StyledIconHolder.styles";

const StyledEnquireBtn = styled.a`
  background: ${(props) => props.theme.primaryColour};
  height: 44px;
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme.secondaryColour};
  }
`;

const StyledRoomContainer = styled.div`
  background: ${(props) => props.theme.light};
`;

const StyledBreadcrumb = styled(Breadcrumb)`
  li {
    font-size: 12px;
    text-transform: uppercase;
  }
`;

export default function stay({ stay }) {
  console.log(stay.acf);
  let image = Object.entries(stay.acf.image);
  let imagesArr = [];
  image.forEach((img) => {
    imagesArr.push(img[1].url);
  });

  function ShowRoom() {
    let SELECT_OPTIONS = [];
    if (stay.acf.room.stay_type === "Hotel") {
      stay.acf.room.room_type.map((room) => {
        let rooms = { value: room, label: room };
        SELECT_OPTIONS.push(rooms);
      });
      return (
        <StyledRoomContainer className="p-3 pt-4 mt-4">
          <Select placeholder="How many" defaultValue={{ value: 0, label: "Choose room" }} options={SELECT_OPTIONS} />
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

  console.log(Select.value);

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
          <Link href="/enquire">
            <StyledEnquireBtn className="btn btn-primary">
              <Icon icon={icons.map((icon) => icon.bag)} color="white" fontSize="16px" />
            </StyledEnquireBtn>
          </Link>
        </div>

        {/* <Paragraph>{stay.acf.room.room_type ? stay.acf.room.room_type : stay.acf.room.stay_type}</Paragraph> */}
        <Paragraph>{stay.acf.room.stay_type}</Paragraph>
        {/* Images / Carousel */}
        <Carousels stays={imagesArr} />
        {/* Icons include */}
        <div className="mt-4">
          <Includes stay={stay.acf.stay_includes} />
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
          <Includes stay={stay.acf.nice_to_know} />
        </div>
      </Container>

      <hr />
      <Container>
        <Heading size="3">Room</Heading>
        {ShowRoom()}
        <Link href="/enquire" className="mt-4">
          <StyledMobileButton className="btn primary-btn mt-4" role="button">
            <Icon icon={icons.map((icon) => icon.bag)} color="white" fontSize="14px" className="me-2" />
            Enquire
          </StyledMobileButton>
        </Link>
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

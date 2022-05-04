import React, { useState } from "react";
import axios from "axios";
import Head from "components/layout/Head";
import Layout from "components/layout/Layout";
import Heading from "components/typography/Heading";
import Paragraph from "components/typography/Paragraph";
import { API_URL } from "constants/api";
import { Breadcrumb, Container } from "react-bootstrap";
import Carousels from "components/images/Carousel";
import Link from "next/link";
import Icon, { icons } from "lib/icons";
import styled from "styled-components";
import Includes from "components/common/Includes";

const StyledEnquireBtn = styled.a`
  background: ${(props) => props.theme.primaryColour};
  height: 44px;
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme.secondaryColour};
  }
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
        <div className="d-flex justify-content-between align-items-end mt-2">
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
        <Includes stay={stay.acf.stay_includes} />
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

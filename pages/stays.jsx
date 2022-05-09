import React, { useState } from "react";
import Head from "components/layout/Head";
import Layout from "components/layout/Layout";
import Heading from "components/typography/Heading";
import { Container, Form } from "react-bootstrap";
import Paragraph from "components/typography/Paragraph";
import Icon, { icons } from "constants/icons";
import { getStays } from "lib/getStays";
import StaysCard from "components/cards/StaysCard";
import { StyledFilter } from "components/common/filter/StyledFilter.styles";
// import FilterSearch from "components/common/filter/FilterSearch";
import { Chips } from "components/common/filter/Chips";

function stays({ stays }) {
  const [show, setShow] = useState(false);
  const [filterChips, setFilterChips] = useState([]);
  const [filterRating, setFilterRating] = useState([]);
  const [active, setActive] = useState(false);

  let Rating = () => {
    return (
      <>
        <Form.Check name="3 stars" label="3 stars" onClick={e => handleCheck(e.target)} />
        <Form.Check name="4 stars" label="4 stars" onClick={e => handleCheck(e.target)} />
        <Form.Check name="5 stars" label="5 stars" onClick={e => handleCheck(e.target)} />
      </>
    );
  };

  let Chip = () => {
    return (
      <>
        <Chips name="Swimming pool" iconName="swimming_pool" clicked={e => onClick(e.target)} />
        <Chips name="Bed & Breakfast" iconName="bed" clicked={e => onClick(e.target)} />
        <Chips name="Kitchen" iconName="kitchen" clicked={e => onClick(e.target)} />
        <Chips name="Hotel" iconName="hotel" clicked={e => onClick(e.target)} />
        <Chips name="Breakfast" iconName="breakfast" clicked={e => onClick(e.target)} />
        <Chips name="Wifi" iconName="wifi" clicked={e => onClick(e.target)} />
        <Chips name="Free parking" iconName="free_parking" clicked={e => onClick(e.target)} />
        <Chips name="Apartment" iconName="apartment" clicked={e => onClick(e.target)} />
        <Chips name="Pet friendly" iconName="pet_friendly" clicked={e => onClick(e.target)} />
      </>
    );
  };

  let chipsfilter = [];
  let ratingfilter = [];

  const ratingFunction = value => {
    stays.map(item => {
      if (item.acf.stars[0] === value) {
        ratingfilter.push(item);
      }
    });
    setFilterRating(ratingfilter);
  };

  const includeFilter = e => {
    stays.map(item => {
      let staysInclude = Object.entries(item.acf.stay_includes);
      staysInclude.map(key => {
        if (key[1]) {
          let thisIncludes = key[0].replace("_", " ");
          if (thisIncludes === e.innerText.toLowerCase()) {
            chipsfilter.push(item);
          }
        }
      });
    });
    setFilterChips(chipsfilter);
  };

  const handleCheck = e => {
    console.log(e.attributes);

    if (e.checked) {
      console.log(e);
      ratingFunction(e.name);
    }
  };

  const onClick = e => {
    includeFilter(e);
  };

  const CreateHtml = () => {
    if (filterChips.length) {
      return <StaysCard stays={filterChips} />;
    }

    if (filterRating.length) {
      return <StaysCard stays={filterRating} />;
    }

    return <StaysCard stays={stays} />;
  };

  // må sjekke om det skal være knapper
  return (
    <Layout>
      <Head title="Stays" />
      <Container className="py-4">
        <Heading className="mb-4" size="1">
          Book a stay with free cancellation <span style={{ color: "#FC5156" }}>- apply now!</span>
        </Heading>

        <button className="d-flex align-items-center mt-5" onClick={() => setShow(!show)}>
          <Icon icon={icons.map(icon => icon.filter)} color="#FC5156" className="me-2" />
          <Paragraph className="mt-2">Here is filter search</Paragraph>
        </button>

        <StyledFilter>
          <div className={show ? "" : "hidden"}>
            <Rating />
            <Chip />
            <div
              role="button"
              onClick={() => {
                setFilterChips([]);
                setFilterRating([]);
              }}
              className="mt-3">
              CLEAR ALL
            </div>
          </div>
        </StyledFilter>

        <hr className="mb-5" />
        <CreateHtml />
        {/* {filterChips.length ? <StaysCard stays={filterChips} /> : <StaysCard stays={stays} />} */}
      </Container>
    </Layout>
  );
}

export default stays;

export async function getStaticProps() {
  const stays = await getStays();
  return { props: { stays } };
}

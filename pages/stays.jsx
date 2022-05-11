import React, { useRef, useState, createRef } from "react";
import Head from "components/layout/Head";
import Layout from "components/layout/Layout";
import Heading from "components/typography/Heading";
import { Container, Form } from "react-bootstrap";
import Paragraph from "components/typography/Paragraph";
import Icon, { icons } from "constants/icons";
import { getStays } from "lib/getStays";
import StaysCard from "components/cards/StaysCard";
import { StyledFilter, StyledFilterBtn, StyledFilterButton } from "components/common/filter/StyledFilter.styles";
import { Chips } from "components/common/filter/Chips";
import { StyledHeadingH1 } from "components/typography/StyledHeading.styles";

function stays({ stays }) {
  const [show, setShow] = useState(false);
  const [filterChips, setFilterChips] = useState([]);
  const [filterRating, setFilterRating] = useState([]);
  const [activeStay, setActiveStay] = useState(true);

  // const chipsContainer = createRef();

  let Rating = () => {
    return (
      <div className="rating-container">
        <Form.Label className="d-flex" onClick={(e) => handleRadio(e.target)}>
          <Form.Check type="radio" name="stars" />3 stars
        </Form.Label>

        <Form.Label className="d-flex" onClick={(e) => handleRadio(e.target)}>
          <Form.Check type="radio" name="stars" />4 stars
        </Form.Label>

        <Form.Label className="d-flex" onClick={(e) => handleRadio(e.target)}>
          <Form.Check type="radio" name="stars" />5 stars
        </Form.Label>
      </div>
    );
  };

  let chipsfilter = [];
  let ratingfilter = [];

  const includeFilter = (e) => {
    stays.map((item) => {
      if (e.toLowerCase() === item.acf.room.stay_type.toLowerCase()) {
        chipsfilter.push(item);
      }

      let staysInclude = Object.entries(item.acf.stay_includes);
      staysInclude.map((key) => {
        if (key[1]) {
          // let thisIncludes = key[0].replace("_", " ");
          if (key[0] === e) {
            chipsfilter.push(item);
          }
        }
      });
    });
    setFilterChips(chipsfilter);
  };

  const ratingFilter = (value) => {
    stays.map((item) => {
      if (item.acf.stars[0] === value) {
        ratingfilter.push(item);
      }
    });
    setFilterRating(ratingfilter);
  };

  const handleRadio = (e) => {
    if (e.innerText.length) {
      ratingFilter(e.innerText);
    }
  };

  const onClick = (e) => {
    let btnName = e.name === "bed" ? "Bed & Breakfast" : e.name;
    includeFilter(btnName);
    // let parentDiv = e.parentNode;
    // console.log(parentDiv);
    // // console.log(parentDiv.lastChild);
    // parentDiv.lastChild === "empty" ? setActiveStay(false) : setActiveStay(true);
    // console.log(parentDiv.lastChild);
  };

  const CreateHtml = () => {
    if (filterChips.length && activeStay) {
      // console.log(filterChips);
      return <StaysCard stays={filterChips} />;
    }

    if (filterRating.length && activeStay) {
      // console.log(filterRating);
      return <StaysCard stays={filterRating} />;
    }

    return <StaysCard stays={stays} />;
  };

  return (
    <Layout>
      <Head title="Stays" />
      <Container className="py-4">
        <StyledHeadingH1 className="mt-3" size="1">
          Book a stay with free cancellation <span style={{ color: "#FC5156" }}>- apply now!</span>
        </StyledHeadingH1>

        <StyledFilterBtn role="button" className="d-flex mt-5" onClick={() => setShow(!show)}>
          <Icon icon={icons.map((icon) => icon.filter)} color="#FC5156" className="me-2" fontSize="24px" />
          <Paragraph>Filter search</Paragraph>
        </StyledFilterBtn>

        <StyledFilter>
          <div className={show ? "filter-container" : "filter-container hidden"}>
            <Rating />
            <hr />
            <Chips clicked={(e) => onClick(e.target)} />

            <div className="results-btn-container">
              <div
                className="clear"
                role="button"
                onClick={() => {
                  setFilterChips([]);
                  setFilterRating([]);
                }}
              >
                Clear all
              </div>

              <div role="button" className="results">
                Show results
              </div>
            </div>
          </div>
        </StyledFilter>

        <hr className="mb-5" />
        <CreateHtml />
      </Container>
    </Layout>
  );
}

export default stays;

export async function getStaticProps() {
  const stays = await getStays();
  return { props: { stays } };
}

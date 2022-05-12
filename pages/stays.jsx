import React, { useRef, useState, createRef } from "react";
import Head from "components/layout/Head";
import Layout from "components/layout/Layout";
import Heading from "components/typography/Heading";

import Paragraph from "components/typography/Paragraph";
import Icon, { icons } from "constants/icons";
import { getStays } from "lib/getStays";
import StaysCard from "components/cards/StaysCard";
import {
  StayHeading,
  StyledContainer,
  StyledFilter,
  StyledFilterBtn,
  StyledFilterWrap,
} from "components/common/filter/StyledFilter.styles";
import { Chips } from "components/common/filter/Chips";
import { Rating } from "components/common/filter/Rating";
import { useWindowSize } from "hooks/useWindowSize";
import { SCREEN } from "constants/misc";
import { Container } from "react-bootstrap";

function stays({ stays }) {
  const [show, setShow] = useState(false);
  const [filterChips, setFilterChips] = useState([]);
  const [filterRating, setFilterRating] = useState([]);
  const [activeStay, setActiveStay] = useState(true);

  const size = useWindowSize();
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
    console.log(e);
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
      <StyledContainer className="py-4">
        <StayHeading className="mt-3" size="1" style={{ maxWidth: "200px" }}>
          Book a stay with free cancellation <span style={{ color: "#FC5156" }}>- apply now!</span>
        </StayHeading>

        {size.width <= SCREEN.tablet ? (
          <>
            <StyledFilterBtn role="button" className="d-flex mt-5" onClick={() => setShow(!show)}>
              <Icon icon={icons.map((icon) => icon.filter)} color="#FC5156" className="me-2" fontSize="24px" />
              <Paragraph>Filter search</Paragraph>
            </StyledFilterBtn>

            <StyledFilter>
              <div className={show ? "filter-container p-4" : "filter-container p-4 hidden"}>
                <Rating click={(e) => handleRadio(e.target)} />
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
          </>
        ) : (
          <>
            <Container>
              <StyledFilterBtn className="d-flex mb-4 mt-5">
                {/* <Icon icon={icons.map((icon) => icon.filter)} color="#FC5156" className="me-2" fontSize="24px" /> */}
                <Paragraph>Filter search</Paragraph>
                <div className="line"></div>
              </StyledFilterBtn>

              <StyledFilterWrap>
                <Rating click={(e) => handleRadio(e.target)} />
                <Chips clicked={(e) => onClick(e.target)} />
              </StyledFilterWrap>
            </Container>
          </>
        )}

        <hr className="mb-5" />
        <CreateHtml />
      </StyledContainer>
    </Layout>
  );
}

export default stays;

export async function getStaticProps() {
  const stays = await getStays();
  return { props: { stays } };
}

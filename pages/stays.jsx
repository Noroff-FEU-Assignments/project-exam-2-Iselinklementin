import React, { useRef, useState, createRef, useContext } from "react";
import Head from "components/layout/Head";
import Layout from "components/layout/Layout";
import Paragraph from "components/typography/Paragraph";
import Icon, { icons } from "constants/icons";
import { getStays } from "lib/getStays";
import StaysCard from "components/cards/StaysCard";
import {
  StayHeading,
  StyledFilter,
  StyledFilterBtn,
  StyledFilterWrap,
} from "components/common/filter/StyledFilter.styles";
import { Chips } from "components/common/filter/Chips";
import { Rating } from "components/common/filter/Rating";
import { useWindowSize } from "hooks/useWindowSize";
import { SCREEN } from "constants/misc";
import { Container } from "react-bootstrap";
import { StyledContainer } from "styles/StyledContainer";

function stays({ stays }) {
  const [show, setShow] = useState(false);
  const [filterChips, setFilterChips] = useState([]);
  const [filterRating, setFilterRating] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const size = useWindowSize();

  let ratingfilter = [];

  const ratingFilter = value => {
    stays.map(item => {
      if (item.acf.stars[0] === value) {
        ratingfilter.push(item);
      }
    });
    setFilterRating(ratingfilter);
  };

  const handleRadio = e => {
    let radioClick = e.parentNode.parentNode;

    if (e.innerText.length) {
      ratingFilter(e.innerText);
    } else if (radioClick.innerText.length) {
      ratingFilter(radioClick.innerText);
    }
  };

  let filteredArray = [];

  function includeFilter(filterChips) {
    stays.map(item => {
      filterChips.map(chip => {
        // denne sjekker om valuen er true

        let checkValue = Object.entries(item.acf.stay_includes).find(name => name[0] === chip);
        if (checkValue[1]) {
          const itemExists = filteredArray.find(arr => arr.id === item.id);
          // Hvis den allerede finnes, gjør ingenting, finnes den ikke - legg den til
          if (!itemExists) {
            filteredArray.push(item);
          }
        }
      });
    });

    if (filteredArray.length) {
      console.log("this is the array in my function connected to my button: ");
      console.log(filteredArray);
      setFiltered(filteredArray);
    }
  }

  const btnClick = e => {
    let btnName = e.name === "bed" ? "Bed & Breakfast" : e.name;

    if (filterChips.length) {
      filterChips.map(name => {
        if (name === btnName) {
          console.log("This already exists in the onClickButton: " + name);
          // filterChips.pop();
          let newArray = filterChips.filter(item => item !== btnName);
          setFilterChips(newArray);
          console.log("This is the new array: " + newArray);
          // } else {
          //   // filterChips.push(btnName);
          //   // const newList = filterChips.filter(item => item !== btnName);
          //   // setFilterChips(newList);
        }
        // console.log(filterChips);
      });
    } else {
      filterChips.push(btnName);
    }
    // Problemer med at den kan trykkes på 2 ganger
    // Her må jeg sjekke om chips igjen og se hva som finnes
    if (filterChips.length) {
      console.log("Dette er filterChips i knappen og blir levert til funksjonen: " + filterChips);
      includeFilter(filterChips);
    }
  };

  const CreateHtml = () => {
    if (filtered.length) {
      return <StaysCard stays={filtered} />;
    }
    // if (filterRating.length) {
    //   return <StaysCard stays={filterRating} />;
    // }
    return <StaysCard stays={stays} />;
  };

  return (
    <Layout>
      <Head title="Stays" />

      <StyledContainer className="py-4">
        <Container>
          <StayHeading className="mt-3" size="1" style={{ maxWidth: "200px" }}>
            Book a stay with free cancellation{" "}
            <span style={{ color: "#FC5156" }}>- apply now!</span>
          </StayHeading>
        </Container>

        {size.width <= SCREEN.tablet ? (
          <Container>
            <StyledFilterBtn role="button" className="d-flex mt-5" onClick={() => setShow(!show)}>
              <Icon
                icon={icons.map(icon => icon.filter)}
                color="#FC5156"
                className="me-2"
                fontSize="24px"
              />
              <Paragraph>Filter search</Paragraph>
            </StyledFilterBtn>

            <StyledFilter>
              <div className={show ? "filter-container p-4" : "filter-container p-4 hidden"}>
                <Rating click={e => handleRadio(e.target)} />
                <Chips clicked={e => btnClick(e)} />

                <div className="results-btn-container">
                  <div
                    className="clear"
                    role="button"
                    onClick={() => {
                      setFilterChips([]);
                      setFilterRating([]);
                    }}>
                    Clear all
                  </div>

                  <div role="button" className="results">
                    Show results
                  </div>
                </div>
              </div>
            </StyledFilter>
          </Container>
        ) : (
          <>
            <Container>
              <StyledFilterBtn className="d-flex mb-4 mt-5">
                <Paragraph>Filter search</Paragraph>
                <div className="line"></div>
              </StyledFilterBtn>

              <StyledFilterWrap>
                <Rating click={e => handleRadio(e.target)} />
                <Chips clicked={e => btnClick(e)} />
              </StyledFilterWrap>
            </Container>
          </>
        )}

        <Container>
          <hr className="mb-5" />

          <CreateHtml />
        </Container>
      </StyledContainer>
    </Layout>
  );
}

export default stays;

export async function getStaticProps() {
  const stays = await getStays();
  return { props: { stays } };
}

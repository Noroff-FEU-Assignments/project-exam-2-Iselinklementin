import React, { useRef, useState, createRef, useContext, useEffect } from "react";
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

  const ratingFilter = (value) => {
    stays.map((item) => {
      if (item.acf.stars[0] === value) {
        ratingfilter.push(item);
      }
    });
    setFilterRating(ratingfilter);
  };

  const handleRadio = (e) => {
    let radioClick = e.parentNode.parentNode;

    if (e.innerText.length) {
      ratingFilter(e.innerText);
    } else if (radioClick.innerText.length) {
      ratingFilter(radioClick.innerText);
    }
  };

  let filteredBtnOn = [];

  // HUSK å gå gjennom navnene her

  const btnClick = (e) => {
    let btnName = e.name === "bed" ? "Bed & Breakfast" : e.name;
    // let parent = e.parentElement;

    let activeFilter = e.attributes[1].value.includes("active-filter");
    stays.map((item) => {
      // sjekk aktiv, fjern hvis aktiv
      if (activeFilter) {
        // fjern denne fra filter
        let newChips = [...new Set(filterChips)];
        let testThis = newChips;

        newChips.map((name) => {
          if (btnName === name) {
            // DENNE ER RIKTIG
            testThis = newChips.filter((name) => name !== btnName);
            e.classList.remove("active-filter");
          }
        });

        if (!testThis.length) {
          setFilterChips([]);
          return setFiltered([]);
        } else {
          setFilterChips(() => [...testThis]);
          filterItems(testThis);
        }
      } else {
        filterChips.push(btnName);
        e.classList.add("active-filter");
        filterItems(filterChips);
      }

      function filterItems(array) {
        let newChips = [...new Set(array)];

        // Funksjonen for å filtrere items
        newChips.map((chip) => {
          // finner riktig navn på include og returnerer den
          let checkName = Object.entries(item.acf.stay_includes).find((name) => (name[0] === chip ? name[1] : ""));
          let checkStay = item.acf.room.stay_type.toLowerCase() === chip.toLowerCase();

          // hvis den er sann, dytt den inn i filtered
          if (checkStay || checkName) {
            filteredBtnOn.push(item);
            // denne skal finne duplikater og vise kun èn
            const itemExists = filteredBtnOn.find((arr) => arr.id === item.id);
            let newFilter = filteredBtnOn.sort();

            if (itemExists) {
              newFilter = [...new Set(filteredBtnOn)];
            }
            return setFiltered(() => [...newFilter]);
          }
        });
      }
    });
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
            Book a stay with free cancellation <span style={{ color: "#FC5156" }}>- apply now!</span>
          </StayHeading>
        </Container>

        {size.width <= SCREEN.tablet ? (
          <Container>
            <StyledFilterBtn role="button" className="d-flex mt-5" onClick={() => setShow(!show)}>
              <Icon icon={icons.map((icon) => icon.filter)} color="#FC5156" className="me-2" fontSize="24px" />
              <Paragraph>Filter search</Paragraph>
            </StyledFilterBtn>

            <StyledFilter>
              <div className={show ? "filter-container p-4" : "filter-container p-4 hidden"}>
                <Rating click={(e) => handleRadio(e.target)} />
                <Chips
                  clicked={(e) => {
                    btnClick(e);
                  }}
                />

                <div className="results-btn-container">
                  <div
                    className="clear"
                    role="button"
                    onClick={() => {
                      setFilterChips([]);
                      setFilterRating([]);
                      setFiltered([]);
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
          </Container>
        ) : (
          <>
            <Container>
              <StyledFilterBtn className="d-flex mb-4 mt-5">
                <Paragraph>Filter search</Paragraph>
                <div className="line"></div>
              </StyledFilterBtn>

              <StyledFilterWrap>
                <Rating click={(e) => handleRadio(e.target)} />
                <Chips
                  clicked={(e) => {
                    btnClick(e);
                  }}
                />
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

// nå fungerer thisNewArray med riktig antall
//
// const itemExists = thisNewArray.find((arr) => arr.id === item.id);
// Hvis den allerede finnes, ta den bort, finnes den ikke - legg den til
// if (itemExists) {
//   const newFilter = thisNewArray.filter((arr) => arr.id !== item.id);
//   setFiltered(newFilter);
// filteredArray.push(item);
// console.log("Dette er filtered midt i funksjonen, hvis den ikke eksisterer: ");
// console.log(filteredArray);
// } else {
//   setFiltered(thisNewArray);
// }
// const newProduct = filteredArray.filter((arr) => arr.id !== item.id);
// setFiltered(newProduct);
// console.log(filteredArray);

// hvis chips allerede eksisterer
// setFiltered(filteredArray);

// Problemer med at den kan trykkes på 2 ganger
// Her må jeg sjekke om chips igjen og se hva som finnes
// if (filterChips.length) {
//   console.log("Dette er filterChips i btnClick og blir levert til funksjonen: " + filterChips);
//   includeFilter(filterChips);
// }

// console.log("Dette er filtered nederst i funksjonen: " + filtered);

// if (filteredArray.length) {
//   console.log("hvis lengde, dette er inne i includeFilter funksjonen, helt nederst: ");
//   console.log(filteredArray);
//   setFiltered(filteredArray);
// }

// if (!newArray.length) {
//   setFiltered([]);
//   console.log("Dette er NYE array i filterchips.map i btnClick: " + newArray);
// } else {
//   setFiltered(btnName, newArray);
// }

// console.log("Dette er rett ETTER den NYE array i filterchips.map i btnClick: " + filterChips);
// includeFilter(filterChips);
// } else if (name !== btnName) {
// filterChips.push(btnName);
// else {
//   filterChips.push(btnName);
//   console.log("går denne av");
// }
// });

// denne funker nesten:

// const btnClick = (e) => {
//   let btnName = e.name === "bed" ? "Bed & Breakfast" : e.name;

//   if (filterChips.length) {
//     // filterChips.map((name) => {
//     stays.map((item) => {
//       console.log(item);
//       if (name === btnName) {
//         // console.log(filterChips + " + name : " + name + " " + btnName + " ..inside btnClick at the top");
//         let newArray = filterChips.filter((item) => item !== btnName);
//         console.log("This already exists in the onClickBtn: " + name + "..new array is: " + newArray);
//         // setFilterChips(filterChips => [newArray]);
//         setFilterChips(() => [...newArray]);
//         // return includeFilter(btnName, filterChips);
//       } else {
//         filterChips.push(btnName);
//         // return includeFilter(btnName, filterChips);
//       }
//     });
//     // });
//   } else {
//     let newArr = [];
//     newArr.push(btnName);
//     setFilterChips(() => [...newArr]);
//     // console.log("Dette er i bunnen, else funksjonen i funksjon 1: " + filterChips);
//   }

//   console.log("Dette blir sendt avgårde: " + filterChips);
//   return includeFilter(filterChips);
// };

// // let filteredArray = [];
// let thisNewArray = [];

// function includeFilter(filterChips) {
//   console.log("Dette er toppen i funksjon 2 - filterChips: " + filterChips);
//   if (filterChips.length) {

//       filterChips.map((chip) => {
//         // jeg må sjekke hva som blir trykket på,
//         // hvis det er samme som i Chip så må den taes bort

//         // denne sjekker om valuen er true
//         let checkValue = Object.entries(item.acf.stay_includes).find((name) => name[0] === chip);

//         // NYYY - Her skal jeg sjekke om den har dette inkludert
//         if (checkValue[1]) {
//           thisNewArray.push(item);
//           // console.log("Dette er helt øverst: ");
//           // console.log(thisNewArray);
//         }
//         // NYYY - Denne sjekker at det ikke er duplikater i html
//         if (thisNewArray.length) {
//           const itemExists = thisNewArray.find((arr) => arr.id === item.id);

//           if (itemExists) {
//             let newFilter = [...new Set(thisNewArray)];
//             // console.log("dette er newFilter hvis item allerede er der:");
//             // console.log(newFilter);
//             setFiltered(newFilter);
//           }
//         } else {
//           setFiltered(thisNewArray);
//         }
//       });

//   } else {
//     console.log("Its empty");
//   }
//   // console.log("Knapp navn: " + btnName);
// }

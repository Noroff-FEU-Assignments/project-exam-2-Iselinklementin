import axios from "axios";
import { API_URL } from "constants/api";
import Icon, { icons } from "constants/icons";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { Container, Form, ListGroup, ListGroupItem, Spinner } from "react-bootstrap";
import { StyledButtonContainer, StyledIconWrap, StyledWideContainer } from "./Searchbox.styles";
import { useWindowSize } from "hooks/useWindowSize";
import { SCREEN } from "constants/misc";
import { StyledButton } from "../buttons/Button.styles";
import Loader from "../loader/Loader";

// https://www.youtube.com/watch?v=Q2aky3eeO40

function Search() {
  const [stays, setStays] = useState([]);
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const showLoading = useRef(null);

  useEffect(() => {
    const loadStays = async () => {
      const response = await axios.get(API_URL);
      setStays(response.data);
    };
    loadStays();
  }, []);

  const size = useWindowSize();

  const onSuggestionHandler = (value) => {
    showLoading.current.classList.add("show");
    setValue(value);
    setSuggestions([]);
  };

  const onChangeHandler = (value) => {
    let matches = [];
    if (value.length > 0) {
      matches = stays.filter((stay) => {
        const regex = new RegExp(`${value}`, "gi");
        return stay.acf.title.match(regex);
      });
    }

    setSuggestions(matches);
    setValue(value);
  };

  return (
    <StyledWideContainer>
      <Container className="pb-4 pt-3">
        <StyledIconWrap>
          <Form.Label>Find your favourite place to stay</Form.Label>
          <Icon icon={icons.map((icon) => icon.search)} fontSize="16px" className="search-icon" color="#FC5156" />
          <div ref={showLoading} className="loader"></div>
        </StyledIconWrap>

        <Form.Control
          type="text"
          placeholder="Search stays"
          aria-describedby="search"
          onChange={(e) => {
            onChangeHandler(e.target.value);
          }}
          value={value}
          onBlur={() => {
            setTimeout(() => {
              setSuggestions([]);
            }, 100);
          }}
        />
        <div className="split"></div>

        <ListGroup>
          {suggestions &&
            suggestions.map((suggestion, i) => (
              <Link href={`stay/${suggestion.id}`} key={suggestion.id}>
                <a onClick={() => onSuggestionHandler(suggestion.acf.title)}>
                  <ListGroupItem key={i} action>
                    {suggestion.acf.title}
                  </ListGroupItem>
                </a>
              </Link>
            ))}
        </ListGroup>
      </Container>
      {size.width >= SCREEN.tablet ? (
        <>
          <div style={{ width: "300px" }}>
            <StyledButtonContainer>
              <Link href="/stays">
                <StyledButton className="px-3 btn btn-primary" role="button">
                  Explore all
                  <Icon icon={icons.map((icon) => icon.arrow)} color="white" fontSize="16px" className="ms-2" />
                </StyledButton>
              </Link>
            </StyledButtonContainer>
          </div>
        </>
      ) : (
        ""
      )}
    </StyledWideContainer>
  );
}

export default Search;

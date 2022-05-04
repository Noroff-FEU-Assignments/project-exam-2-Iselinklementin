import axios from "axios";
import Paragraph from "components/typography/Paragraph";
import { API_URL } from "constants/api";
import Icon, { icons } from "lib/icons";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import { Button, Container, Form, ListGroup, ListGroupItem } from "react-bootstrap";
import { SearchDropdown } from "./Searchbox.styles";

// https://www.youtube.com/watch?v=Q2aky3eeO40

function Search() {
  const [stays, setStays] = useState([]);
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const loadStays = async () => {
      const response = await axios.get(API_URL);
      setStays(response.data);
    };
    loadStays();
  }, []);

  const onSuggestionHandler = (value) => {
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
    <Container>
      <Form.Label>Find your favourite place to stay</Form.Label>
      <br />
      <Form.Control
        type="text"
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

      <ListGroup>
        {suggestions &&
          suggestions.map((suggestion, i) => (
            <ListGroupItem key={i} action onClick={() => onSuggestionHandler(suggestion.acf.title)}>
              <Link href={`stay/${suggestion.id}`}>
                <a>{suggestion.acf.title}</a>
              </Link>
            </ListGroupItem>
          ))}
      </ListGroup>
    </Container>
  );
}

export default Search;

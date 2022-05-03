import axios from "axios";
import Paragraph from "components/typography/Paragraph";
import { API_URL } from "constants/api";
import Icon, { icons } from "lib/icons";
import React, { useState, useRef, useEffect } from "react";
import { Button, ListGroup } from "react-bootstrap";
import { SearchDropdown } from "./Searchbox.styles";

const SearchbarDropdown = (props) => {
  const { options, onInputChange } = props;
  const ulRef = useRef();
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.addEventListener("click", (event) => {
      event.stopPropagation();
      ulRef.current.style.display = "flex";
      onInputChange(event);
    });
    document.addEventListener("click", (event) => {
      ulRef.current.style.display = "none";
    });
  }, []);

  return (
    <SearchDropdown>
      <Paragraph className="mt-2">Find your favourite place to stay</Paragraph>
      <input
        id="search-bar"
        type="text"
        className="form-control"
        placeholder="Search for hotels"
        ref={inputRef}
        onChange={onInputChange}
      />
      <div className="icon-container">
        <Icon icon={icons.map((icon) => icon.search)} fontSize="14px" color="#FC5156" />
      </div>

      <ul id="results" className="list-group" ref={ulRef}>
        {options.map((option, index) => {
          return (
            <button
              key={index}
              onClick={(e) => {
                inputRef.current.value = option;
              }}
              className="list-group-item list-group-item-action"
            >
              {option}
            </button>
          );
        })}
      </ul>
    </SearchDropdown>
  );
};

function Search() {
  const [stays, setStays] = useState([]);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    async function getApi() {
      try {
        const response = await axios.get(API_URL);

        if (response.status === 200) {
          setStays(response.data);
        } else {
          setStays([]);
        }
      } catch (error) {
        // setError(error.toString());
      }
    }
    getApi();
  }, []);

  const onInputChange = (event) => {
    let filter = stays.filter((stay) => stay.acf.title.toLowerCase().includes(event.target.value.toLowerCase()));
    setOptions(filter.map((stay) => stay.acf.title));
  };
  return (
    <div className="container mt-2 mb-3">
      <SearchbarDropdown options={options} onInputChange={onInputChange} />
    </div>
  );
}

export default Search;

import axios from "axios";
import { API_URL } from "constants/api";
import React, { useState, useRef, useEffect } from "react";
import { Button, ListGroup } from "react-bootstrap";

const SearchbarDropdown = props => {
  const { options, onInputChange } = props;
  const ulRef = useRef();
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.addEventListener("click", event => {
      event.stopPropagation();
      ulRef.current.style.display = "flex";
      onInputChange(event);
    });
    document.addEventListener("click", event => {
      ulRef.current.style.display = "none";
    });
  }, []);

  return (
    <div className="search-bar-dropdown">
      <input
        id="search-bar"
        type="text"
        className="form-control"
        placeholder="Search"
        ref={inputRef}
        onChange={onInputChange}
      />
      <ul id="results" className="list-group" ref={ulRef}>
        {options.map((option, index) => {
          return (
            <button
              type="button"
              key={index}
              onClick={e => {
                inputRef.current.value = option;
              }}
              className="list-group-item list-group-item-action">
              {option}
            </button>
          );
        })}
      </ul>
    </div>
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

  const onInputChange = event => {
    let filter = stays.filter(stay =>
      stay.acf.title.toLowerCase().includes(event.target.value.toLowerCase())
    );
    console.log(filter);
    setOptions(filter.map(stay => stay.acf.title));
  };
  return (
    <div className="container mt-2 mb-3">
      <h1>Search Bar Dropdown</h1>
      <SearchbarDropdown options={options} onInputChange={onInputChange} />
      <br />
      <Button>Search</Button>
    </div>
  );
}

export default Search;

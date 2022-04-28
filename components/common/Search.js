import axios from "axios";
import { API_URL } from "constants/api";
import Link from "next/link";
import React, { useCallback, useEffect, useRef, useState } from "react";

function Search() {
  const searchRef = useRef(null);
  const [result, setResult] = useState([]);
  const [field, setField] = useState("");
  const [error, setError] = useState(null);
  const [active, setActive] = useState(false);

  // async function getApi() {
  //   try {
  //     const response = await axios.get(API_URL);
  //     if (response.status === 200) {
  //       setResult(response.data);
  //     } else {
  //       setResult([]);
  //     }
  //   } catch (error) {
  //     setError(error.toString());
  //   }
  // }

  const onChange = useCallback(e => {
    const field = e.target.value.toLowerCase();
    setField(field);

    if (field.length) {
      console.log(field);
      console.log(result);
    }
  }, []);

  const onFocus = useCallback(() => {
    setActive(true);
    // window.addEventListener("click", onClick);
  }, []);

  const onClick = useCallback(e => {
    // if (searchRef.current && !searchRef.current.contains(field)) {
    //   setActive(false);
    //   window.removeEventListener("click", onClick);
    // }
  });
  // onChange={onChange} onFocus={onFocus}

  return (
    <div ref={searchRef}>
      <input placeholder="Search stays" type="text" onChange={onChange} onFocus={onFocus} />
      {active && result.length > 0 && (
        <ul>
          {/* <li key={id}>
            <Link href="/stays/[id]">
              <a>{title}</a>
            </Link>
          </li> */}
        </ul>
      )}
    </div>
  );
}

export default Search;

// useEffect(() => {
//   async function getApi() {
//     try {
//       const response = await axios.get(API_URL);
//       if (response.status === 200) {
//         stays = response.data;
//       } else {
//         setError("This wasnt good");
//       }
//     } catch (error) {
//       console.log(error);
//       setError(error.toString());
//     } finally {
//       // setLoading(false);
//     }
//   }
//   getApi();
// }, []);

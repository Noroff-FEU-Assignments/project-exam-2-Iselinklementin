import React, { useState, useRef } from "react";
import axios from "axios";
import { ADD_AUTH, BASE_URL } from "../../../constants/api";
import useAxios from "../../../hooks/useAxios";

function MediaForm() {
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState(false);
  const imgUpload = useRef(null);
  const [img, setImg] = useState("");
  // const pictureInput = document.querySelector(".picture-input");

  let http = useAxios();

  async function onSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    let file = imgUpload.current.files[0];
    formData.append("file", file);
    formData.append("title", "riktig data");
    formData.append("caption", "riktig data her og");

    const url = BASE_URL + "wp/v2/media";

    // setPicture(formData);
    try {
      // await axios.post(url, formData, {
      //   auth: ADD_AUTH,
      // });
      await http.post(url, formData);
      console.log(formData);
    } catch (error) {
      setServerError(error.toString());
    } finally {
      setSubmitted(false);
    }
  }
  return (
    <>
      <div>MediaForm</div>
      <form onSubmit={onSubmit}>
        <input type="file" id="imgUpload" ref={imgUpload} style={{ height: "35px" }} />
        {/* <input  type="file" ref={imgUpload} onChange={previewImage} /> */}
        <button type="submit">{submitted ? "sending.." : "send"}</button>
      </form>
    </>
  );
}

export default MediaForm;

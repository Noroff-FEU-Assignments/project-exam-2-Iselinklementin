import React, { useState, useRef } from "react";
import axios from "axios";
import { ADD_AUTH, BASE_URL } from "constants/api";
import useAxios from "hooks/useAxios";
import Image from "next/image";
import image_test from "components/images/img.png";

function MediaForm() {
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState(false);
  const imgUpload = useRef(null);
  const [img, setImg] = useState();

  let http = useAxios();

  function previewImage(event) {
    setImg(URL.createObjectURL(event.target.files[0]));
  }

  async function onSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    let file = imgUpload.current.files[0];
    formData.append("file", file);
    formData.append("title", "riktig data");
    formData.append("caption", "riktig data her og");

    const url = BASE_URL + "wp/v2/media";

    try {
      await http.post(url, formData);
      console.log(formData);
      console.log(file.name);
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
        <div className="img-div" style={{ position: "relative", width: "80vw", height: "66.66vw" }}>
          {img ? (
            <Image src={img} alt="image" layout="fill" objectFit="cover" />
          ) : (
            <Image src={image_test} alt="image" layout="fill" objectFit="cover" />
          )}
        </div>
        <input id="imgUpload" type="file" ref={imgUpload} onChange={previewImage} />
        <button type="submit">{submitted ? "sending.." : "send"}</button>
      </form>
    </>
  );
}

export default MediaForm;

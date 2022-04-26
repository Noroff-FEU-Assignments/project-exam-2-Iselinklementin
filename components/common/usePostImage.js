import React, { useContext, useRef } from "react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { MEDIA_URL } from "../../constants/api";
import useAxios from "../../hooks/useAxios";

export default function usePostImage(thisFile) {
  // const postImage = file => {
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);
  // const [media, setMedia] = useState(0);

  // const postToApi = () => {
  const formData = new FormData();
  formData.append("file", thisFile);
  formData.append("title", "riktig data");
  formData.append("caption", "riktig data her og");
  let http = useAxios();

  http
    .post(MEDIA_URL, formData)
    .then(response => {
      const postId = response.data.id;
    })
    .catch(error => {
      // setError(error.toString());
    });
  return { postId };
  // };
  // useEffect(() => {
  //   postImage();
  // }, []);
}
// }

import Image from "next/image";
import React, { useState } from "react";
import { API_URL, MEDIA_URL } from "../../constants/api";
import useApi from "../../hooks/useApi";

function UseImageFilter() {
  const [postImage, setPostimage] = useState("");
  const { loading, error, posts, media } = useApi(API_URL, MEDIA_URL);

  if (loading) return <h1>Loadinig</h1>;

  if (posts && media) {
    media.filter(img => {
      posts.find(stays => {
        if (img.post === stays.id) {
          setPostimage(img.source_url);
        }
      });
    });
  }

  return;
  //   <div style={{ position: "relative", width: "80vw", height: "66.66vw" }}>
  //     <p>huh</p>
  //     {/* <Image src={img.source_url} alt="image" layout="fill" objectFit="cover" /> */}
  //   </div>
  // );
}

export default UseImageFilter;

// // const MyComponent = () => {
// media.find(img => {
//   posts.find(stays => {
//     if (img.post === stays.id) {
//       setPostimage(img.source_url);
//       // console.log(stays);
//       // <div style={{ position: "relative", width: "80vw", height: "66.66vw" }}>
//       //   <p>huh</p>
//       //   <Image src={img.source_url} alt="image" layout="fill" objectFit="cover" />
//       // </div>;
//     }
//   });
// });
// // };

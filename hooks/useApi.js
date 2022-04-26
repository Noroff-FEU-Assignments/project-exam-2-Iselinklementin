import { useEffect, useState } from "react";
import axios from "axios";

const useApi = (post, images) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [posts, setPosts] = useState(null);
  const [media, setMedia] = useState(null);

  const getApi = () => {
    const postsAPI = axios.get(post);
    const mediaAPI = axios.get(images);

    axios
      .all([postsAPI, mediaAPI])
      .then(
        axios.spread((...responses) => {
          const posts = responses[0].data;
          const media = responses[1].data;
          setPosts(posts);
          setMedia(media);
          setLoading(false);
        })
      )
      .catch(error => {
        setError(error.toString());
      });
  };
  useEffect(() => {
    getApi();
  }, []);

  return { loading, error, posts, media };
};

export default useApi;

import axios from "axios";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { BASE_URL } from "../constants/api";

export default function useAxios() {
  const [auth] = useContext(AuthContext);

  const apiClient = axios.create({
    baseURL: BASE_URL,
  });

  apiClient.interceptors.request.use(config => {
    const token = auth.data.jwt;
    // const token = "nhHC xwcm oDMI jrVs 6lHy zlFK";
    config.headers.Authorization = token ? `Bearer ${token}` : "";
    return config;
  });

  return apiClient;
}

// export function useAxiosHeader() {
//   const [auth] = useContext(AuthContext);
// }

// headers = {'content-type': 'application/json', 'Authorization': "Bearer " + wordpress_token}

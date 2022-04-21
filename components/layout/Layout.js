import AuthContext from "../../context/AuthContext";
import { useContext } from "react";

export default function ({ children }) {
  const [auth, setAuth] = useContext(AuthContext);

  return (
    <>
      <nav>Here is nav</nav>
      <div>{children}</div>
    </>
  );
}

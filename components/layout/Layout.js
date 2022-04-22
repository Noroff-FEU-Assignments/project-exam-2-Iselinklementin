import AuthContext from "../../context/AuthContext";
import { useContext } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function ({ children }) {
  const [auth, setAuth] = useContext(AuthContext);

  return (
    <>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/admin">
          <a>Admin</a>
        </Link>
        <Link href="/enquire">
          <a>Enquire</a>
        </Link>
      </nav>
      <div>{children}</div>
    </>
  );
}

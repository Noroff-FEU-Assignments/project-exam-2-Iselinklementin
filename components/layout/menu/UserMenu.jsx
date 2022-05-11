import AuthContext from "context/AuthContext";
import { useContext } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Stays from "assets/stays.svg";
import Icon, { icons } from "constants/icons";
import Link from "next/link";
import { StyledIconContainer, StyledLogoutBtn } from "../layout.styles";

export const UserMenu = () => {
  const [auth, setAuth] = useContext(AuthContext);
  const router = useRouter();

  function logout() {
    setAuth(null);
    router.push("/");
  }

  return (
    <>
      <Link href="/stays">
        <a className="d-flex align-items-center my-2">
          <StyledIconContainer>
            <Image src={Stays} alt="Icon, a house with a chimney" width="21.6" height="15" />
          </StyledIconContainer>
          Stays
        </a>
      </Link>
      <hr />
      <Link href="/add">
        <a className="d-flex align-items-center my-2">
          <StyledIconContainer>
            <Icon icon={icons.map((icon) => icon.plus)} />
          </StyledIconContainer>
          Add stay
        </a>
      </Link>
      <hr />
      <Link href="/admin">
        <a className="d-flex align-items-center my-2">
          <StyledIconContainer>
            <Icon icon={icons.map((icon) => icon.user)} fontSize="16px" className="userIcon" />
          </StyledIconContainer>
          Admin
        </a>
      </Link>
      <hr />
      <Link href="/contact">
        <a className="d-flex align-items-center my-2">
          <StyledIconContainer>
            <Icon icon={icons.map((icon) => icon.email)} fontSize="17px" />
          </StyledIconContainer>
          Contact us
        </a>
      </Link>
      <hr />
      <StyledLogoutBtn onClick={logout}>
        <StyledIconContainer>
          <Icon icon={icons.map((icon) => icon.logout)} className="logout-icon" />
        </StyledIconContainer>
        Log out
      </StyledLogoutBtn>
    </>
  );
};

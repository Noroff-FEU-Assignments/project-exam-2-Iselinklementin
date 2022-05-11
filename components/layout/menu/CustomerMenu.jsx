import Image from "next/image";
import Stays from "assets/stays.svg";
import Icon, { icons } from "constants/icons";
import Link from "next/link";
import { StyledIconContainer } from "../layout.styles";

export const CustomerMenu = () => {
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
      <Link href="/contact">
        <a className="d-flex align-items-center my-2">
          <StyledIconContainer>
            <Icon icon={icons.map((icon) => icon.email)} fontSize="17px" />
          </StyledIconContainer>
          Contact us
        </a>
      </Link>
      <hr />
      <Link href="/login">
        <a className="d-flex align-items-center my-2">
          <StyledIconContainer>
            <Icon icon={icons.map((icon) => icon.user)} fontSize="16px" className="userIcon" />
          </StyledIconContainer>
          Login
        </a>
      </Link>
    </>
  );
};

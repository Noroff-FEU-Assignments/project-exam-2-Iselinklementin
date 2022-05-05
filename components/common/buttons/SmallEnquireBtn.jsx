import Link from "next/link";
import { StyledEnquireBtn } from "./Button.styles";
import Icon, { icons } from "constants/icons";

export const SmallEnquireBtn = () => {
  return (
    <Link href="/enquire">
      <StyledEnquireBtn className="btn btn-primary">
        <Icon icon={icons.map((icon) => icon.bag)} color="white" fontSize="16px" />
      </StyledEnquireBtn>
    </Link>
  );
};

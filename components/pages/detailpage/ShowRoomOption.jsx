import { StyledMobileButton } from "components/common/buttons/Button.styles";
import Paragraph from "components/typography/Paragraph";
import Icon, { icons } from "constants/icons";
import Link from "next/link";
import styled from "styled-components";
import { HotelOptions } from "./HotelOptions";

const StyledRoomContainer = styled.div`
  background: ${props => props.theme.light};
`;

export const ShowRoomOption = ({ stay_type, room_type, price, id, info }) => {
  let SELECT_OPTIONS = [];

  if (stay_type === "Hotel") {
    room_type.map(room => {
      let rooms = { value: room, label: room };
      SELECT_OPTIONS.push(rooms);
    });

    return (
      <StyledRoomContainer className="p-3 pt-4 mt-4">
        <HotelOptions options={SELECT_OPTIONS} id={id} />
        <Paragraph className="mt-3">
          Price from: <span className="fw-bold">{price},- / night</span>
        </Paragraph>
      </StyledRoomContainer>
    );
  } else if (stay_type === "Apartment" || stay_type === "Bed & Breakfast") {
    return (
      <>
        <Paragraph>{info}</Paragraph>
        <Paragraph className="mt-3">
          Price from: <span className="fw-bold">{price},- / night</span>
        </Paragraph>
        <Link href={{ pathname: `/enquire/${id}`, query: { room: stay_type } }} className="mt-4">
          <StyledMobileButton className="btn primary-btn mt-4" role="button">
            <Icon
              icon={icons.map(icon => icon.bag)}
              color="white"
              fontSize="16px"
              className="me-2"
            />
            Enquire
          </StyledMobileButton>
        </Link>
      </>
    );
  }

  // return (

  // )
};

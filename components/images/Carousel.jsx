import { Carousel } from "react-bootstrap";
import { device } from "global/ThemeConfig";
import styled from "styled-components";
import Paragraph from "components/typography/Paragraph";
import Image from "next/image";

const StyledCarousel = styled(Carousel)`
  @media ${device.laptop} {
    width: 60%;
  }

  > .carousel-indicators {
    display: none;
  }

  > .carousel-control-next {
    opacity: 1;
    height: 45px;
    width: 45px;
    border: white solid 1.5px;
    border-radius: 50%;
    top: 40%;
    right: 10px;

    .carousel-control-next-icon {
      width: 1.2rem;
      height: 1.2rem;
    }
    /* @media ${device.laptop} {
      right: -20px;
    } */
  }

  > .carousel-control-prev {
    opacity: 1;
    height: 45px;
    width: 45px;
    border: white solid 1.5px;
    border-radius: 50%;
    top: 40%;
    left: 10px;

    .carousel-control-prev-icon {
      width: 1.2rem;
      height: 1.2rem;
    }

    /* @media ${device.laptop} {
      left: -20px;
    } */
  }
`;

// Reusable Carousel-function

export default function Carousels(props) {
  return (
    <StyledCarousel>
      {props.stays.map((stay) => {
        return (
          <Carousel.Item key={stay} style={{ width: "100vw", height: "80vw" }}>
            <Image src={stay} layout="fill" objectFit="cover" />
          </Carousel.Item>
        );
      })}
    </StyledCarousel>
  );
}

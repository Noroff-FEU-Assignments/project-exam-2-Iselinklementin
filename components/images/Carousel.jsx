import { Carousel } from "react-bootstrap";
import { device } from "global/ThemeConfig";
import styled from "styled-components";
import Paragraph from "components/typography/Paragraph";
import Image from "next/image";

const StyledCarousel = styled(Carousel)`
  width: 100%;

  @media ${device.laptop} {
    width: 60%;
  }

  .carousel-caption {
    margin-bottom: -0.5rem;

    @media ${device.laptop} {
      margin-bottom: 0;
    }
  }

  > .carousel-indicators {
    margin-bottom: 5px;

    & button {
      width: 15px;
    }

    & .active {
      background-color: ${(props) => props.theme.backgroundColour};
    }
  }

  > .carousel-control-next {
    @media ${device.laptop} {
      right: -20px;
    }
  }

  > .carousel-control-prev {
    @media ${device.laptop} {
      left: -20px;
    }
  }
`;

const StyledCaption = styled(Carousel.Caption)`
  padding-bottom: 0;
  display: none;

  @media ${device.tablet} {
    display: block;
  }
`;

const StyledHeadline = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 2px;
`;

// Reusable Carousel-function

export default function Carousels(props) {
  return (
    <StyledCarousel variant="dark">
      {props.stays.map((stay) => {
        return (
          <Carousel.Item>
            <Image src={stay} width={320} height={320} />;
          </Carousel.Item>
        );
      })}
    </StyledCarousel>
  );
}

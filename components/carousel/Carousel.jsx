import { Carousel } from "react-bootstrap";
import { device } from "styles/global/ThemeConfig";
import styled from "styled-components";
import Image from "next/image";
import Placeholder from "assets/placeholder.jpg";

const StyledCarousel = styled(Carousel)`
  .carousel-item,
  .carousel-item-start {
    width: 100%;
    height: 500px;

    @media ${device.laptop} {
      width: 500px;
      height: 600px;
    }
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
    top: 45%;
    right: 10px;

    .carousel-control-next-icon {
      width: 1.2rem;
      height: 1.2rem;
    }
  }

  > .carousel-control-prev {
    opacity: 1;
    height: 45px;
    width: 45px;
    border: white solid 1.5px;
    border-radius: 50%;
    top: 45%;
    left: 10px;

    .carousel-control-prev-icon {
      width: 1.2rem;
      height: 1.2rem;
    }
  }
`;

// Reusable Carousel-function

export default function Carousels(props) {
  return (
    <StyledCarousel>
      {props.stays.map((stay) => {
        let url = stay[0];
        let alt = stay[1];

        return (
          <Carousel.Item key={url}>
            <Image
              // blurDataURL={Placeholder}
              src={url}
              alt={alt}
              layout="fill"
              objectFit="cover"
              objectPosition="bottom center"
            />
          </Carousel.Item>
        );
      })}
    </StyledCarousel>
  );
}
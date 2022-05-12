import styled from "styled-components";
import Image from "next/image";
import Mountain from "assets/mountain.svg";
import Bryggen from "assets/bryggen.svg";
import { device } from "global/ThemeConfig";
import Heading from "components/typography/Heading";
import Paragraph from "components/typography/Paragraph";

const StyledImageIntroContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 300px;

  @media ${device.mobile_large} {
    height: 200px;
  }

  .mountain-container {
    @media ${device.mobile_large} {
      position: relative;
      margin: auto;
      height: 200px;
      width: 600px;
    }

    .mountain {
      opacity: 0.3;
    }
  }

  .bryggen {
    position: absolute;
    padding: 1rem;
    height: 200px;
    width: 100%;
    bottom: -2rem;

    @media ${device.mobile_large} {
      width: 80%;
      width: 320px;
      left: 0;
      right: 0;
      margin: auto;
      bottom: -4rem;
    }
  }
`;

const StyledIntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border-top: solid thin grey;
  padding-top: 3rem;
  margin: auto;
  margin-top: -2.8rem;

  @media ${device.mobile_large} {
    width: 600px;
    margin-top: -1.9rem;
  }

  p {
    max-width: 300px;
  }
`;

export const Intro = () => {
  return (
    <>
      <StyledImageIntroContainer>
        <div className="mountain-container">
          <Image
            src={Mountain}
            alt="Mountains in the background"
            layout="fill"
            objectFit="cover"
            className="mountain"
          />
        </div>

        <div className="bryggen">
          <Image src={Bryggen} alt="Bryggen in Bergen" layout="responsive" objectFit="cover" />
        </div>
      </StyledImageIntroContainer>
      <StyledIntroContainer>
        <Heading>Welcome to Bergen</Heading>
        <Paragraph>We in Holiday have the best places to stay, handpicked for you!</Paragraph>
      </StyledIntroContainer>
    </>
  );
};

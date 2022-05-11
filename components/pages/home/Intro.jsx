import styled from "styled-components";
import Image from "next/image";
import Mountain from "assets/mountain.svg";
import Bryggen from "assets/bryggen.svg";
import { device } from "global/ThemeConfig";

const StyledImageIntroContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 300px;

  /* @media ${device.tablet} {
    border-bottom: 1px solid grey;
  } */

  .mountain {
    opacity: 0.3;
  }

  .bryggen {
    position: absolute;
    padding: 1rem;
    height: 200px;
    width: 100%;
    bottom: -2rem;

    @media ${device.tablet} {
      width: 60%;
      left: 0;
      right: 0;
      margin: auto;
      bottom: 0;
    }
  }
`;

export const Intro = () => {
  return (
    <StyledImageIntroContainer>
      <Image src={Mountain} alt="Mountains in the background" layout="fill" objectFit="cover" className="mountain" />
      <div className="bryggen">
        <Image src={Bryggen} alt="Bryggen in Bergen" layout="responsive" objectFit="cover" />
      </div>
    </StyledImageIntroContainer>
  );
};

// style={{ opacity: "0.3" }}

import { Container } from "react-bootstrap";
import Icon, { icons } from "constants/icons";
import Heading from "components/typography/Heading";
import Paragraph from "components/typography/Paragraph";
import Link from "next/link";
import { useWindowSize } from "hooks/useWindowSize";
import { SCREEN } from "constants/misc";
import styled from "styled-components";
import { device } from "global/ThemeConfig";
import { StyledIconContainer } from "components/layout/layout.styles";

export const StyledLinkStaysContainer = styled.div`
  margin-top: 3rem;
  max-width: 960px;
  margin: auto;

  @media ${device.small_tablet} {
    display: flex;
    margin-top: 1.5rem;
  }

  .contain-text {
    margin-top: 1.5rem;
    border-radius: 8px;
    border: ${(props) => props.theme.body} solid 1px;
    padding: 2rem 1rem 1rem 1rem;

    :hover {
      /* transform: scale(1.001); */
      /* box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15); */
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
      transition: box-shadow 0.2s ease-in-out;
      /* border: solid 1px ${(props) => props.theme.primaryColour}; */
    }
  }

  .heading-container {
    display: flex;
    align-items: center;

    svg {
      margin-top: -0.5rem;
    }
  }

  h3 {
    font-size: 18px;
  }

  a:hover {
    color: ${(props) => props.theme.body};
  }
`;

export const LinkStays = () => {
  // const size = useWindowSize();
  return (
    <StyledLinkStaysContainer>
      <Container>
        <Link href="/stays">
          <a>
            <div className="contain-text">
              <div className="heading-container">
                <Icon icon={icons.map((icon) => icon.hotel)} />
                <Heading size="3" fontSize="18px" className="ms-2">
                  Hotels
                </Heading>
              </div>
              <Paragraph>We work hard to find the best local places.</Paragraph>
            </div>
          </a>
        </Link>
      </Container>

      <Container>
        <Link href="/stays">
          <a>
            <div className="contain-text">
              <div className="heading-container">
                <Icon icon={icons.map((icon) => icon.apartment)} />
                <Heading size="3" fontSize="18px" className="ms-2 ">
                  Apartments
                </Heading>
              </div>
              <Paragraph>We work hard to find the best local places.</Paragraph>
            </div>
          </a>
        </Link>
      </Container>

      <Container>
        <Link href="/stays">
          <a>
            <div className="contain-text">
              <div className="heading-container">
                <Icon icon={icons.map((icon) => icon.bed)} />
                <Heading size="3" fontSize="18px" className="ms-2">
                  Bed & Breakfast
                </Heading>
              </div>
              <Paragraph>We work hard to find the best local places.</Paragraph>
            </div>
          </a>
        </Link>
      </Container>
    </StyledLinkStaysContainer>
  );
};

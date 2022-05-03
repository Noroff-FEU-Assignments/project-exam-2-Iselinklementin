import { Container, Button, Card, Row, Col, Badge } from "react-bootstrap";
import { StyledCard } from "styles/StyledCard.styles";
import Icon, { icons } from "lib/icons";
import Image from "next/image";
import IntroImg from "assets/index_img.jpg";
import React from "react";
import Link from "next/link";

function StaysCard(props) {
  // let matches = str.match(/\d+/g);
  return (
    <Row className="g-5 gy-5">
      {props.stays.map((stay) => {
        let stars = JSON.stringify(stay.acf.stars);
        let numbersOfStars = parseInt(stars.charAt(2));
        let includes = Object.entries(stay.acf.stay_includes);

        function capitalizeFirstLetter(string) {
          return string.charAt(0).toUpperCase() + string.slice(1);
        }

        return (
          <Col sm={6} lg={4} key={stay.id}>
            <Link href={`stay/${stay.id}`}>
              <StyledCard>
                <Badge bg="light" text="dark" className="pe-3">
                  <Icon icon={icons.map((icon) => icon.location)} color="#FC5156" className="me-1" />
                  {stay.acf.address.short_description}
                </Badge>
                <Image variant="top" src={stay.acf.image.image_1.url} width={320} height={320} className="card-img" />
                <Card.Body>
                  <Card.Title>{stay.acf.title}</Card.Title>
                  <div className="rating-container mb-3">
                    {[...Array(numbersOfStars)].map((e, i) => (
                      <Icon
                        icon={icons.map((icon) => icon.star)}
                        key={i}
                        color="white"
                        className="me-1"
                        fontSize="10px"
                      />
                    ))}
                  </div>
                  <Card.Text>
                    {includes.map((include) =>
                      include[1] ? <span className="me-2">{capitalizeFirstLetter(include[0])} </span> : ""
                    )}
                  </Card.Text>
                </Card.Body>
              </StyledCard>
            </Link>
          </Col>
        );
      })}
    </Row>
  );
}

export default StaysCard;

import { Container, Button, Card, Row, Col, Badge } from "react-bootstrap";
import { StyledCard } from "styles/StyledCard.styles";
import Icon, { icons } from "lib/icons";
import Image from "next/image";
import IntroImg from "assets/index_img.jpg";
import React from "react";

function StaysCard() {
  return (
    <StyledCard>
      <Badge bg="light" text="dark" className="pe-3">
        <Icon icon={icons.map((icon) => icon.location)} color="#FC5156" className="me-1" />
        Centrum
      </Badge>
      <Image variant="top" src={IntroImg} className="card-img" />
      <Card.Body>
        <Card.Title>Small condo</Card.Title>
        <div className="rating-container mb-3">
          <Icon icon={icons.map((icon) => icon.star)} color="white" className="me-1" fontSize="12px" />
          <Icon icon={icons.map((icon) => icon.star)} color="white" className="me-1" fontSize="12px" />
          <Icon icon={icons.map((icon) => icon.star)} color="white" className="me-1" fontSize="12px" />
          <Icon icon={icons.map((icon) => icon.star)} color="white" className="me-1" fontSize="12px" />
        </div>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </StyledCard>
  );
}

export default StaysCard;

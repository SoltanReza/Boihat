import React from "react";
import { Container, TextContainer } from "./Card.elements";
export default function Card(props) {
  return (
    <Container>
      <img src={props.img} alt="" />

      <TextContainer>
        <h5>{props.trackName}</h5>
        <p>{props.description}</p>
      </TextContainer>
    </Container>
  );
}

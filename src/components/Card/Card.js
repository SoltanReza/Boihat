import React from "react";
import { Container, TextContainer } from "./Card.elements";
export default function Card(props) {
  console.log(props.link);
  return (
    <a href={props.link}>
      <Container>
        <img src={props.img.url()} alt="" />

        <TextContainer>
          <h5>{props.trackName}</h5>
          <p>{props.description}</p>
        </TextContainer>
      </Container>
    </a>
  );
}

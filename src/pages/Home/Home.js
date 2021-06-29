import React from "react";
import { Img, Container } from "./Home.elements";
import Hajitoon from "assets/Hajitoon.jpg";
export default function Home() {
  return (
    <Container>
      <Img src={Hajitoon} />
      <p>hi</p>
    </Container>
  );
}

import React from "react";
import { Img, Container } from "./Home.elements";
import Hajitoon from "assets/Hajitoon.jpg";
export default function Home() {
  return (
    <Container>
      <Img src={Hajitoon} />
      <p>
        Hi!
        <br />
        I am an 18-year-old music producer/sample maker from Iran based in
        Turkey who follows his dreams. Be in touch for inquires and exclusive
        beats on the contact tab.
        <br />
        GET LIT
      </p>
    </Container>
  );
}

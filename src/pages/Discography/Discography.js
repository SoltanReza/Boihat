import React, { useEffect } from "react";
import {
  BigCard,
  BigCardTextContainer,
  CardsContainer,
  Container,
} from "./Discography.elements";
import Card from "components/Card/Card";
import Hajitoon from "assets/Hajitoon.jpg";
import { Button } from "globalStyles";
const Parse = require("parse");

export default function Discography() {
  const fetchVideos = () => {
    const Videos = Parse.Object.extend("Videos");
    const query = new Parse.Query(Videos);
    query.find().then((res) => {
      console.log(res);
    });
  };
  useEffect(() => {
    fetchVideos();
  }, []);
  return (
    <Container>
      <BigCard>
        <img src={Hajitoon} alt="track cover" />
        <BigCardTextContainer>
          <h3>Track name</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis
            dolores quo nisi reiciendis porro? Necessitatibus esse mollitia
            repellat eaque aperiam, molestiae, veritatis dignissimos rerum
            exercitationem ullam, quaerat dolore optio voluptate.
          </p>
          <Button>Listen Now</Button>
        </BigCardTextContainer>
      </BigCard>

      <CardsContainer>
        <Card
          img={Hajitoon}
          trackName="t name"
          description="desssssssssssssss"
        />
        <Card
          img={Hajitoon}
          trackName="t name"
          description="desssssssssssssss"
        />
        <Card
          img={Hajitoon}
          trackName="t name"
          description="desssssssssssssss"
        />
        <Card
          img={Hajitoon}
          trackName="t name"
          description="desssssssssssssss"
        />
        <Card
          img={Hajitoon}
          trackName="t name"
          description="desssssssssssssss"
        />
        <Card
          img={Hajitoon}
          trackName="t name"
          description="desssssssssssssss"
        />
        <Card
          img={Hajitoon}
          trackName="t name"
          description="desssssssssssssss"
        />
      </CardsContainer>
    </Container>
  );
}

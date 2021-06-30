import React, { useEffect, useState } from "react";
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
  const [musicsArr, setMusicsArr] = useState([]);
  const [bigCard, setBigcard] = useState();

  const fetchVideos = () => {
    const Musics = Parse.Object.extend("Musics");
    const query = new Parse.Query(Musics);
    query.descending("createdAt");
    query.find().then((res) => {
      let items = [];
      for (let j = 0; j < res.length; j++) {
        const i = res[j];

        if (j === 0) {
          setBigcard(
            <BigCard>
              <img src={i.get("cover").url()} alt="track cover" />
              <BigCardTextContainer>
                <h3>{i.get("title")}</h3>
                <p>{i.get("description")}</p>
                <a href={i.get("url")}>
                  {" "}
                  <Button>Listen Now</Button>
                </a>
              </BigCardTextContainer>
            </BigCard>
          );
        } else {
          items.push(
            <Card
              img={i.get("cover")}
              trackName={i.get("title")}
              description={i.get("description")}
              link={i.get("url")}
            />
          );
        }
      }
      setMusicsArr(items);
    });
  };
  useEffect(() => {
    fetchVideos();
  }, []);
  return (
    <Container>
      {bigCard}

      <CardsContainer>{musicsArr}</CardsContainer>
    </Container>
  );
}

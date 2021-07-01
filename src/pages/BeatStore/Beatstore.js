import React, { useEffect, useState } from "react";
import {
  BigCard,
  BigCardTextContainer,
  CardsContainer,
  Container,
} from "./BeatStore.elements";
import { Card, LoadingIndicator } from "components/index";
import { Button } from "globalStyles";
import { trackPromise } from "react-promise-tracker";
const Parse = require("parse");

export default function BeatStore() {
  const [beatArr, setBeatArr] = useState([]);
  const [bigCard, setBigcard] = useState();

  const fetchVideos = () => {
    const Beats = Parse.Object.extend("Beats");
    const query = new Parse.Query(Beats);
    query.descending("createdAt");
    trackPromise(
      query.find().then((res) => {
        console.log(res);
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
        setBeatArr(items);
      })
    );
  };
  useEffect(() => {
    fetchVideos();
  }, []);
  return (
    <Container>
      {bigCard}
      <LoadingIndicator />
      <CardsContainer>{beatArr}</CardsContainer>
    </Container>
  );
}

import React, { useEffect, useState } from "react";
import { Container } from "./ContactMessages.elements";
import { MessageItem } from "components";
const Parse = require("parse");

export default function ContactMessages() {
  const [boxes, setBoxes] = useState([]);
  const Contacts = Parse.Object.extend("Contacts");
  const query = new Parse.Query(Contacts);

  useEffect(() => {
    query.descending("createdAt");
    query.find().then((res) => {
      let items = [];
      res.forEach((i) => {
        items.push(<MessageItem data={i} />);
      });
      setBoxes(items);
    });
  }, []);
  return <Container>{boxes}</Container>;
}

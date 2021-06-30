import React from "react";
import { Container } from "./MessageItem.elements";
export default function MessageItem({ data }) {
  return (
    <Container>
      <h3>
        subject : <span> {data.get("subject")} </span>
      </h3>
      <h3>
        email : <span> {data.get("email")} </span>
      </h3>

      <p>
        <h3> message: </h3> {data.get("messages")}
      </p>
    </Container>
  );
}

import React, { useState } from "react";
import {
  Pic,
  Input,
  Form,
  TextArea,
  ContactWrapper,
  ContactButton,
} from "./Contacts.elements";
import hajitoon from "assets/Hajitoon.jpg";
const Parse = require("parse");
export default function Contact() {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    const Contacts = Parse.Object.extend("Contacts");
    const query = new Contacts();
    query.set("email", email);
    query.set("subject", subject);
    query.set("messages", message);
    query.save().then((res) => {
      alert("sent");
    });
  };
  return (
    <>
      <ContactWrapper>
        <Pic src={hajitoon} />
        <Form>
          <div>
            <Input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder="Email"
            />
            <Input
              onChange={(e) => setSubject(e.target.value)}
              value={subject}
              placeholder="Subject"
            />
          </div>

          <TextArea
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            placeholder="hi"
          />
          <ContactButton onClick={handleSubmit} type="submit">
            Submit
          </ContactButton>
        </Form>
      </ContactWrapper>
    </>
  );
}

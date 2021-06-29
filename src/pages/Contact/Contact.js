import React from "react";
import {
  Pic,
  Input,
  Form,
  TextArea,
  ContactWrapper,
  ContactButton,
} from "./Contacts.elements";
import hajitoon from "assets/Hajitoon.jpg";
export default function Contact() {
  return (
    <>
      <ContactWrapper>
        <Pic src={hajitoon} />
        <Form>
          <div>
            <Input placeholder="Email" />
            <Input placeholder="Subject" />
          </div>

          <TextArea placeholder="hi" />
          <ContactButton>Submit</ContactButton>
        </Form>
      </ContactWrapper>
    </>
  );
}

import React, { useRef, useState } from "react";
import {
  Container,
  Form,
  Input,
  FormButton,
  FileInput,
} from "./UploadPage.elements";

const Parse = require("parse");

export default function UploadPage() {
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [description, setDescription] = useState("");
  const [img, setImg] = useState();
  const FileRef = useRef(null);
  const Videos = Parse.Object.extend("Videos");

  const handleSubmit = () => {
    const query = new Videos();
    query.set("title", title);
    query.set("description", description);
    query.set("url", link);
    query.save().then((res) => {
      console.log(res);
    });
  };
  const handleClick = (e) => {
    FileRef.current.click();
  };

  const handleImg = (event) => {
    setImg(event.target.files[0]);
  };
  return (
    <Container>
      <Input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="title"
      />
      <Input
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <Input
        value={link}
        onChange={(e) => setLink(e.target.value)}
        placeholder="Link Youtube"
      />

      <FormButton onClick={handleClick}>Image file</FormButton>
      <input
        type="file"
        ref={FileRef}
        onChange={handleImg}
        accept="image/*"
        style={{ display: "none" }}
      />
      <FormButton onClick={handleSubmit}>Upload</FormButton>
    </Container>
  );
}

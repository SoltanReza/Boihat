import React, { useRef, useState } from "react";
import {
  Container,
  Form,
  Input,
  FormButton,
  FileInput,
  SwitchContainer,
} from "./UploadPage.elements";
import Switch from "react-switch";
const Parse = require("parse");

export default function UploadPage() {
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [description, setDescription] = useState("");
  const [beatstars, setBeatstars] = useState(false);
  const [img, setImg] = useState();
  const [checked, setChecked] = useState(false);
  const FileRef = useRef(null);
  const Videos = Parse.Object.extend("Videos");
  const Musics = Parse.Object.extend("Musics");
  const Beats = Parse.Object.extend("Beats");

  const handleYoutube = () => {
    const query = new Videos();
    query.set("title", title);
    query.set("description", description);
    query.set("url", link);
    query.save().then((res) => {
      alert("uploaded");
    });
  };
  const handleMusic = () => {
    const query = new Musics();
    query.set("title", title);
    query.set("description", description);
    query.set("url", link);
    const file = new Parse.File(img.name, img);
    query.set("cover", file);
    query.save().then((res) => {
      alert("uploaded");
    });
  };

  const handleBeats = () => {
    const query = new Beats();
    query.set("title", title);
    query.set("description", description);
    query.set("url", link);
    const file = new Parse.File(img.name, img);
    query.set("cover", file);
    query.save().then((res) => {
      alert("uploaded");
    });
  };
  const handleSubmit = () => {
    checked ? handleYoutube() : handleMusicClass();
  };
  const handleClick = (e) => {
    FileRef.current.click();
  };

  const handleSwitch = () => {
    setChecked(!checked);
  };
  const handleBeatstars = () => {
    setBeatstars(!beatstars);
  };
  const handleMusicClass = () => {
    beatstars ? handleBeats() : handleMusic();
  };

  const handleImg = (event) => {
    setImg(event.target.files[0]);
  };
  return (
    <Container>
      <SwitchContainer>
        Music <Switch onChange={handleSwitch} checked={checked} /> YOUTUBE
      </SwitchContainer>
      {!checked && (
        <SwitchContainer>
          Discography <Switch onChange={handleBeatstars} checked={beatstars} />
          Beatstore
        </SwitchContainer>
      )}
      <Input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="title"
        disabled={checked}
      />
      <Input
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        disabled={checked}
      />
      <Input
        value={link}
        onChange={(e) => setLink(e.target.value)}
        placeholder="Link"
      />
      {!checked ? (
        <FormButton onClick={handleClick}>Image file</FormButton>
      ) : null}
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

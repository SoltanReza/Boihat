import React, { useEffect, useState } from "react";
import { VideosWrapper, Container } from "./Videos.elements";
import ReactPlayer from "react-player/youtube";
const Parse = require("parse");

function Videos() {
  const [videos, setVideos] = useState([]);
  const fetchVideos = () => {
    const Videos = Parse.Object.extend("Videos");
    const query = new Parse.Query(Videos);
    query.find().then((res) => {
      const arr = [];
      res.forEach((v) => {
        arr.push(v.get("url"));
      });
      console.log(res);
      setVideos(arr);
    });
  };
  useEffect(() => {
    fetchVideos();
  }, []);
  return (
    <Container>
      <VideosWrapper>
        {videos &&
          videos.map((u) => {
            return <ReactPlayer style={{ maxWidth: "500px" }} url={u} />;
          })}
      </VideosWrapper>
    </Container>
  );
}

export default React.memo(Videos);

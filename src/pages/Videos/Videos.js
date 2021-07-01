import React, { useEffect, useState } from "react";
import { VideosWrapper, Container, VideoPlayer } from "./Videos.elements";
import ReactPlayer from "react-player/youtube";
import { trackPromise } from "react-promise-tracker";
import { LoadingIndicator } from "components";
const Parse = require("parse");

function Videos() {
  const [videos, setVideos] = useState([]);
  const fetchVideos = () => {
    const Videos = Parse.Object.extend("Videos");
    const query = new Parse.Query(Videos);
    query.descending("createdAt");
    trackPromise(
      query.find().then((res) => {
        const arr = [];
        res.forEach((v) => {
          arr.push(v.get("url"));
        });
        console.log(res);
        setVideos(arr);
      })
    );
  };
  useEffect(() => {
    fetchVideos();
  }, []);
  return (
    <Container>
      <VideosWrapper>
        <LoadingIndicator />
        {videos &&
          videos.map((u) => {
            return <VideoPlayer url={u} />;
          })}
      </VideosWrapper>
    </Container>
  );
}

export default React.memo(Videos);

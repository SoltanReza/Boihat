import ReactPlayer from "react-player";
import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  place-items: center;
`;
export const VideosWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;

  @media screen and (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;
export const VideoPlayer = styled(ReactPlayer)`
  max-width: 500px;

  @media screen and (max-width: 1008px) {
    max-width: 400px;
  }

  @media screen and (max-width: 640px) {
    max-width: 300px;
  }
`;

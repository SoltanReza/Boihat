import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
`;
export const Img = styled.img`
  height: 70vh;
  @media screen and (max-width: 1008px) {
    height: 40vh;
    font-size: 0.9em;
  }
  @media screen and (max-width: 640px) {
    height: 30vh;
    font-size: 0.8em;
  }
`;

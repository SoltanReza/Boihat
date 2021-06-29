import styled from "styled-components";

export const Container = styled.div`
  cursor: pointer;
  position: relative;
  width: 250px;
  height: 250px;
  margin-bottom: 50px;
  overflow: hidden;
  background: #ffffff;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  h5,
  p {
    margin: 0 10px;
  }

  @media screen and (max-width: 1008px) {
    width: 200px;
    height: 200px;
    margin-bottom: 35px;
    background: #ffffff;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
    font-size: 0.9em;
    h5,
    p {
      margin: 0 10px;
    }
  }

  @media screen and (max-width: 640px) {
    width: 100%;
    height: 100%;
    margin-bottom: 35px;
    background: #ffffff;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
    font-size: 0.8em;
    h5,
    p {
      margin: 0 10px;
    }
  }
`;

export const TextContainer = styled.div`
  display: none;
  color: black;
  background-color: rgba(255, 153, 0, 0.7);
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 5px;
  ${Container}:hover & {
    display: block;
  }

  @media screen and (max-width: 1008px) {
    padding: 0;
  }
`;

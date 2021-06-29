import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  place-items: center;
`;
export const BigCard = styled.div`
  padding: 40px;
  background: #ffffff;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  width: 70%;
  height: 400px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  img {
    width: 350px;
    height: 350px;
    border-radius: 20px;
    object-fit: cover;
  }
  button {
    margin-top: 20px;
    justify-self: flex-end;
  }

  @media screen and (max-width: 1008px) {
    padding: 20px;
    font-size: 0.9em;
    img {
      width: 80%;
      height: 250px;
      border-radius: 15px;
      margin-right: 10px;
    }
    button {
      margin-top: 15px;
    }
  }

  @media screen and (max-width: 640px) {
    width: fit-content;
    height: fit-content;
    flex-direction: column;
    padding: 10px;
    img {
      width: auto;
      border-radius: 15px;
    }
    button {
      margin-top: 15px;
    }
  }
`;
export const BigCardTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 50%;

  @media screen and (max-width: 640px) {
    max-width: 90%;
    font-size: 0.8em;
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  width: 80%;
  margin-top: 50px;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const Card = styled.div``;

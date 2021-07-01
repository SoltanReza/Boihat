import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  min-width: 250px;
  flex-direction: column;
  border-radius: 10px;
  margin: 10px;
  padding: 10px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
  text-align: left;
  span {
    color: gray;
  }
  @media screen and (max-width: 640px) {
    h3 {
      font-size: 0.8em;
    }
    p {
    }
  }
`;

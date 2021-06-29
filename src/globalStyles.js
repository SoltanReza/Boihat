import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
export const Container = styled.div`
  padding: 10px;
  min-height: 85vh;
`;

export const Button = styled.button`
  outline: none;
  border-color: transparent;
  border-radius: 30px;
  background-color: black;
  color: white;
  padding: 0.5em 0.75em;
  font-size: 1.5em;
  cursor: pointer;
  &:hover {
    margin-top: 18px;
    box-shadow: -2px 5px orange;
  }

  @media screen and (max-width: 1008px) {
    border-radius: 25px;
    padding: 0.25em 0.5em;
    font-size: 1.2em;
    &:hover {
      margin-top: 18px;
      box-shadow: -2px 5px orange;
    }
  }
`;

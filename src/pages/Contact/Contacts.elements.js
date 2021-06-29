import { Button } from "globalStyles";
import styled from "styled-components";

export const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Pic = styled.img`
  width: 200px;
  border-radius: 10px;
`;

export const Form = styled.form`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 100%;
  }
  /* @media screen and (max-width: 640px) {
    width: 70%;
  } */
  @media screen and (max-width: 365px) {
    width: 70%;
  }
`;
export const Input = styled.input`
  display: block;
  width: auto;
  border: 2px solid #dddddd;
  outline: none;
  padding: 0.5em 1em;
  margin-bottom: 20px;
  border-radius: 5px;
  &:hover,
  &:focus {
    border: 2px solid black;
  }

  @media screen and (max-width: 640px) {
    margin-left: 0;
    max-width: 50%;
  }
`;
export const TextArea = styled.textarea`
  border: 2px solid #dddddd;
  resize: none;
  width: 100%;
  min-height: 200px;
  outline: none;
  padding: 1em;
  border-radius: 5px;

  &:hover,
  &:focus {
    border: 2px solid black;
  }
`;

export const ContactButton = styled(Button)`
  font-size: 1em;
  margin-top: 20px;
`;

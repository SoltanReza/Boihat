import { Button } from "globalStyles";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 84vh;
`;
export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transform: translate(0, -50%);
`;

export const Input = styled.input`
  padding: 0.5em 0.75em;
  outline: none;
  border: 2px solid gray;
  border-radius: 5px;
  margin: 0.5em 0.75em;
`;

export const FileInput = styled.button`
  padding: 0.5em 0.75em;
  outline: none;
  border: 2px solid gray;
  border-radius: 5px;
  margin: 0.5em 0.75em;
`;

export const FormButton = styled(Button)`
  outline: none;
  border: none;
  padding: 0.5em 0.75em;
  margin: 0.5em 0.75em;
  border-radius: 5px;
  text-align: center;
  box-shadow: 2px 2px;
  font-size: 1em;
  &:hover {
    margin-top: 10px;
  }
`;

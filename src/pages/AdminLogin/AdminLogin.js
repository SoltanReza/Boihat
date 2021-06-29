import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "globalStyles";
export default function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleClick = () => {};
  return (
    <Container>
      <Form>
        <Input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          type="password"
          placeholder="passowrd"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <FormButton onClick={handleClick} type="submit">
          Login
        </FormButton>
      </Form>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 84vh;
`;
const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transform: translate(0, -50%);
`;

const Input = styled.input`
  padding: 0.5em 0.75em;
  outline: none;
  border: 2px solid gray;
  border-radius: 5px;
  margin: 0.5em 0.75em;
`;

const FormButton = styled(Button)`
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

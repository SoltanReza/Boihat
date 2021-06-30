import React from "react";
import Spinner from "react-loader-spinner";
import { usePromiseTracker } from "react-promise-tracker";
import { Container } from "./LoadingIndicator.elements";
export default function LoadingIndicator() {
  const { promiseInProgress } = usePromiseTracker();
  return (
    <>
      {promiseInProgress && (
        <Container>
          <Spinner color="orange" type="Audio" />
        </Container>
      )}
    </>
  );
}

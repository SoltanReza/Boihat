import styled from "styled-components";

export const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-top: 1px solid #d7d7d7;

  @media screen and (max-width: 1008px) {
  }
  @media screen and (max-width: 640px) {
    font-size: 0.8em;
  }
`;

export const Icon = styled.img`
  width: 30px;
  margin: 0 5px;

  @media screen and (max-width: 1008px) {
    width: 28px;
  }
  @media screen and (max-width: 640px) {
    width: 20px;
  }
`;

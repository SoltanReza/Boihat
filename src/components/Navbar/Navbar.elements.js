import styled from "styled-components";

export const Nav = styled.div`
  padding: 20px 10px;
  background-color: transparent;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  ul {
    display: flex;
    list-style: none;
  }

  @media screen and (max-width: 1008px) {
    font-size: 0.9em;
  }
  @media screen and (max-width: 640px) {
    font-size: 0.8em;
  }
`;

export const Li = styled.li`
  color: black;
  margin: 0 5px;
  padding-bottom: 1px;
  border-bottom: 2px solid
    ${(props) => (props.active ? "orange" : "transparent")};
`;

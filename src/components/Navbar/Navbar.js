import React, { useState } from "react";
import styled from "styled-components";
import { Nav, Li } from "./Navbar.elements";
import { StyledLink } from "../../globalStyles";
import { useLocation } from "react-router-dom";
export default function Navbar(props) {
  const location = useLocation();
  return (
    <Nav>
      <h2>BOIHAT</h2>
      <ul>
        <Li active={location.pathname === "/" ? true : false}>
          <StyledLink to="/">Home</StyledLink>
        </Li>
        <Li active={location.pathname === "/discography" ? true : false}>
          <StyledLink to="/discography">Discography</StyledLink>
        </Li>
        <Li active={location.pathname === "/videos" ? true : false}>
          <StyledLink to="/videos">Videos</StyledLink>
        </Li>
        <Li active={location.pathname === "/contact" ? true : false}>
          <StyledLink to="/contact">Contact</StyledLink>
        </Li>
      </ul>
    </Nav>
  );
}

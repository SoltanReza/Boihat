import React from "react";
import { FooterWrapper, Icon } from "./Footer.elements";
import instagram from "assets/instagram.png";
import telegram from "assets/telegram.png";
import spotify from "assets/spotify.png";
import youtube from "assets/youtube.png";

export default function Footer() {
  return (
    <FooterWrapper>
      <div>
        <a href="#">
          <Icon src={instagram} alt="Instagram BOIHAT" />
        </a>
        <a href="#">
          <Icon src={telegram} alt="Telegram BOIHAT" />
        </a>
        <a href="#">
          <Icon src={spotify} alt="Instagram BOIHAT" />
        </a>
        <a href="#">
          <Icon src={youtube} alt="Telegram BOIHAT" />
        </a>
      </div>
      <p>All rights reserved</p>
    </FooterWrapper>
  );
}

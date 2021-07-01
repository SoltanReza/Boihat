import React from "react";
import { FooterWrapper, Icon, IconsContainer } from "./Footer.elements";
import instagram from "assets/instagram.png";
import telegram from "assets/telegram.png";
import spotify from "assets/spotify.png";
import youtube from "assets/youtube.png";

export default function Footer() {
  return (
    <FooterWrapper>
      <IconsContainer>
        <a href="https://www.instagram.com/8oihat/">
          <Icon src={instagram} alt="Instagram BOIHAT" />
        </a>
        {/* <a href="#">
          <Icon src={telegram} alt="Telegram BOIHAT" />
        </a> */}
        <a href="https://open.spotify.com/artist/0PzFYuIyTxhSvDztDokUW5?si=pSObBEJxROO9Kx9kIoV0uA&dl_branch=1">
          <Icon src={spotify} alt="Instagram BOIHAT" />
        </a>
        <a href="https://www.youtube.com/channel/UCwiPMq7iDViB4z8Fy_ECy-g">
          <Icon src={youtube} alt="Telegram BOIHAT" />
        </a>
      </IconsContainer>
      <p>All rights reserved</p>
    </FooterWrapper>
  );
}

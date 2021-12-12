import React from "react";
import { Container, LinkButton } from "../../utils/styled-elements";
import {
  FooterContent,
  FooterCopyrightContainer,
  FooterWrapper,
} from "./styles";
import { ReactComponent as TwitterIcon } from "../../assets/icons/twitter.svg";
import { ReactComponent as FbIcon } from "../../assets/icons/fb.svg";
import { ReactComponent as InstagramIcon } from "../../assets/icons/instagram.svg";
const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <FooterContent>
          <FooterContent.Logo>
            <img
              src="https://growthschool.io/wp-content/uploads/2021/08/image-69.png"
              alt="logo"
            />
          </FooterContent.Logo>
          <FooterContent.Links>
            <h6>Growth School</h6>
            <ul>
              <li>
                <a href="/">About</a>
              </li>
              <li>
                <a href="/">Community</a>
              </li>
            </ul>
          </FooterContent.Links>
          <FooterContent.Links>
            <h6>
              <br />
            </h6>
            <ul>
              <li>
                <a href="/">Workshops</a>
              </li>
              <li>
                <a href="/">Programs</a>
              </li>
            </ul>
          </FooterContent.Links>
          <FooterContent.Links>
            <h6>
              <br />
            </h6>
            <ul>
              <li>
                <a href="/">Apply as Mentor</a>
              </li>
              <li>
                <a href="/">Login</a>
              </li>
            </ul>
          </FooterContent.Links>

          <FooterContent.MoreInfo>
            <h5>Need more info?</h5>
            <ul>
              <li>
                <a href="/">
                  <FbIcon />
                </a>
              </li>
              <li>
                <a href="/">
                  <TwitterIcon />
                </a>
              </li>
              <li>
                <a href="/">
                  <InstagramIcon />
                </a>
              </li>
            </ul>

            <LinkButton secondary>Contact us</LinkButton>
          </FooterContent.MoreInfo>
        </FooterContent>
        <FooterCopyrightContainer>
          <p>© GrowthSchool {new Date().getFullYear()}</p>
        </FooterCopyrightContainer>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;

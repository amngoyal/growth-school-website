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
import FooterArrow from "../../assets/images/footer-arrow.svg";
import Zoom from "react-reveal/Zoom";

const Footer = () => {
  return (
    <FooterWrapper>
      <Zoom left>
        <img className="footer-bg-arrow" src={FooterArrow} alt="arrow" />
      </Zoom>
      <Container>
        <FooterContent>
          <FooterContent.Logo>
            <a href="https://growthschool.io">
              <img
                src="https://growthschool.io/wp-content/uploads/2021/08/image-69.png"
                alt="logo"
              />
            </a>
          </FooterContent.Logo>
          <FooterContent.Links>
            <h6>Growth School</h6>
            <ul>
              <li>
                <a href="https://growthschool.io/about/">About</a>
              </li>
              <li>
                <a href="https://growthschool.io/community/">Community</a>
              </li>
            </ul>
          </FooterContent.Links>
          <FooterContent.Links>
            <h6>
              <br />
            </h6>
            <ul>
              <li>
                <a href="https://growthschool.io/live-workshops/">Workshops</a>
              </li>
              <li>
                <a href="https://growthschool.io/live-programs/">Programs</a>
              </li>
            </ul>
          </FooterContent.Links>
          <FooterContent.Links>
            <h6>
              <br />
            </h6>
            <ul>
              <li>
                <a href="https://app.growthschool.io/?fluent-form=27">
                  Apply as Mentor
                </a>
              </li>
              <li>
                <a href="https://app.growthschool.io/wp-login.php">Login</a>
              </li>
            </ul>
          </FooterContent.Links>

          <FooterContent.MoreInfo>
            <h5>Need more info?</h5>
            <ul>
              <li>
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://www.facebook.com/growthschoolio"
                >
                  <FbIcon />
                </a>
              </li>
              <li>
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://www.instagram.com/growthschoolio/"
                >
                  <InstagramIcon />
                </a>
              </li>
              <li>
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://twitter.com/growthschoolio"
                >
                  <TwitterIcon />
                </a>
              </li>
            </ul>

            <LinkButton href="mailto:hi@growthschool.io" secondary>
              Contact us
            </LinkButton>
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

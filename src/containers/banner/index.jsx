import React from "react";
import { Container, LinkButton } from "../../utils/styled-elements";
import { BannerContent, BannerWrapper } from "./styles";
import BgPattern from "../../assets/images/bg-pattern.svg";
import Fade from "react-reveal/Fade";

const Banner = () => {
  return (
    <BannerWrapper>
      <img className="banner-bg-pattern-1" src={BgPattern} alt="pattern" />
      <img className="banner-bg-pattern-2" src={BgPattern} alt="pattern" />
      <Container>
        <Fade bottom cascade>
          <BannerContent>
            <span>STARTS 30TH JAN 2022</span>
            <h2>
              LinkedIn
              <br />5 Day Workshop
            </h2>

            <p>
              Secrets that generated me over 300K+ followers, and 1000’s of
              leads for FREE bringing in thousands of dollars on a monthly basis
              from Linkedin.
            </p>
            <LinkButton>Reserve Seat for ₹499</LinkButton>
          </BannerContent>
        </Fade>
      </Container>
    </BannerWrapper>
  );
};

export default Banner;

import React from "react";
import { LinkButton } from "../../utils/styled-elements";
import { BannerContent, BannerWrapper } from "./styles";

const Banner = () => {
  return (
    <BannerWrapper>
      <BannerContent>
        <span>STARTS 30TH JAN 2022</span>
        <h2>
          LinkedIn
          <br />5 Day Workshop
        </h2>

        <p>
          Secrets that generated me over 300K+ followers, and 1000’s of leads
          for FREE bringing in thousands of dollars on a monthly basis from
          Linkedin.
        </p>

        <LinkButton>Reserve Seat for ₹499</LinkButton>
      </BannerContent>
    </BannerWrapper>
  );
};

export default Banner;

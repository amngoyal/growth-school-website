import React from "react";
import { Container, LinkButton } from "../../utils/styled-elements";
import { OfferWhile, Wrapper } from "./styles";
import Fade from "react-reveal/Fade";

const GetTheOffer = () => {
  return (
    <Wrapper>
      <Container>
        <Fade bottom cascade>
          <div>
            <h2>Get the offer while it lasts!</h2>
          </div>
        </Fade>
        <OfferWhile>
          <OfferWhile.Left>
            <h4>LinkedIn 5 Day Workshop Offer (Save ₹1,500)</h4>
            <p className="price">
              ₹499 <sub>₹1,999</sub>
            </p>
            <ul>
              {workshopOffer.map((item) => (
                <li key="item">{item}</li>
              ))}
            </ul>
            <br />
            <p>
              Note: No exceptions would be made beyond the offer expiry date.
              The prices would go up and no free bonuses
            </p>

            <LinkButton>Reserve Seat for ₹499</LinkButton>
          </OfferWhile.Left>
          <OfferWhile.Right>
            <div>
              <h4>What you’ll get...</h4>
              <ul>
                {whatYouGet.map((item) => (
                  <li key="item">{item}</li>
                ))}
              </ul>
            </div>

            <div className="offer-while__get-bonus-box">
              <h4>And bonuses too...</h4>
              <ul>
                {bonuses.map((item) => (
                  <li key="item">{item}</li>
                ))}
              </ul>
            </div>
          </OfferWhile.Right>
        </OfferWhile>
      </Container>
    </Wrapper>
  );
};

export default GetTheOffer;

const workshopOffer = [
  "Enroll now and get bonuses worth ₹25,000 free. There was never a better time to grab this course.",
  "Enjoy the discounted price of ₹499 and save a total of ₹1,500",
  "The launch offer expires tonight.",
];

const whatYouGet = [
  "Learn the Powerful Client Snipper Method",
  "Know my 100M Content Formula",
  "Get Acceptance rate skyrocket formula",
  "Learn LinkedIn Profile Funnel Optimisation",
  "Know my secrete 7-Touchpoint Outbound System",
  "Learn Step by step content guidelines",
  "Get my Million-Dollar Lead Generation Process",
  "Learn Reverse engineering TG OPN technique",
];

const bonuses = [
  "Outreach scripts and cover image templates to dominate LinkedIn",
  "The secret to beat your LinkedIn search competition in less than 30 minutes",
  "Ultimate hack to get anyone’s LinkedIn email and send automated email sequences",
  "The secret to get Rs 2500 LinkedIn ad coupons for free",
  "Growth hack to generate emails from LinkedIn content",
  "My top 5 brand-building LinkedIn tools and how to use them",
];

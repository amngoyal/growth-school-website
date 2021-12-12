import React from "react";
import { Container } from "../../utils/styled-elements";
import {
  FeaturedInContainer,
  FeatureItem,
  FeaturesList,
  TrainerCard,
  Wrapper,
} from "./styles";
import VaibhavImg from "../../assets/images/Vaibhav.png";
import JoshTalkImg from "../../assets/images/josh-talks.png";
import DeccanImg from "../../assets/images/deccan.png";
import YahooImg from "../../assets/images/yahoo.png";
import IndianExpressImg from "../../assets/images/indian-express.png";
import DailyHuntImg from "../../assets/images/daily-hunt.png";
import HindustanTimesImg from "../../assets/images/hindustan-times.png";
import Fade from "react-reveal/Fade";

const MeetYourTrainer = () => {
  return (
    <Wrapper>
      <Container>
        <Fade bottom cascade>
          <div>
            <h2>Meet Your Trainer</h2>
          </div>
        </Fade>
        <TrainerCard>
          <TrainerCard.Left>
            <img src={VaibhavImg} alt="vaibhav" />
            <div>
              <h6> Vaibhav Sisinty </h6>
              <p>LinkedIn Growth Expert, Growth Hacker, Ex- Uber & Klook</p>
            </div>
          </TrainerCard.Left>
          <TrainerCard.Right>
            <p>
              Hi, I am Vaibhav Sisinty, I turn startups into profitable
              businesses, growth consult for brands and help them use the
              internet to increase profitability and their overall bottom lines.
              <br /> <br />
              In 2012 (at age 19) I moved from running Discovery Android to
              founding an award winning digital media company, CrazyHeads.
              Within 3 years, CrazyHead helped 100+ clients over the world grow
              their businesses using internet.
              <br /> <br />
              After working at Uber ( India and Latin America ) for 4.5 years, I
              joined Klook to lead marketing for India and the Middle East where
              I scaled the business to over $27M in a year.
            </p>

            <FeaturedInContainer>
              <h6>Featured In</h6>
              <FeaturesList>
                {featuresImg.map((item) => (
                  <FeatureItem key={item.id}>
                    <img src={item.src} alt={item.alt} />
                  </FeatureItem>
                ))}
              </FeaturesList>
            </FeaturedInContainer>
          </TrainerCard.Right>
        </TrainerCard>
      </Container>
    </Wrapper>
  );
};

export default MeetYourTrainer;

export const featuresImg = [
  {
    id: 1,
    src: JoshTalkImg,
    alt: "josh talk",
  },
  { id: 2, src: DeccanImg, alt: "deccan" },
  { id: 3, src: YahooImg, alt: "yahoo" },
  { id: 4, src: IndianExpressImg, alt: "indian express" },
  { id: 5, src: DailyHuntImg, alt: "daily hunt" },
  { id: 6, src: HindustanTimesImg, alt: "hindustan times" },
];

import React from "react";
import {
  FeaturedInWrapper,
  InfoCard,
  InfoCardsContainer,
  VideoCard,
  VideoContainer,
  Wrapper,
} from "./styles";
import { ReactComponent as DateIcon } from "../../assets/icons/timer.svg";
import { ReactComponent as VideoIcon } from "../../assets/icons/record.svg";
import { ReactComponent as DurationIcon } from "../../assets/icons/setting.svg";
import { ReactComponent as BonusIcon } from "../../assets/icons/check-file.svg";
import JoshTalkImg from "../../assets/images/josh-talks.png";
import DeccanImg from "../../assets/images/deccan.png";
import YahooImg from "../../assets/images/yahoo.png";
import IndianExpressImg from "../../assets/images/indian-express.png";
import { Container, Icon } from "../../utils/styled-elements";

const WorkshopLearnings = () => {
  return (
    <Wrapper>
      <Container>
        <VideoContainer>
          <InfoCardsContainer>
            {leftCards.map((item) => (
              <InfoCard key={item.value}>
                <Icon>
                  <item.SvgIcon />
                </Icon>
                <p>{item.text}</p>
                <h6>{item.value}</h6>
              </InfoCard>
            ))}
          </InfoCardsContainer>

          <VideoCard></VideoCard>

          <InfoCardsContainer>
            {rightCards.map((item) => (
              <InfoCard key={item.value}>
                <Icon>
                  <item.SvgIcon />
                </Icon>
                <p>{item.text}</p>
                <h6>{item.value}</h6>
              </InfoCard>
            ))}
          </InfoCardsContainer>
        </VideoContainer>

        <FeaturedInWrapper>
          <h6>Featured In</h6>
          <ul>
            {featuredIn.map((item) => (
              <li key={item.alt}>
                <img src={item.src} alt={item.alt} />
              </li>
            ))}
          </ul>
        </FeaturedInWrapper>
      </Container>
    </Wrapper>
  );
};

export default WorkshopLearnings;

export const leftCards = [
  {
    SvgIcon: DateIcon,
    text: "Date",
    value: "30th Jan 2022",
  },
  {
    SvgIcon: VideoIcon,
    text: "Time",
    value: "9PM onwards",
  },
];
export const rightCards = [
  {
    SvgIcon: DurationIcon,
    text: "Total Duration",
    value: "5 Days",
  },
  {
    SvgIcon: BonusIcon,
    text: "Bonuses Worth",
    value: "₹ 25,000",
  },
];

export const featuredIn = [
  {
    src: JoshTalkImg,
    alt: "josh talk",
  },
  {
    src: DeccanImg,
    alt: "deccan chronicle",
  },
  {
    src: YahooImg,
    alt: "yahoo",
  },
  {
    src: IndianExpressImg,
    alt: "indian express",
  },
];

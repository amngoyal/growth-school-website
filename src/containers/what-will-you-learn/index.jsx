import React from "react";
import { Container } from "../../utils/styled-elements";
import { Wrapper, Card, CardsList } from "./styles";
import Fade from "react-reveal/Fade";

const WhatWillYouLearn = () => {
  return (
    <Wrapper>
      <Container>
        <Fade bottom cascade>
          <div>
            <h2>What will you learn in the workshop?</h2>
          </div>
        </Fade>
        <CardsList>
          {data.map((item) => (
            <Card key={item.title}>
              <h6>{item.title}</h6>
              <p>{item.description}</p>
            </Card>
          ))}
        </CardsList>
      </Container>
    </Wrapper>
  );
};

export default WhatWillYouLearn;

const data = [
  {
    title: "The Powerful Client Snipper Method",
    description:
      "Will help you find your exact potential clients on LinkedIn without spending a dollar on ads (unlike Facebook)",
  },
  {
    title: "The 100M Content Formula",
    description:
      "Step by step LinkedIn content writing syntax to drive 4X engagement",
  },
  {
    title: "Acceptance rate sky rocket formula",
    description: "Strategy to get accepted by top CXO’s on LinkedIn",
  },
  {
    title: "LinkedIn Profile Funnel Optimization",
    description: "Strategy to get accepted by top CXO’s on LinkedIn",
  },
  {
    title: "LinkedIn Profile Funnel Optimization",
    description:
      "Will help you rank your profile on the LinkedIn search and generate you inbound leads like clockwork",
  },
  {
    title: "The 7-Touchpoint Outbound System",
    description:
      "Nurture connections by engaging with them before you send them your first message, resulting in skyrocketed conversions",
  },
  {
    title: "Step by step content guidelines",
    description:
      "The exact blueprint to create and post content on LinkedIn from starters to pro",
  },
  {
    title: "Reverse engineering TG OPN technique",
    description:
      "Steal your competitors’ leads and customers using growth hacking.",
  },
  {
    title: "Million-Dollar Lead Generation Process",
    description:
      "Helps you search and connect with open-wallet leads and unlocks thousands of leads that are keen to work with you",
  },
];

import React from "react";
import Timer from "../../components/timer";
import { Container, LinkButton } from "../../utils/styled-elements";
import { Grid, TimerContainer, Wrapper } from "./styles";
import Fade from "react-reveal/Fade";

const UnlockBonuses = () => {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 5000000);
  return (
    <Wrapper>
      <Container>
        <Fade bottom cascade>
          <div>
            <h2>
              Unlock bonuses worth <br /> ₹25,000
            </h2>
          </div>
        </Fade>

        <Grid>
          {data.map((item, index) => (
            <Grid.Item key={index} isMiddle={item.invertColor}>
              <span>{item.price}</span>
              <h5>{item.description}</h5>
            </Grid.Item>
          ))}
        </Grid>

        <TimerContainer>
          <h5>Time is running out. Grab your spot fast!</h5>
          <Timer expiryTimestamp={time} />
          <LinkButton>Reserve Seat for ₹499</LinkButton>
        </TimerContainer>
      </Container>
    </Wrapper>
  );
};

export default UnlockBonuses;

export const data = [
  {
    price: "₹5000",
    description:
      "Outreach scripts and cover image templates to dominate LinkedIn",
    invertColor: false,
  },
  {
    price: "₹10000",
    description:
      "The secret to beat your LinkedIn search competition in less than 30 minutes",
    invertColor: true,
  },
  {
    price: "₹10000",
    description:
      "Ultimate hack to get anyone’s LinkedIn email and send automated email sequences",
    invertColor: false,
  },
  {
    price: "₹5000",
    description: "Secret to get Rs 2500 LinkedIn ad coupons for free",
    invertColor: false,
  },
  {
    price: "₹10000",
    description: "Growth hack to generate emails from LinkedIn content",
    invertColor: true,
  },
  {
    price: "₹5000",
    description: "My top 5 brand-building LinkedIn tools and how to use them",
    invertColor: false,
  },
];

import React from "react";
import { Container, Icon, LinkButton } from "../../utils/styled-elements";
import { CtaContainer, List, Wrapper } from "./styles";
import { ReactComponent as CheckIcon } from "../../assets/icons/check.svg";
import BgPattern from "../../assets/images/bg-pattern.svg";
import Fade from "react-reveal/Fade";

const WhoIsThisWorkshopFor = () => {
  return (
    <Wrapper>
      <img className="who-bg-pattern-1" src={BgPattern} alt="pattern" />
      <img className="who-bg-pattern-2" src={BgPattern} alt="pattern" />

      <Container>
        <Fade bottom cascade>
          <div>
            <h2>Who is this workshop for?</h2>
          </div>
        </Fade>
        <List>
          {data.map((item) => (
            <List.Item key={item}>
              <Icon>
                <CheckIcon />
              </Icon>
              <b>{item}</b>
            </List.Item>
          ))}
        </List>

        <CtaContainer>
          <p>OR Anyone who is interested to learn about LinkedIn.</p>

          <LinkButton secondary>Reserve Seat for ₹499</LinkButton>
        </CtaContainer>
      </Container>
    </Wrapper>
  );
};

export default WhoIsThisWorkshopFor;

export const data = [
  "Entrepreneurs",
  "Professionals",
  "Freelancers",
  "Coaches and Trainers",
  "Sales Professional",
];

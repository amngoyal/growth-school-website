import React from "react";
import { Container, Icon, LinkButton } from "../../utils/styled-elements";
import { CtaContainer, List, Wrapper } from "./styles";
import { ReactComponent as CheckIcon } from "../../assets/icons/check.svg";

const WhoIsThisWorkshopFor = () => {
  return (
    <Wrapper>
      <Container>
        <h2>Who is this workshop for?</h2>

        <List>
          {data.map((item) => (
            <List.Item kley={item}>
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

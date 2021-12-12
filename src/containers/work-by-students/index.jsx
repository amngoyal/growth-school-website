import React from "react";
import Carousel from "../../components/carousel";
import { Container } from "../../utils/styled-elements";
import { CarouselContainer, CarouselItem, Wrapper } from "./styles";
import BgPattern from "../../assets/images/bg-pattern.svg";
import Fade from "react-reveal/Fade";

const WorkByStudents = () => {
  return (
    <Wrapper>
      <img className="steller-bg-pattern-1" src={BgPattern} alt="pattern" />
      <img className="steller-bg-pattern-2" src={BgPattern} alt="pattern" />
      <img className="steller-bg-pattern-3" src={BgPattern} alt="pattern" />
      <Container>
        <Fade bottom cascade>
          <div>
            <h2>Stellar work by our students</h2>
          </div>
        </Fade>
        <CarouselContainer>
          <Carousel
            items={carouselData.map((item) => (
              <CarouselItem>
                <a href={item.href}>
                  <CarouselItem.Left>
                    <img src={item.imgSrc} alt={item.name} />
                  </CarouselItem.Left>
                  <CarouselItem.Right>
                    <b>
                      LinkedIn <span>{item.date}</span>
                    </b>
                    <h5>{item.title}</h5>
                    <p>{item.description}</p>
                    <CarouselItem.Profile>
                      <div>
                        <img src={item.imgSrc} alt={item.name} />
                      </div>
                      <p>{item.name}</p>
                    </CarouselItem.Profile>
                  </CarouselItem.Right>
                </a>
              </CarouselItem>
            ))}
          />
        </CarouselContainer>
      </Container>
    </Wrapper>
  );
};

export default WorkByStudents;

const carouselData = [
  {
    href: "https://growthschool.io/casestudy/get-expert-support-anytime-7/",
    imgSrc:
      "https://growthschool.io/wp-content/uploads/2021/07/1593711386688.jpg",
    date: "July 18, 2021",
    title: "I started getting invites for interviews and speeches!",
    description:
      "Consider this as an investment for your career, I am pretty sure your first opportunity from LinkedIn will cover your investment cost of this course!",
    name: "Leela Shankar",
  },
  {
    href: "https://growthschool.io/casestudy/get-expert-support-anytime-6/",
    imgSrc:
      "https://growthschool.io/wp-content/uploads/2021/06/1620117189084.jpg",
    date: "June 12, 2021",
    title: "I started getting interview calls from big agencies",
    description:
      "When I share my Linked- in Profile to my clients, it increases their trust because of the type of content I have posted and the endorsements & recommendations. I have a better chance of negotiating in my favor.",
    name: "Neha Goyal",
  },
  {
    href: "https://growthschool.io/casestudy/get-expert-support-anytime-5/",
    imgSrc:
      "https://growthschool.io/wp-content/uploads/2021/06/1614958226116.jpg",
    date: "June 12, 2021",
    title: "I got a job from one of the companies in US in just one week",
    description:
      "Started with 28k per month and now getting 2 lakh per month. I should say its because I have chosen the right mentor at the right time",
    name: "Ramya Anudeep",
  },
];

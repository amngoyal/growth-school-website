import React, { useState } from "react";
// import { Accordion } from "../../components";
import { Container, LinkButton } from "../../utils/styled-elements";
import {
  Accordion,
  AccordionContainer,
  FaqsContent,
  FaqsWrapper,
  ToggleIcon,
} from "./styles";
import AddIcon from "../../assets/icons/plus.png";

const Faqs = () => {
  const [accordionIndex, setAccordionIndex] = useState("");

  const handleAccordionToogle = (index) => {
    setAccordionIndex((prev) => {
      if (prev === index) return "";
      else return index;
    });
  };

  return (
    <FaqsWrapper>
      <Container>
        <FaqsContent>
          <h2>FAQs</h2>
          <AccordionContainer>
            {data.map((item, index) => (
              <Accordion key={item.title}>
                <Accordion.Title onClick={() => handleAccordionToogle(index)}>
                  <h6>{item.title}</h6>
                  <ToggleIcon isOpen={accordionIndex === index}>
                    <img src={AddIcon} alt="add" />
                  </ToggleIcon>
                </Accordion.Title>
                <Accordion.Content isOpen={accordionIndex === index}>
                  <p>{item.content}</p>
                </Accordion.Content>
              </Accordion>
            ))}
          </AccordionContainer>
          <LinkButton>Reserve Seat for ₹499</LinkButton>
        </FaqsContent>
      </Container>
    </FaqsWrapper>
  );
};

export default Faqs;

export const data = [
  {
    title: "When does the workshop start and what are the timings?",
    content:
      "You can get all the details related to the timings and dates of the workshop at the top of the page.",
  },
  {
    title: "Will this be live or pre-recorded?",
    content: "It’s going to be a completely live session.",
  },
  {
    title: "I made the payment but didn't receive any confirmation email.",
    content:
      "Write to hi@growthschool.io and our awesome support team will solve your queries in the fastest time possible.",
  },
  {
    title: "Since the workshop is live, will you be sharing recordings?",
    content:
      "No, we won’t be sharing any recordings. Since it’s a live workshop, it’s expected that each participant will attend the workshop live. Also, recordings of a live session are just boring.",
  },
  {
    title: "Can I get a refund?",
    content:
      "No. We don’t provide refunds in any case. If you are not sure about the workshop, check out the testimonials, read more about the trainer and take an informed decision. In case you miss out on attending the live workshop, we can move you to the next batch only ONCE.",
  },
  {
    title: "When can I receive the bonuses?",
    content:
      "After the workshop is done, you will receive all the bonuses within 48 hours.",
  },
  {
    title: "Will I get a certificate after completion?",
    content:
      "Yes, you will receive a certificate of completion if you finish the entire workshop.",
  },
  {
    title: "Do you have an affiliate program?",
    content: "As of now, NO. Maybe in the future.",
  },
  {
    title: "What is the time zone?",
    content: "It is IST(Indian Standard Time).",
  },
];

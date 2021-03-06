import styled from "styled-components";

export const FaqsWrapper = styled.section`
  position: relative;
  padding: 0 0 6%;

  .faqs-bg-pattern-3 {
    position: absolute;
    width: 5%;
    top: 30%;
    left: -2%;
  }
  .faqs-bg-pattern-4 {
    position: absolute;
    width: 10%;
    top: 32%;
    right: 0;
  }
  .faqs-bg-pattern-5 {
    position: absolute;
    width: 10%;
    top: 50%;
    right: 0;
  }
`;

export const FaqsContent = styled.div`
  margin-top: 4%;
  position: relative;
  padding-top: 5%;

  display: flex;
  flex-direction: column;
  align-items: center;

  ::before {
    content: "";
    border-radius: 15px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 220px;
    background: linear-gradient(to right, #056a67, #004848);
    z-index: -1;
  }

  button,
  a {
    margin-top: 70px;
  }

  h2 {
    position: relative;
    z-index: 2;
  }

  .faqs-bg-pattern-1 {
    position: absolute;
    width: 74%;
    filter: brightness(100);
    left: -40%;
    top: -9%;
  }

  .faqs-bg-pattern-2 {
    position: absolute;
    width: 11%;
    top: 12%;
    right: 4%;
    z-index: 1;
    filter: brightness(100);
  }
`;

export const AccordionContainer = styled.div`
  max-width: 80%;
  margin: 25px auto 0;
  position: relative;
`;

export const Accordion = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.2);
  background: #fff;
  padding: 30px;
  margin-top: 25px;
  border-radius: 15px;
  box-shadow: 20px 24px 74px rgba(134, 57, 231, 0.05);
  position: relative;
  z-index: 2;
`;

Accordion.Title = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  gap: 10px;
`;

export const ToggleIcon = styled.div`
  min-width: 24px;
  height: 24px;
  background-color: ${({ theme }) => theme.colors.aquaDeep};

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  transform: rotate(${({ isOpen }) => (isOpen ? "45deg" : "0deg")});
  transition: transform 0.5s linear;

  img {
    width: 12px;
    height: 12px;
  }
`;

Accordion.Content = styled.div`
  overflow: hidden;
  max-height: 1000px;
  max-height: ${({ isOpen }) => (isOpen ? "1000px" : "0px")};
  /* transition: all 0.5s linear; */
  p {
    color: ${({ theme }) => theme.colors.aquaDeep};
    opacity: 0.5;
    margin-top: 12px;
  }
`;

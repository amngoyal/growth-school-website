import styled from "styled-components";

export const FooterWrapper = styled.footer`
  position: relative;
  padding: 6% 0 0;
  background: linear-gradient(to right, #056a67, #004848);

  .footer-bg-arrow {
    position: absolute;
    width: 12%;
    left: 0;
    bottom: 83px;
    transition: 300ms ease-in-out;
  }
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 767px) {
    flex-direction: column;
    text-align: center;
    gap: 20px;
  }
`;

FooterContent.Logo = styled.div`
  img {
  }
`;
FooterContent.Links = styled.div`
  h6 {
    color: white;
    font-size: 17px;
  }

  ul {
    margin-top: 25px;
    list-style: none;
  }

  li {
    margin-top: 16px;
  }
`;
FooterContent.MoreInfo = styled.div`
  h5 {
    color: white;
  }

  ul {
    list-style: none;
    margin-top: 25px;
    margin-bottom: 20px;
    display: flex;
    gap: 20px;
    justify-content: center;
  }
`;

export const FooterCopyrightContainer = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 40px 0;
  margin-top: 60px;

  p {
    font-size: 14px;
  }

  @media (max-width: 767px) {
    text-align: center;
  }
`;

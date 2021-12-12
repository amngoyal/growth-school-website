import styled from "styled-components";

export const Wrapper = styled.section`
  padding: 6% 0;
  background: linear-gradient(to right, #056a67, #004848);
  overflow: hidden;
  text-align: center;
  color: #fff;
  position: relative;

  ::before {
    content: "";
    position: absolute;
    top: -50px;
    left: -50px;
    width: 200px;
    height: 200px;
    z-index: 6;
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0.15);
  }

  ::after {
    content: "";
    position: absolute;
    bottom: 5%;
    right: -6%;
    width: 200px;
    height: 200px;
    box-sizing: content-box;
    z-index: 6;
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0.15);
    transform: scale(2);
  }

  .certified-bg-pattern-1 {
    position: absolute;
    left: 0;
    width: 9%;
    top: 13%;
    opacity: 0.5;
    filter: brightness(100);
    z-index: 3;
  }
  .certified-bg-pattern-2 {
    position: absolute;
    top: 70%;
    right: 0;
    width: 6%;
    opacity: 0.5;
    z-index: 3;
    filter: brightness(100);
  }
`;

export const CertifiedContainer = styled.div`
  display: flex;
  gap: 40px;
  justify-content: space-between;

  margin-top: 50px;

  @media (max-width: 767px) {
    flex-direction: column-reverse;
  }
`;

export const CertificateFeatures = styled.div`
  width: 50%;

  display: flex;
  flex-direction: column;
  gap: 50px;

  @media (max-width: 767px) {
    width: 100%;
  }
`;

CertificateFeatures.Item = styled.div`
  display: flex;
  gap: 25px;

  > div {
    text-align: left;

    b {
      display: block;
      color: rgba(255, 255, 255, 1);
      font-size: 18px;
      margin-bottom: 18px;
    }

    p {
      max-width: 440px;
    }
  }
`;

export const CertificateImageContainer = styled.div`
  width: 50%;

  img {
    max-width: 100%;
    border-radius: 23px;
  }

  @media (max-width: 767px) {
    width: 100%;
  }
`;

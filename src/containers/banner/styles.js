import styled from "styled-components";

export const BannerWrapper = styled.section`
  width: 100%;
  height: 80vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: linear-gradient(
    to right,
    ${({ theme }) => theme.colors.mintGreen},
    ${({ theme }) => theme.colors.backgroundTwo}
  );
  background-color: ${({ theme }) => theme.colors.mintGreen};
  overflow: hidden;
  position: relative;
  z-index: 0;

  ::before {
    content: "";
    width: 200px;
    height: 200px;
    position: absolute;
    top: -50px;
    left: -50px;
    z-index: 0;
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0.15);
  }

  ::after {
    content: "";
    width: 200px;
    height: 200px;
    position: absolute;
    bottom: 17%;
    right: -6%;
    z-index: 0;
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0.15);
    transform: scale(2);
  }

  .banner-bg-pattern-1 {
    position: absolute;
    top: 38%;
    left: 0;
    width: 7%;
    opacity: 0.5;
    z-index: 3;
    filter: brightness(100);
  }

  .banner-bg-pattern-2 {
    position: absolute;
    right: 0;
    width: 9%;
    top: 30%;
    opacity: 0.5;
    filter: brightness(100);
    z-index: 3;
  }
`;

export const BannerContent = styled.div`
  width: 100%;
  max-width: 680px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    width: 150px;
    border: 1px solid rgba(255, 255, 255, 0.22);
    border-radius: 5px;
    padding: 13px 0px 8px;
    color: #ffffff;
    font-size: 12px;
    text-transform: uppercase;
    font-weight: 700;
    text-align: center;
  }

  h2 {
    text-align: center;
    margin-top: 10px;
  }

  p {
    text-align: center;
    margin-top: 18px;
  }

  button {
    margin-top: 40px;
  }
`;

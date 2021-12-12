import styled from "styled-components";

export const Wrapper = styled.section`
  padding: 6% 0;
  width: 100%;
  background: linear-gradient(
    to right,
    ${({ theme }) => theme.colors.mintGreen},
    ${({ theme }) => theme.colors.backgroundTwo}
  );
  background-color: ${({ theme }) => theme.colors.mintGreen};
  overflow: hidden;
  position: relative;

  ::before {
    content: "";
    width: 200px;
    height: 200px;
    position: absolute;
    top: -50px;
    left: -50px;
    z-index: 1;
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
    z-index: 1;

    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0.15);
    transform: scale(2);
  }

  p {
    margin: 50px 0 40px;
  }

  .who-bg-pattern-1 {
    position: absolute;
    top: 70%;
    left: 0;
    width: 6%;
    opacity: 0.5;
    z-index: 3;
    filter: brightness(100);
  }

  .who-bg-pattern-2 {
    position: absolute;
    right: 0;
    width: 9%;
    top: 33%;
    opacity: 0.5;
    filter: brightness(100);
    z-index: 3;
  }

  @media (max-width: 576px) {
    padding: 50px 0;
  }
`;

export const List = styled.div`
  margin-top: 5%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;

  @media (max-width: 576px) {
    margin-top: 30px;
  }
`;

List.Item = styled.div`
  width: calc((100% - 60px) / 4);
  min-width: 210px;
  padding: 20px;
  background-color: white;
  border-radius: 20px;

  display: flex;
  align-items: center;
  gap: 20px;
`;

export const CtaContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    color: white;

    @media (max-width: 576px) {
      text-align: center;
    }
  }
`;

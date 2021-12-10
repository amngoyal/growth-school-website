import styled from "styled-components";

export const Wrapper = styled.section`
  padding: 6% 0;
  width: 100%;
  background-image: linear-gradient(
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
    width: 200px;
    height: 200px;
    position: absolute;
    bottom: 17%;
    right: -6%;
    z-index: 1;
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0.15);
    transform: scale(2);
  }

  p {
    margin: 50px 0 40px;
  }
`;

export const List = styled.div`
  margin-top: 5%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
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
  }
`;

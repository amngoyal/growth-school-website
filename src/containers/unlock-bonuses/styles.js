import styled from "styled-components";

export const Wrapper = styled.section`
  padding: 6% 0;
  width: 100%;
  position: relative;
  overflow: hidden;

  ::before {
    content: "";
    position: absolute;
    width: 200px;
    height: 200px;
    background: transparent;
    top: 15%;
    right: -6%;
    border: 50px solid rgba(63, 178, 175, 0.15);
    border-radius: 50%;
    box-sizing: content-box;
    z-index: 1;
  }

  ::after {
    content: "";
    width: 200px;
    height: 200px;
    position: absolute;
    background: transparent;
    top: 42%;
    left: -6%;
    border: 40px solid rgba(63, 178, 175, 0.15);
    border-radius: 50%;
    box-sizing: content-box;
    z-index: 1;
  }

  h2 {
    color: ${({ theme }) => theme.colors.aquaDeep};
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
  margin-top: 40px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    max-width: 350px;
    margin: 40px auto 0;
  }
`;

Grid.Item = styled.div`
  border: 1px solid rgba(6, 106, 103, 0.2);
  background: ${({ isMiddle }) => (isMiddle ? "#066A67" : "#fff")};
  padding: 40px 25px 25px 0;
  border-radius: 15px;
  z-index: 2;
  position: relative;

  h5 {
    color: ${({ isMiddle }) => (!isMiddle ? "#066A67" : "#fff")};
    padding: 40px 25px 25px;
  }

  span {
    position: absolute;
    top: 20px;
    left: -10px;
    color: ${({ isMiddle }) => (isMiddle ? "#066A67" : "#fff")};
    background-color: ${({ isMiddle }) => (isMiddle ? "#fff" : "#066A67")};
    padding: 12px 20px 8px;
    border-radius: 0 20px 20px 0;
    box-shadow: 10px 10px 24px rgba(11, 124, 121, 0.2);

    font-size: 14px;
    font-weight: 700;
  }
`;

export const TimerContainer = styled.div`
  margin-top: 50px;
  text-align: center;

  h5{
    margin-bottom: 40px;s
  }
   button,a{
     margin-top: 60px;
   }
`;

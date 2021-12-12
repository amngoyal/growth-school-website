import styled from "styled-components";

export const Wrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.backgroundThree};
  padding-top: 50px;
  padding-bottom: 80px;

  h2 {
    text-align: center;
    color: ${({ theme }) => theme.colors.aquaDeep};
  }
`;
export const CardsList = styled.div`
  margin-top: 60px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  grid-gap: 28px;
`;

export const Card = styled.div`
  width: calc(50% - 14px);
  border: 1px solid ${({ theme }) => theme.colors.blue};
  background: #fff;
  padding: 35px 25px;
  border-radius: 15px;
  -webkit-box-shadow: 30px 54px 104px rgba(0, 0, 0, 0.05);
  box-shadow: 30px 54px 104px rgba(0, 0, 0, 0.05);
  text-align: left;

  p {
    color: ${({ theme }) => theme.colors.aquaDeep};
    opacity: 0.5;
    margin-top: 14px;
    padding-right: 12%;
  }

  @media (max-width: 500px) {
    width: 100%;
    max-width: 350px;
  }
`;

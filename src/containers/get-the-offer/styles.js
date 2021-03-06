import styled from "styled-components";

export const Wrapper = styled.section`
  background: linear-gradient(
    180deg,
    rgba(5, 217, 186, 0.1) 0.01%,
    rgba(5, 218, 186, 0) 100%
  );
  position: relative;
  padding: 6% 0;

  h2 {
    color: ${({ theme }) => theme.colors.aquaDeep};
  }

  ul {
    list-style: none;
    text-align: left;
    margin-top: 24px;
  }

  li {
    padding-left: 20px;
    position: relative;
    font-size: 16px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.aquaDeep};
    margin-top: 15px;
    ::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0px;
      width: 7px;
      height: 14px;
      border: solid #014949;
      border-width: 0 2px 2px 0;
      transform: rotate(45deg);
    }
  }

  @media (max-width: 576px) {
    padding: 50px 0;
  }
`;

export const OfferWhile = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-top: 50px;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

OfferWhile.Left = styled.div`
  width: 48%;
  background: #fff;
  border-radius: 30px;
  padding: 16px;

  p {
    color: ${({ theme }) => theme.colors.aquaDeep};
  }

  p.price {
    color: ${({ theme }) => theme.colors.backgroundTwo};
    font-size: 60px;
    font-weight: 700;
    margin-top: 5%;

    sub {
      text-decoration: line-through;
      font-weight: 400;
      font-size: 30px;
      position: relative;
      top: -11px;
    }

    @media (max-width: 576px) {
      font-size: 40px;
    }
  }

  button,
  a {
    margin-top: 40px;
    width: 100%;
    padding: 20px 0;
  }

  @media (max-width: 767px) {
    width: 100%;
  }
`;
OfferWhile.Right = styled.div`
  width: 45%;

  .offer-while__get-bonus-box {
    margin-top: 40px;
  }

  @media (max-width: 767px) {
    width: 100%;
    padding: 10px;
  }
`;

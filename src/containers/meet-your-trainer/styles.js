import styled from "styled-components";

export const Wrapper = styled.section`
  padding: 6% 0;
  position: relative;
  background-image: linear-gradient(
    180deg,
    rgba(5, 217, 186, 0.1) 0.01%,
    rgba(5, 218, 186, 0) 100%
  );

  h2 {
    color: ${({ theme }) => theme.colors.aquaDeep};
  }
`;

export const TrainerCard = styled.div`
  width: 100%;
  max-width: 700px;
  padding: 16px;
  box-shadow: 0px 30px 80px rgba(0, 0, 0, 0.05);
  border-radius: 20px;
  background: #fff;

  display: flex;
  justify-content: space-between;
  gap: 40px;
  margin: 0 auto;
  margin-top: 50px;
`;

TrainerCard.Left = styled.div`
  width: 35%;

  h6 {
    margin-top: 20px;
    width: 100%;
    text-align: center;
  }

  p {
    color: ${({ theme }) => theme.colors.aquaDeep};
    text-align: center;
    margin-bottom: 20px;
  }

  img {
    width: 100%;
    object-fit: contain;
    border-radius: 50%;

    box-shadow: 20px 30px 90px rgba(46, 43, 38, 0.1);
  }
`;

TrainerCard.Right = styled.div`
  width: 65%;

  p {
    color: ${({ theme }) => theme.colors.aquaDeep};
    text-align: left;
    font-size: 14px;
    margin-top: 12px;
    line-height: 1.5;
  }
`;

export const FeaturedInContainer = styled.div`
  h6 {
    margin-top: 20px;
    font-size: 17px;
    font-weight: 700;
  }
`;

export const FeaturesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 16px;
`;

export const FeatureItem = styled.div`
  width: 120px;
  height: 40px;
  padding: 6px 10px;
  box-shadow: 0 0 10px #ccc;
  border-radius: 20px;

  img {
    max-width: 100%;
    margin: auto 0;
  }
`;

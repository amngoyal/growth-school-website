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

  @media (max-width: 576px) {
    padding: 50px 0;
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

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 20px;
  }
`;

TrainerCard.Left = styled.div`
  width: 35%;
  display: flex;
  flex-direction: column;
  gap: 20px;

  h6 {
    width: 100%;
    text-align: center;
  }

  p {
    color: ${({ theme }) => theme.colors.aquaDeep};
    text-align: center;
    margin-bottom: 20px;
  }

  .trainer-pic-container {
    position: relative;
    img {
      width: 100%;

      object-fit: contain;
      border-radius: 50%;

      box-shadow: 20px 30px 90px rgba(46, 43, 38, 0.1);
    }

    .trainer-play-button {
      position: absolute;
      bottom: 10px;
      right: 15px;
      transform: scale(0.75);
    }
  }

  @media (max-width: 600px) {
    flex-direction: row;
    align-items: center;
    width: 100%;
    > img {
      max-width: 120px;
    }
    p,
    h6 {
      text-align: left;
    }
    .trainer-pic-container {
      .trainer-play-button {
        bottom: 0px;
        right: 0px;
        transform: scale(0.5);
      }
    }
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

  @media (max-width: 600px) {
    width: 100%;
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

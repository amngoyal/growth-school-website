import styled from "styled-components";
import VideoThumbnail from "../../assets/images/video-thumbnail.png";

export const Wrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.backgroundThree};
`;

export const VideoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;
  transform: translateY(-80px);
`;

export const VideoCard = styled.div`
  flex: 1;
  height: 375px;
  border-radius: 20px;

  background-image: url(${VideoThumbnail});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const InfoCardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 30px;
`;

export const InfoCard = styled.div`
  width: 180px;
  height: 155px;

  border-radius: 20px;
  padding: 25px 15px;
  border: 1px solid #fff;
  background: linear-gradient(
    180deg,
    rgb(232, 223, 223) 0.01%,
    rgb(255, 255, 255) 100%
  );
  box-shadow: 30px 54px 104px rgba(0, 0, 0, 0.05);

  p {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.backgroundTwo};
    margin-top: 12px;
    width: 15px;
  }

  h6 {
    margin-top: 8px;
    color: ${({ theme }) => theme.colors.aquaDeep};
  }
`;

export const FeaturedInWrapper = styled.div`
  transform: translateY(-50px);

  h6 {
    text-align: center;
  }

  ul {
    width: 100%;
    margin-top: 30px;
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
    justify-content: center;
    list-style: none;
  }

  li {
    width: 150px;
    height: 50px;
    background-color: white;
    border-radius: 20px;
    padding: 6px 10px;

    display: flex;
    align-items: center;
    justify-content: center;

    img {
      max-width: 100%;
      object-fit: contain;
    }
  }
`;

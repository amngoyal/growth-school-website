import styled from "styled-components";

export const Wrapper = styled.section`
  padding: 6% 0;
  overflow: hidden;
  background: linear-gradient(to right, #056a67, #004848);
  position: relative;
  z-index: 1;

  ::before {
    content: "";
    position: absolute;
    top: -50px;
    left: -50px;
    width: 200px;
    height: 200px;
    z-index: 0;
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
    z-index: -1;
    border-radius: 50%;
    box-sizing: content-box;
    border: 1px solid rgba(255, 255, 255, 0.15);
    transform: scale(2);
  }

  .steller-bg-pattern-1 {
    position: absolute;
    top: 22%;
    left: 0;
    width: 6%;
    opacity: 0.5;
    z-index: 3;
    filter: brightness(100);
  }
  .steller-bg-pattern-2 {
    position: absolute;
    right: 0;
    width: 9%;
    top: 11%;
    opacity: 0.5;
    filter: brightness(100);
    z-index: 3;
  }
  .steller-bg-pattern-3 {
    position: absolute;
    left: 0;
    width: 9%;
    bottom: 0;
    opacity: 0.5;
    filter: brightness(100);
    z-index: 3;
  }
`;

export const CarouselContainer = styled.div`
  padding: 36px 0;
`;

export const CarouselItem = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  max-width: 595px;
  padding-right: 20px;

  a {
    height: 100%;
    min-height: 330px;

    text-align: left;
    background: #fff;
    padding: 10px;
    height: 100%;
    border-radius: 15px;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

CarouselItem.Left = styled.div`
  width: 28%;
  background: #ccc;
  border-radius: 10px;
  box-shadow: 10px 14px 34px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  img {
    position: absolute;
    height: 100%;
    left: 50%;
    transform: translateX(-50%);
  }
`;
CarouselItem.Right = styled.div`
  width: 67%;
  color: #014949;
  padding: 4% 4% 80px 0;
  position: relative;

  b {
    font-size: 12px;
    color: #21b5e0;
    text-transform: capitalize;

    span {
      font-weight: 500;
      color: rgba(0, 0, 0, 0.5);
      font-size: 10px;
      margin-left: 8px;
      padding-left: 15px;
      position: relative;

      ::after {
        content: "";
        position: absolute;
        top: 4px;
        left: 0;
        width: 3px;
        height: 3px;
        background: #000;
        border-radius: 50%;
      }
    }
  }

  > h5 {
    margin-top: 8%;
  }

  p {
    opacity: 0.5;
    margin-top: 2.5%;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.aquaDeep};
  }
`;
CarouselItem.Profile = styled.div`
  position: absolute;
  bottom: 10px;
  left: 0;

  display: flex;
  align-items: center;

  > div {
    width: 38px;
    border-radius: 50%;

    box-shadow: 2px 4px 14px rgba(0, 0, 0, 0.12);
    border: 1px solid #fff;
  }
  img {
    border-radius: 50%;
    max-width: 100%;
    object-fit: contain;
  }

  > p {
    margin-top: 0;
    margin-left: 12px;
    font-size: 14px;
    font-weight: 700;
    opacity: 1;
  }
`;

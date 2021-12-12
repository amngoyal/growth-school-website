import styled from "styled-components";

export const CarouselWrapper = styled.div`
  position: relative;

  .alice-carousel {
    width: calc(100% + 20px);
  }

  .alice-carousel__wrapper,
  .alice-carousel__stage,
  alice-carousel__stage-item {
    height: 100%;
  }

  .alice-carousel__dots {
    margin-top: 8%;
  }

  .alice-carousel__dots-item:not(.__custom):not(:last-child) {
    margin-right: 8px;
  }

  .alice-carousel__dots-item:not(.__custom):hover,
  .alice-carousel__dots-item:not(.__custom).__active {
    background-color: white;
  }

  .alice-carousel__dots-item:not(.__custom) {
    width: 9px;
    height: 9px;
    background: rgba(150, 150, 150, 0.86);
  }
`;

export const CarouselLeftButton = styled.button`
  position: absolute;
  bottom: -20px;
  left: 12%;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: transparent;
  cursor: pointer;
  padding: 12px 0;
  transition: 300ms ease-in-out;

  width: 80px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    background: #fff;

    svg > path {
      fill: ${({ theme }) => theme.colors.aquaDeep};
    }
  }
`;
export const CarouselRightButton = styled.button`
  position: absolute;
  bottom: -20px;
  right: 12%;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: transparent;
  cursor: pointer;

  padding: 12px 0;
  transition: 300ms ease-in-out;

  width: 80px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    background: #fff;

    svg > path {
      fill: ${({ theme }) => theme.colors.aquaDeep};
    }
  }
`;

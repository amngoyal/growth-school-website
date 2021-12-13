import styled from "styled-components";
// import PlayIcon from "../assets/icons/play.svg";

export const LinkButton = styled.button`
  padding: 12px 40px;
  color: ${({ theme, secondary }) =>
    secondary ? theme.colors.mintGreen : "#fff"};
  font-size: 16px;
  font-weight: 800;
  background: ${({ theme, secondary }) =>
    secondary
      ? "#fff"
      : `linear-gradient(to right,${theme.colors.blue},${theme.colors.aquaGreen})`};
  border-radius: 5px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  box-shadow: 12px 12.78px 30px rgba(15, 205, 200, 0.2);

  :hover {
    background: ${({ theme, secondary }) =>
      !secondary &&
      `linear-gradient(to right,${theme.colors.aquaGreen},${theme.colors.blue})`};
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1210px;
  margin: 0 auto;
  padding: 0 20px;
  z-index: 2;

  .section-subtitle {
    margin-top: 12px;
  }

  @media (max-width: 1023px) {
    max-width: 790px;
  }
  @media (max-width: 767px) {
    max-width: 580px;
  }
`;

export const Icon = styled.div`
  width: 46px;
  min-width: 46px;
  height: 46px;
  background-color: ${({ theme, secondary }) =>
    secondary ? theme.colors.iconBackgroundTwo : theme.colors.iconBackground};
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  svg,
  img {
    width: 23px;
    object-fit: contain;
  }
`;

export const PlayButton = styled.button`
  width: 60px;
  height: 60px;
  min-width: 60px;
  min-height: 60px;
  background-color: #fff;
  border-radius: 50%;
  outline: none;
  border: none;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
`;

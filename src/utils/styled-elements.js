import styled from "styled-components";

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

  :hover {
    background: ${({ theme, secondary }) =>
      !secondary &&
      `linear-gradient(to right,${theme.colors.aquaGreen},${theme.colors.blue})`};
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1150px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const Icon = styled.div`
  width: 46px;
  height: 46px;
  background-color: ${({ theme }) => theme.colors.iconBackground};
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

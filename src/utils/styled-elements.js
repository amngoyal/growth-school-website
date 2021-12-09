import styled from "styled-components";

export const LinkButton = styled.button`
  padding: 12px 40px;
  color: #fff;
  font-size: 16px;
  font-weight: 800;
  background: linear-gradient(
    to right,
    ${({ theme }) => theme.colors.blue},
    ${({ theme }) => theme.colors.aquaGreen}
  );
  border-radius: 5px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  :hover {
    background: linear-gradient(
      to right,
      ${({ theme }) => theme.colors.aquaGreen},
      ${({ theme }) => theme.colors.blue}
    );
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1170px;
  margin: 0 auto;
`;

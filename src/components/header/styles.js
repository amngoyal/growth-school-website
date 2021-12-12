import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  padding-top: 20px;

  position: fixed;
  top: 0;
  z-index: 10;
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderLogo = styled.div`
  img {
    width: 125px;
    object-fit: contain;
  }
`;

export const Nav = styled.nav`
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 30px;
  padding: 12px 30px 8px;

  display: flex;

  p {
    padding: 0 15px;
    color: #fff;
    opacity: 0.8;
    font-size: 14px;
    cursor: pointer;
  }

  @media (max-width: 1023px) {
    display: none;
  }
`;

export const HeaderAction = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  button {
    width: 160px;
    font-size: 14px;
    padding: 12px;
    color: #fff;
  }
`;

export const HamburgerMenu = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;

  width: 36px;
  height: 36px;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  svg {
    width: 18px;
    fill: #fff;
  }
`;

import styled from "styled-components";

export const Header = styled.header`
  > div {
    width: 100%;
    padding: ${({ isFixedHeader }) =>
      isFixedHeader ? "13px 0" : "20px 0 0 0"};
    display: ${({ hideHeader }) => (hideHeader ? "none" : "block")};

    position: ${({ isFixedHeader }) => (isFixedHeader ? "fixed" : "absolute")};
    top: 0;
    z-index: 10;

    background: ${({ isFixedHeader }) =>
      isFixedHeader ? "#056A67" : "transparent"};
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderLogo = styled.div`
  img {
    width: ${({ isFixedHeader }) => (isFixedHeader ? 110 : 125)}px;
    object-fit: contain;
  }
`;

export const Nav = styled.nav`
  border: ${({ isFixedHeader }) =>
    isFixedHeader ? "none" : "1px solid rgba(255, 255, 255, 0.15)"};
  border-radius: 30px;
  padding: 12px 30px 8px;

  display: flex;

  p {
    padding: 0 15px;
    color: #fff;
    opacity: ${({ isFixedHeader }) => (isFixedHeader ? 1 : 0.8)};
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

  @media (max-width: 576px) {
    button {
      display: none;
    }
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

  @media (min-width: 1024px) {
    display: none;
  }
`;

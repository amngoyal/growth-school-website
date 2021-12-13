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

    span {
      font-size: 8px;
      color: white;
    }
  }

  > div {
    position: relative;

    :hover {
      .workshop-submenu,
      .programs-submenu {
        display: flex;
      }
    }
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

export const SubMenuWrapper = styled.div`
  position: absolute;
  top: 30px;
  background: #fff;
  width: 900px;
  min-height: 200px;
  border-radius: 6px;
  padding: 25px;
  box-sizing: border-box;
  display: none;

  ::after {
    content: "";
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 10px solid #fff;
    position: absolute;
    top: -10px;
  }
  ::before {
    content: "";
    position: absolute;
    top: -17px;
    left: 0;
    right: 0;
    background: transparent;
    height: 25px;
  }

  &.workshop-submenu {
    left: -301px;
    ::after {
      left: calc(50% - 106px);
    }
  }

  &.programs-submenu {
    left: -401px;
    ::after {
      left: calc(50% - 6px);
    }
  }

  .submenu-checkout-link {
    position: absolute;
    right: 0;
    bottom: 0;
    border-radius: 0 0 5px 0;
    background-image: linear-gradient(to right, #056a67, #004848);
    opacity: 1;
    width: 325px;
    p {
      color: #fff;
      opacity: 1;
      font-weight: 700;
      text-transform: capitalize;
      font-size: 26px;
      padding: 20px;

      svg {
        position: absolute;
        bottom: 22px;
        right: 18px;
        width: 22px;
        height: 22px;
        border-radius: 50%;
        background: #fff;
        padding: 6px 5px 4px;

        path {
          fill: ${({ theme }) => theme.colors.aquaDeep};
        }
      }
    }
  }
`;

export const SubMenuColumn = styled.div`
  flex: 0.33;
  height: 100%;

  :nth-child(2) {
    padding-bottom: 124px;
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 28px;
  }

  li {
    h6 {
      padding: 0;
      color: #000000;
      opacity: 0.5;
      /* font-weight: 500; */
      font-size: 14px;
      text-transform: uppercase;
      letter-spacing: 1px;
      display: flex;
      align-items: center;

      img {
        width: 20px;
        height: 20px;

        margin-right: 5px;
      }
    }
  }
`;

SubMenuColumn.LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
SubMenuColumn.Link = styled.div`
  transition: 300ms ease-in-out;
  color: #000;

  p {
    font-weight: 700;
    font-size: 17px;
    padding: 0;
    color: inherit;
    margin-top: 22px;
  }

  i {
    font-style: normal;
    font-size: 14px;
    color: inherit;
    margin-top: 6px;
  }

  :hover {
    color: #21b5e0;
  }
`;

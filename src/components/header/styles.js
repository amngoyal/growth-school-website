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
`;

export const HeaderAction = styled.div`
  button {
    font-size: 14px;
    padding: 12px 30px;
    color: #fff;
  }
`;

import React from "react";
import { Container, LinkButton } from "../../utils/styled-elements";
import {
  HamburgerMenu,
  Header,
  HeaderAction,
  HeaderContent,
  HeaderLogo,
  Nav,
} from "./styles";
import { ReactComponent as HamburgerIcon } from "../../assets/icons/hamburger.svg";

const NavBar = () => {
  return (
    <Header>
      <Container>
        <HeaderContent>
          <HeaderLogo>
            <img
              src="https://growthschool.io/wp-content/uploads/2021/08/image-69.png"
              alt="logo"
            />
          </HeaderLogo>

          <Nav>
            <p>About</p>
            <p>Workshops</p>
            <p>Programs</p>
            <p>Community</p>
            <p>Login</p>
          </Nav>

          <HeaderAction>
            <LinkButton>Apply as Mentor</LinkButton>

            <HamburgerMenu>
              <HamburgerIcon />
            </HamburgerMenu>
          </HeaderAction>
        </HeaderContent>
      </Container>
    </Header>
  );
};

export default NavBar;

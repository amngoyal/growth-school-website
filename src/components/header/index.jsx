import React, { useEffect, useState } from "react";
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
import Fade from "react-reveal/Fade";

const NavBar = () => {
  const [isFixedHeader, setIsFixedHeader] = useState(false);
  const [hideHeader, setHideHeader] = useState(false);

  useEffect(() => {
    const onScroll = (e) => {
      if (e.target.documentElement.scrollTop > 220 && !isFixedHeader) {
        setIsFixedHeader(true);
      } else if (e.target.documentElement.scrollTop < 221 && isFixedHeader) {
        setIsFixedHeader(false);
      }

      if (
        e.target.documentElement.scrollTop > 90 &&
        e.target.documentElement.scrollTop < 221 &&
        !hideHeader
      ) {
        setHideHeader(true);
      } else if (e.target.documentElement.scrollTop >= 220 && hideHeader) {
        setHideHeader(false);
      } else if (e.target.documentElement.scrollTop < 90 && hideHeader) {
        setHideHeader(false);
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [hideHeader, isFixedHeader]);

  return (
    <Header isFixedHeader={isFixedHeader} hideHeader={hideHeader}>
      <Fade top>
        <div>
          <Container>
            <HeaderContent>
              <HeaderLogo isFixedHeader={isFixedHeader}>
                <img
                  src="https://growthschool.io/wp-content/uploads/2021/08/image-69.png"
                  alt="logo"
                />
              </HeaderLogo>

              <Nav isFixedHeader={isFixedHeader}>
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
        </div>
      </Fade>
    </Header>
  );
};

export default NavBar;

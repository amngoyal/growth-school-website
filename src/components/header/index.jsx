import React, { useEffect, useState } from "react";
import { Container, LinkButton } from "../../utils/styled-elements";
import {
  // HamburgerMenu,
  Header,
  HeaderAction,
  HeaderContent,
  HeaderLogo,
  Nav,
  SubMenuColumn,
  SubMenuWrapper,
} from "./styles";
// import { ReactComponent as HamburgerIcon } from "../../assets/icons/hamburger.svg";
import { ReactComponent as ArrowRightIcon } from "../../assets/icons/right-arrow.svg";
import Fade from "react-reveal/Fade";
import MarketingIcon from "../../assets/icons/Marketing.png";
import DesignIcon from "../../assets/icons/Design.png";
import ContentIcon from "../../assets/icons/Content.png";
import DigitalCurrencyIcon from "../../assets/icons/Digital-Currency.png";
import NoCodeIcon from "../../assets/icons/No-Code.png";
import OthersIcon from "../../assets/icons/Others.png";

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
                <div>
                  <p>
                    Workshops <span>&#9660;</span>
                  </p>
                  <SubMenu className="workshop-submenu" data={workshopLinks} />
                </div>
                <div>
                  <p>
                    Programs <span>&#9660;</span>
                  </p>
                  <SubMenu className="programs-submenu" data={programLinks} />
                </div>
                <p>Community</p>
                <p>Login</p>
              </Nav>

              <HeaderAction>
                <LinkButton>Apply as Mentor</LinkButton>

                {/* <HamburgerMenu>
                  <HamburgerIcon />
                </HamburgerMenu> */}
              </HeaderAction>
            </HeaderContent>
          </Container>
        </div>
      </Fade>
    </Header>
  );
};

export default NavBar;

function SubMenu({ className, data }) {
  return (
    <SubMenuWrapper className={className}>
      {data.map((columnData, index) => (
        <SubMenuColumn key={index}>
          <ul>
            {columnData.map((listItem, i) => (
              <li key={i}>
                <h6>
                  <img src={listItem.iconSrc} alt={listItem.heading} />
                  {listItem.heading}
                </h6>
                <SubMenuColumn.LinksContainer>
                  {listItem.links.map((link, linkIndex) => (
                    <SubMenuColumn.Link key={linkIndex}>
                      <p>{link.title}</p>
                      <i>{link.subtitle}</i>
                    </SubMenuColumn.Link>
                  ))}
                </SubMenuColumn.LinksContainer>
              </li>
            ))}
          </ul>
        </SubMenuColumn>
      ))}

      <div className="submenu-checkout-link">
        <p>
          Checkout Our Upcoming Workshops <ArrowRightIcon />
        </p>
      </div>
    </SubMenuWrapper>
  );
}

export const workshopLinks = [
  [
    {
      heading: "Marketing",
      iconSrc: MarketingIcon,
      links: [
        {
          title: "Performance Marketing",
          subtitle: "By Deepan Siddhu and Aswini Palo",
        },
        {
          title: "LinkedIn",
          subtitle: "By Vaibhav Sisinty",
        },
      ],
    },
    {
      heading: "Design",
      iconSrc: DesignIcon,
      links: [
        {
          title: "UI",
          subtitle: "By Saptarshi Prakash",
        },
        {
          title: "UX",
          subtitle: "By Anudeep Ayyagari",
        },
      ],
    },
  ],
  [
    {
      heading: "Content",
      iconSrc: ContentIcon,
      links: [
        {
          title: "Content Writing Freelancing ",
          subtitle: "By Anuj Gosalia",
        },
        {
          title: "Content Machine",
          subtitle: "By Digital Pratik",
        },
      ],
    },
    {
      heading: "Digital Currencies",
      iconSrc: DigitalCurrencyIcon,
      links: [
        {
          title: "Cryptocurrency",
          subtitle: "By Ajeet Khurana",
        },
        {
          title: "NFT",
          subtitle: "By Raghava KK",
        },
      ],
    },
    {
      heading: "NoCode",
      iconSrc: NoCodeIcon,
      links: [
        {
          title: "NoCode",
          subtitle: "By Keshav Sharma and Mayank Nagpal",
        },
      ],
    },
  ],
  [
    {
      heading: "Other",
      iconSrc: OthersIcon,
      links: [
        {
          title: "Entrepreneurship",
          subtitle: "By Sarvesh Shashi",
        },
        {
          title: "Speak to influence",
          subtitle: "By Raj Shamani",
        },
        {
          title: "Youtube",
          subtitle: "By Vedant Rusty",
        },
        {
          title: "Poetry",
          subtitle: "By Megha Rao",
        },
      ],
    },
  ],
];

export const programLinks = [
  workshopLinks[0],
  workshopLinks[1],
  [
    {
      heading: "Other",
      iconSrc: OthersIcon,
      links: [
        {
          title: "Speak to influence",
          subtitle: "By Raj Shamani",
        },
        {
          title: "D2C",
          subtitle: "Arjun Vaidya & Trisha Rajani Vaidya",
        },
        {
          title: "Product Management",
          subtitle: "By Naggapan Ramaswamy",
        },
        {
          title: "Tech Interview Prep",
          subtitle: "By Pratik Singhal",
        },
        {
          title: "Poetry",
          subtitle: "By Megha Rao",
        },
        {
          title: "Youtube",
          subtitle: "By Vedant Rusty",
        },
        {
          title: "Entrepreneurship",
          subtitle: "By Sarvesh Shashi",
        },
      ],
    },
  ],
];

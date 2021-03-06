import React from "react";
import { Container, Icon } from "../../utils/styled-elements";
import {
  CertificateImageContainer,
  CertificateFeatures,
  CertifiedContainer,
  Wrapper,
} from "./styles";
import { ReactComponent as VerifyIcon } from "../../assets/icons/verify.svg";
import { ReactComponent as ShareIcon } from "../../assets/icons/share.svg";
import { ReactComponent as LockIcon } from "../../assets/icons/lock.svg";
import CertificateImg from "../../assets/images/certificate.png";
import BgPattern from "../../assets/images/bg-pattern.svg";
import Fade from "react-reveal/Fade";

const GetCertified = () => {
  return (
    <Wrapper>
      <img className="certified-bg-pattern-1" src={BgPattern} alt="pattern" />
      <img className="certified-bg-pattern-2" src={BgPattern} alt="pattern" />
      <Container>
        <Fade bottom cascade>
          <div>
            <h2>Get Certified</h2>
          </div>
          <div>
            <p className="section-subtitle">
              Yes! You will be certified for this workshop once you submit your
              assignment.
            </p>
          </div>
        </Fade>

        <CertifiedContainer>
          <CertificateFeatures>
            {features.map((item) => (
              <CertificateFeatures.Item key={item.title}>
                <Icon secondary>
                  <item.icon />
                </Icon>

                <div>
                  <b>{item.title}</b>
                  <p>{item.description}</p>
                </div>
              </CertificateFeatures.Item>
            ))}
          </CertificateFeatures>

          <CertificateImageContainer>
            <img src={CertificateImg} alt="certificate" />
          </CertificateImageContainer>
        </CertifiedContainer>
      </Container>
    </Wrapper>
  );
};

export default GetCertified;

export const features = [
  {
    title: "Official and Verified",
    description:
      "Receive an instructor signed certificate with institution’s logo to verify your achievements and increase your job prospects.",
    icon: VerifyIcon,
  },
  {
    title: "Easily Shareable",
    description:
      "Add the certificate to your CV or your Resume or post it directly on LInkedin. You can even post it on instagram and twitter.",
    icon: ShareIcon,
  },
  {
    title: "Enhances Credibility",
    description:
      "Use your certificate to enhance your professional credibility and stand out among your peers!",
    icon: LockIcon,
  },
];

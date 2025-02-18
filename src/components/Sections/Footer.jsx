import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
// Assets
import LogoImg from "../../assets/svg/Logo";

export default function Contact() {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <Wrapper>
      <div className="darkBg">
        <div className="container">
          <InnerWrapper className="flexSpaceCenter" style={{ padding: "40px 0" }}>
            {/* Logo and Brand Name */}
            <Link className="flexCenter animate pointer" to="home" smooth={true} offset={-80}>
              <LogoImg />
              <h1 className="font40 extraBold whiteColor" style={{ marginLeft: "15px" }}>
                JabaVerse
              </h1>
            </Link>
            {/* Footer Text and Year */}
            <FooterText className="whiteColor font14">
              © {getCurrentYear()} - <span className="purpleColor font14">JabaVerse</span> All Rights Reserved
            </FooterText>

            {/* Back to Top Link */}
            <Link className="whiteColor animate pointer font14" to="home" smooth={true} offset={-80}>
              Back to top
            </Link>

            {/* Contact Button */}
            <ContactButton className="purpleBg animate pointer font14">
              <Link to="contact" smooth={true} offset={-80}>
                Contact Us
              </Link>
            </ContactButton>
          </InnerWrapper>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  color: #fff;
  padding: 0px 0;
`;

const InnerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 550px) {
    flex-direction: column;
    text-align: center;
  }
`;

const FooterText = styled.p`
  font-size: 14px;
  color: #fff;
  margin: 0;
  @media (max-width: 550px) {
    margin: 20px 0;
  }
`;

const ContactButton = styled.button`
  background-color: #7620ff;  /* JabaVerse branding color */
  color: #fff;
  border: none;
  padding: 15px 20px;
  margin-left: 20px;
  font-size: 14px;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;
  outline: none;

  &:hover {
    background-color: #5c18cc; /* Slightly darker shade on hover */
  }

  a {
    color: #fff;
    text-decoration: none;
  }
`;

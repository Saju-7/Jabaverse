import React from "react";
import styled from "styled-components";
// Components
import FullButton from "../Buttons/FullButton";
// Assets (make sure to replace the path with the actual image)
import TeamImage from "../../assets/img/contact-1.png";  // Replace with the actual path to the image


export default function About() {
  return (
    <Wrapper id="about">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">About Jaba Verse</h1>
            <p className="font13">
              At Jaba Verse, we empower businesses to thrive in the digital world through innovation, creativity, and expertise. Our team works with passion to deliver outstanding digital solutions, from web development to branding and digital marketing.
            </p>
          </HeaderInfo>

          {/* Image and Text Section */}
          <ContentWrapper className="flexSpaceCenter">
            <ImageSection>
              <img src={TeamImage} alt="Jaba Verse Team" />
            </ImageSection>
            <TextSection>
              <h3 className="font24 extraBold">Our Mission</h3>
              <p className="font14">
                Our mission is to provide creative digital solutions that help businesses grow and succeed in the online world. We focus on delivering tailored strategies that drive results and foster long-term partnerships.
              </p>
            </TextSection>
          </ContentWrapper>

          {/* Values Section */}
          <ValuesWrapper>
          
            <ValuesList>
              <ValueItem>
                <h4 className="font18 bold">Innovation</h4>
                <p className="font12">We are constantly evolving, embracing new ideas and technologies to stay ahead of the curve.</p>
              </ValueItem>
              <ValueItem>
                <h4 className="font18 bold">Integrity</h4>
                <p className="font12">Transparency and honesty are at the core of everything we do, building trust with our clients.</p>
              </ValueItem>
              <ValueItem>
                <h4 className="font18 bold">Collaboration</h4>
                <p className="font12">We believe in working closely with our clients to achieve shared success and grow together.</p>
              </ValueItem>
              <ValueItem>
                <h4 className="font18 bold">Excellence</h4>
                <p className="font12">We strive for perfection in all our projects, delivering high-quality results every time.</p>
              </ValueItem>
            </ValuesList>
          </ValuesWrapper>

          {/* Call to Action Section */}
          <div className="row flexCenter">
            <div style={{ margin: "50px 0", width: "200px" }}>
              <FullButton title="Get to Know Us Better" action={() => alert("clicked")} />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding: 50px 0;
`;

const HeaderInfo = styled.div`
  margin-bottom: 50px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 60px;
  @media (max-width: 860px) {
    flex-direction: column;
    text-align: center;
  }
`;

const ImageSection = styled.div`
  width: 45%;
  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  @media (max-width: 860px) {
    width: 80%;
    margin-bottom: 30px;
  }
`;

const TextSection = styled.div`
  width: 50%;
  h3 {
    margin-bottom: 15px;
  }
  p {
    font-size: 14px;
    color: #333;
  }
  @media (max-width: 860px) {
    width: 100%;
  }
`;

const ValuesWrapper = styled.div`
  margin-bottom: 50px;
`;

const ValuesList = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;

const ValueItem = styled.div`
  width: 22%;
  h4 {
    margin-bottom: 10px;
  }
  p {
    font-size: 12px;
    color: #555;
  }
  @media (max-width: 860px) {
    width: 100%;
    margin-bottom: 20px;
  }
`;

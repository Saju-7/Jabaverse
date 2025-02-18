import React from "react";
import styled from "styled-components";
// Components
import ClientSlider from "../Elements/ClientSlider";
import ServiceBox from "../Elements/ServiceBox";
import FullButton from "../Buttons/FullButton";
// Assets
import AddImage1 from "../../assets/img/add/1.png";
import AddImage2 from "../../assets/img/add/2.png";
import AddImage3 from "../../assets/img/add/3.png";
import AddImage4 from "../../assets/img/add/4.png";

export default function Services() {
  return (
    <Wrapper id="services">
      <div className="lightBg" style={{ padding: "50px 0" }}>
        <div className="container">
          <ClientSlider />
        </div>
      </div>
      <div className="whiteBg" style={{ padding: "60px 0" }}>
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Our JabaVerse Services</h1>
            <p className="font13">
              Discover how we help businesses grow by providing tailored digital solutions. Whether it's web development for small businesses, affordable graphic design, or more, we offer the expertise you need to succeed in the JabaVerse.
            </p>
          </HeaderInfo>
          <ServiceBoxRow className="flex">
            {/* Web Development Section */}
            <ServiceBoxWrapper>
              <ServiceBox
                icon="browser"
                title="Web Development "
                subtitle="We specialize in affordable and scalable web development solutions for small businesses. Our approach focuses on creating responsive websites that deliver a great user experience."
              />
              <SuccessStory>
                <h3 className="font18">Success Story</h3>
                <p className="font12">
                  One of our clients, a small local bakery, saw a 40% increase in online orders after we developed their custom website with e-commerce integration. 
                  <a href="/portfolio#case-study-1" target="_blank">Read the full case study</a>.
                </p>
              </SuccessStory>
              <CTASection>
             
                <FullButton title="Schedule a Consultation" action={() => alert("consultation scheduled")} border />
              </CTASection>
            </ServiceBoxWrapper>
            
            {/* Digital Marketing Section */}
            <ServiceBoxWrapper>
              <ServiceBox
                icon="chart-bar"
                title="Digital Marketing"
                subtitle="Boost your online presence with tailored digital marketing strategies. We offer SEO, PPC, content marketing, and social media services to help your business reach its target audience."
              />
              <SuccessStory>
                <h3 className="font18">Success Story</h3>
                <p className="font12">
                  After launching a comprehensive SEO strategy for a local law firm, we helped them rank #1 on Google for key search terms, bringing in over 150% more client inquiries. 
                  <a href="/portfolio#case-study-2" target="_blank">Read the full case study</a>.
                </p>
              </SuccessStory>
              <CTASection>
                <FullButton title="Schedule a Consultation" action={() => alert("consultation scheduled")} border />
              </CTASection>
            </ServiceBoxWrapper>

            {/* Content Writing Section */}
            <ServiceBoxWrapper>
              <ServiceBox
                icon="pen"
                title="Content Writing"
                subtitle="Engage your audience with expertly written content. Whether it's blog posts, articles, or product descriptions, we offer affordable content writing services that help boost your SEO."
              />
              <SuccessStory>
                <h3 className="font18">Success Story</h3>
                <p className="font12">
                  A client in the e-commerce sector saw a 50% increase in organic traffic after we revamped their product descriptions and created blog posts optimized for SEO. 
                  <a href="/portfolio#case-study-3" target="_blank">Read the full case study</a>.
                </p>
              </SuccessStory>
              <CTASection>
                <FullButton title="Schedule a Consultation" action={() => alert("consultation scheduled")} border />
              </CTASection>
            </ServiceBoxWrapper>

            {/* Graphic Design Section */}
            <ServiceBoxWrapper>
              <ServiceBox
                icon="paint-brush"
                title="Graphic Design"
                subtitle="Our graphic design team creates visually stunning and brand-appropriate designs that capture your audience’s attention. We offer everything from logos to social media assets at affordable rates."
              />
              <SuccessStory>
                <h3 className="font18">Success Story</h3>
                <p className="font12">
                  We helped a tech startup design a modern logo and branding materials, which contributed to a successful product launch and recognition in the industry. 
                  <a href="/portfolio#case-study-4" target="_blank">Read the full case study</a>.
                </p>
              </SuccessStory>
              <CTASection>
  
                <FullButton title="Schedule a Consultation" action={() => alert("consultation scheduled")} border />
              </CTASection>
            </ServiceBoxWrapper>
          </ServiceBoxRow>
        </div>
        <div className="lightBg">
          <div className="container">
            <Advertising className="flexSpaceCenter">
              <AddLeft>
                <h4 className="font15 semiBold">A glimpse into JabaVerse</h4>
                <h2 className="font40 extraBold">The Future of Digital Innovation</h2>
                <p className="font12">
                  Join us in the JabaVerse, where the future of digital creation, design, and innovation is already here. Together, we can bring ideas to life in ways never imagined before.
                </p>
                <ButtonsRow className="flexNullCenter" style={{ margin: "30px 0" }}>
                  <div style={{ width: "190px" }}>
                    <FullButton title="Get Started" action={() => alert("clicked")} />
                  </div>
                  <div style={{ width: "190px", marginLeft: "15px" }}>
                    <FullButton title="Contact Us" action={() => alert("clicked")} border />
                  </div>
                </ButtonsRow>
              </AddLeft>
              <AddRight>
                <AddRightInner>
                  <div className="flexNullCenter">
                    <AddImgWrapp1 className="flexCenter">
                      <img src={AddImage1} alt="office" />
                    </AddImgWrapp1>
                    <AddImgWrapp2>
                      <img src={AddImage2} alt="office" />
                    </AddImgWrapp2>
                  </div>
                  <div className="flexNullCenter">
                    <AddImgWrapp3>
                      <img src={AddImage3} alt="office" />
                    </AddImgWrapp3>
                    <AddImgWrapp4>
                      <img src={AddImage4} alt="office" />
                    </AddImgWrapp4>
                  </div>
                </AddRightInner>
              </AddRight>
            </Advertising>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;

const ServiceBoxRow = styled.div`
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;

const ServiceBoxWrapper = styled.div`
  width: 20%;
  margin-right: 5%;
  padding: 80px 0;
  @media (max-width: 860px) {
    width: 100%;
    text-align: center;
    padding: 40px 0;
  }
`;

const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;

const SuccessStory = styled.div`
  margin-top: 40px;
  p {
    margin: 10px 0;
  }
  a {
    color: #007bff;
    text-decoration: none;
  }
`;

const CTASection = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  @media (max-width: 860px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Advertising = styled.div`
  margin: 80px 0;
  padding: 100px 0;
  position: relative;
  @media (max-width: 1160px) {
    padding: 100px 0 40px 0;
  }
  @media (max-width: 860px) {
    flex-direction: column;
    padding: 0 0 30px 0;
    margin: 80px 0 0px 0;
  }
`;

const ButtonsRow = styled.div`
  @media (max-width: 860px) {
    justify-content: space-between;
  }
`;

const AddLeft = styled.div`
  width: 50%;
  p {
    max-width: 475px;
  }
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
    text-align: center;
    h2 {
      line-height: 3rem;
      margin: 15px 0;
    }
    p {
      margin: 0 auto;
    }
  }
`;

const AddRight = styled.div`
  width: 50%;
  position: absolute;
  top: -70px;
  right: 0;
  @media (max-width: 860px) {
    width: 80%;
    position: relative;
    order: 1;
    top: -40px;
  }
`;

const AddRightInner = styled.div`
  width: 100%;
`;

const AddImgWrapp1 = styled.div`
  width: 48%;
  margin: 0 6% 10px 6%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;

const AddImgWrapp2 = styled.div`
  width: 30%;
  margin: 0 5% 10px 5%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;

const AddImgWrapp3 = styled.div`
  width: 20%;
  margin-left: 40%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;

const AddImgWrapp4 = styled.div`
  width: 30%;
  margin: 0 5% auto;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;


import React from "react";
import styled from "styled-components";
// Assets
import ContactImg1 from "../../assets/img/contact-1.png";
import ContactImg2 from "../../assets/img/contact-2.png";
import ContactImg3 from "../../assets/img/contact-3.png";

export default function Contact() {
  return (
    <Wrapper id="contact">
      <div className="lightBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Let's Get in Touch</h1>
            <p className="font13">
              Reach out to us for any inquiries. We're here to help and collaborate with you on exciting new projects.
            </p>
          </HeaderInfo>

          <div className="row" style={{ paddingBottom: "30px" }}>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <Form>
                <label className="font13">First Name:</label>
                <input type="text" id="fname" name="fname" className="font20 extraBold" />
                <label className="font13">Email:</label>
                <input type="email" id="email" name="email" className="font20 extraBold" />
                <label className="font13">Subject:</label>
                <input type="text" id="subject" name="subject" className="font20 extraBold" />
                <label className="font13">Message:</label>
                <textarea rows="4" cols="50" id="message" name="message" className="font20 extraBold" />
              </Form>

              <SumbitWrapper className="flex">
                <ButtonInput type="submit" value="Send Message" className="pointer animate radius8" />
              </SumbitWrapper>
            </div>

            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 flex">
              <div style={{ width: "50%" }} className="flexNullCenter flexColumn">
                <ContactImgBox>
                  <img src={ContactImg1} alt="office" className="radius8" />
                </ContactImgBox>
                <ContactImgBox>
                  <img src={ContactImg2} alt="office" className="radius8" />
                </ContactImgBox>
              </div>
              <div style={{ width: "50%" }}>
                <div style={{ marginTop: "100px" }}>
                  <img src={ContactImg3} alt="office" className="radius8" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;

const HeaderInfo = styled.div`
  padding: 70px 0 30px 0;
  @media (max-width: 860px) {
    text-align: center;
  }
`;

const Form = styled.form`
  padding: 40px 0 30px 0;
  input,
  textarea {
    width: 100%;
    background-color: transparent;
    border: 0px;
    outline: none;
    box-shadow: none;
    border-bottom: 2px solid #707070;
    height: 40px;
    margin-bottom: 30px;
    padding-left: 10px;
    font-size: 16px;
    color: #333;
  }
  
  textarea {
    min-height: 120px;
  }

  label {
    font-size: 14px;
    margin-bottom: 5px;
    color: #333;
    display: block;
  }

  @media (max-width: 860px) {
    padding: 30px 0;
  }
`;

const ButtonInput = styled.input`
  border: 1px solid #7620ff;
  background-color: #7620ff;
  width: 100%;
  padding: 15px;
  outline: none;
  color: #fff;
  font-size: 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: #580cd2;
    border: 1px solid #7620ff;
    color: #fff;
  }

  @media (max-width: 991px) {
    margin: 0 auto;
  }
`;

const ContactImgBox = styled.div`
  max-width: 200px;
  margin: 10px 30px 10px 0;
  border-radius: 8px;
  overflow: hidden;

  img {
    width: 100%;
    border-radius: 8px;
    object-fit: cover;
  }
`;

const SumbitWrapper = styled.div`
  @media (max-width: 991px) {
    width: 100%;
    margin-bottom: 50px;
  }
`;

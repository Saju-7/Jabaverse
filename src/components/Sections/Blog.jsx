import React from "react";
import styled from "styled-components";
// Components
import BlogBox from "../Elements/BlogBox";
import FullButton from "../Buttons/FullButton";
import TestimonialSlider from "../Elements/TestimonialSlider";

export default function Blog() {
  return (
    <Wrapper id="blog">
      {/* Blog Categories */}
      <div className="whiteBg">
        <div className="container">
          <CategorySection className="textCenter">
            <CategoryButton>Web Development Tips</CategoryButton>
            <CategoryButton>Marketing Strategies</CategoryButton>
            <CategoryButton>Design Insights</CategoryButton>
            <CategoryButton>Business Growth</CategoryButton>
          </CategorySection>

          <HeaderInfo>
            <h1 className="font40 extraBold">Our Blog Stories</h1>
            <p className="font13">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
              <br />
              labore et dolore magna aliquyam erat, sed diam voluptua.
            </p>
          </HeaderInfo>

          {/* Featured Blog Post */}
          <FeaturedPost>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <BlogBox
                title="Featured: New Office Expansion!"
                text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                tag="company"
                author="Luke Skywalker, 2 days ago"
                action={() => alert("clicked")}
                featured
              />
            </div>
          </FeaturedPost>

          {/* Regular Blog Posts */}
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="New Office!"
                text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                tag="company"
                author="Luke Skywalker, 2 days ago"
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="Marketing Strategies"
                text="Learn the latest trends and techniques in digital marketing that can boost your business."
                tag="marketing"
                author="Leia Organa, 5 days ago"
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="Web Development Best Practices"
                text="The most effective web development strategies that can enhance user experience and performance."
                tag="web-dev"
                author="Han Solo, 10 days ago"
                action={() => alert("clicked")}
              />
            </div>
          </div>

          {/* Load More Button */}
          <div className="row flexCenter">
            <div style={{ margin: "50px 0", width: "200px" }}>
              <FullButton title="Load More" action={() => alert("clicked")} />
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="lightBg" style={{ padding: "50px 0" }}>
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">What They Say?</h1>
            <p className="font13">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
              <br />
              labore et dolore magna aliquyam erat, sed diam voluptua.
            </p>
          </HeaderInfo>
          <TestimonialSlider />
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding-top: 20px;
`;

const HeaderInfo = styled.div`
  margin-bottom: 30px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;

const CategorySection = styled.div`
  display: flex;
  justify-content: center;
  margin: 30px 0;
  @media (max-width: 860px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const CategoryButton = styled.button`
  background-color: #7620ff;
  color: #fff;
  border: none;
  padding: 15px 20px;
  margin: 5px;
  cursor: pointer;
  outline: none;
  font-size: 14px;
  transition: 0.3s;
  border-radius: 15px;  /* Added border radius for rounded corners */

  &:hover {
    background-color: #7620ff;
  }
`;


const FeaturedPost = styled.div`
  margin-bottom: 50px;
  background-color: #f8f9fa;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  .col-xs-12 {
    padding: 0;
  }

  & h3 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  & p {
    font-size: 14px;
    margin-bottom: 15px;
  }
`;


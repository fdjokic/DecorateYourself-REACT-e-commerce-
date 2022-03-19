import React from "react";
import img from "../assets/about-img.jpg";
import styled from "styled-components";
import PageHero from "../components/PageHero";
const About = () => {
  return (
    <Wrapper>
      <PageHero title="About" />
      <div>
        <section>
          We are brand with authenticity. Influential, innovative and
          progressive, Decorate Yourself is reinventing a wholly modern approach
          to fashion. Under the new vision of creative director Filip Djokic,
          the House has redefined luxury for the 21st century, further
          reinforcing its position as one of the world’s most desirable fashion
          houses. Eclectic, contemporary, romantic—Decorate Yourself products
          represent the pinnacle of Italian craftsmanship and are unsurpassed
          for their quality and attention to detail.
        </section>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 100vw;
  max-width: 100%;

  height: 95vh;
  background-image: url(${img});
  background-repeat: no-repeat;

  /* Center and scale the image nicely */
  background-position: center;
  background-size: cover;
  section {
    z-index: 1;
    position: absolute;
    background-size: cover;
    top: 60%;
    height: 25%;
    padding: 1.3rem;
    width: 40%;
    left: 40%;
    color: white;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media only screen and (max-width: 1200px) {
    section {
      font-size: 90%;
      height: 25%;
      padding: 1rem;
    }
  }
  @media only screen and (max-width: 992px) {
    section {
      font-size: 78%;
      padding: 0.8rem;
      width: 50%;
      height: 20%;
      top: 70%;
    }
  }
  @media only screen and (max-width: 768px) {
    section {
      font-size: 73%;
      height: 20%;
      top: 70%;
    }
  }
  @media only screen and (max-width: 700px) {
    section {
      font-size: 70%;
      height: 24%;
      width: 50%;
      top: 70%;
    }
  }
  @media only screen and (max-width: 650px) {
    section {
      font-size: 70%;
      width: 50%;
    }
  }
  @media only screen and (max-width: 630px) {
    section {
      font-size: 65%;
      width: 50%;
    }
    @media only screen and (max-width: 560px) {
      section {
        font-size: 60%;
        width: 50%;
        height: 20%;
      }
    }
  }
`;
export default About;

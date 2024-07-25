import React from "react";
import Footer from "../common/Footer";
import "../styleSheet/AboutUs.css";
import pageImage from "../assets/Rectangle 1022.png";
import mailImage from "../assets/mail.png";
import { socialMediaPlatforms } from "../Data/SocialMedia";
const AboutPage = () => {
  return (
    <div className="AboutUsWrapper">
      <div className="content">
        <section className="heroContainer">
          <div className="AboutContainer">
            <h2>About Us</h2>
          </div>
          <section className="ourVisionContainer">
            <h3>Our Vision</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              repudiandae deleniti ut labore totam at laborum ab laudantium
              aliquam architecto, dolorem, voluptatibus rem doloribus est soluta
              consequatur ratione et aperiam. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Delectus repudiandae deleniti ut
              labore totam at laborum ab laudantium aliquam architecto, dolorem,
              voluptatibus rem doloribus est soluta consequatur ratione et
              aperiam.
            </p>
          </section>
          <section className="ourMissionContainer">
            <h3>Our Mission</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              repudiandae deleniti ut labore totam at laborum ab laudantium
              aliquam architecto, dolorem, voluptatibus rem doloribus est soluta
              consequatur ratione et aperiam. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Delectus repudiandae deleniti ut
              labore totam at laborum ab laudantium aliquam architecto, dolorem,
              voluptatibus rem doloribus est soluta consequatur ratione et
              aperiam.
            </p>
          </section>
          <section className="ourServicesContainer">
            <h3>Our Services</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              repudiandae deleniti ut labore totam at laborum ab laudantium
              aliquam architecto, dolorem, voluptatibus rem doloribus est soluta
              consequatur ratione et aperiam. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Delectus repudiandae deleniti ut
              labore totam at laborum ab laudantium aliquam architecto, dolorem,
              voluptatibus rem doloribus est soluta consequatur ratione et
              aperiam.
            </p>
          </section>
        </section>
        <section className="rightHeroSection">
          <section className="pageImageContainer">
            <img src={pageImage} alt="team-image" />
          </section>
          <section className="getIntouchContainer">
            <section className="socialMediaContainer">
              {socialMediaPlatforms.map((item) => (
                <div className="iconsAndTextContainer">
                  <img src={item.image} alt="social media platforms" />
                  <p>{item.text}</p>
                </div>
              ))}
            </section>
            <section className="mailContainer">
              <img src={mailImage} alt="mail of client" />
              <p>readerapp@gmail.com</p>
            </section>
          </section>
        </section>
      </div>
    </div>
  );
}

export default AboutPage
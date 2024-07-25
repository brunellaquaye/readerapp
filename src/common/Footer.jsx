import React from "react";
import { socialMediaPlatforms } from "../Data/SocialMedia";
import "../styleSheet/Footer.css";

function Footer() {
  return (
    <footer className="footerContainer bg-gray-950">
      <div className="footerWrapper">
        <div className="footerCaptionContainer">
          <h2 className="footerCaption">READERAPP</h2>
        </div>
        <section className="footerSectionsContainer">
          <section className="aboutUsContainer">
            <div>
              <h2 className="headings">About Us</h2>
            </div>
            <p className="ml-3">We bring the world of books and artwork to your doorslitia et explicabo maxime eaque dolor rem cum quibusdam officiis impedit corrupti cupiditate.</p>
          </section>
          <section className="informationContainer">
            <h2 className="headings">Information</h2>
            <ul>
              <li>About Us</li>
              <li>News and Updates</li>
            </ul>
          </section>
          <section className="helpfulLinksContainer">
            <h2 className="headings">Helpful links</h2>
            <ul>
              <li>Terms and Conditions</li>
              {/* <li>Privacy</li> */}
              <li>Chat with Us</li>
            </ul>
          </section>
          <section className="subscribeContainer">
            <p>Subscribe for More Info</p>
            <form>
              <input
                type="email"
                name="useremail"
                placeholder="Enter your email"
                required
              />
              <button type="submit">Subscribe</button>
            </form>
          </section>
        </section>
        <div className="socialsContainer">
          {socialMediaPlatforms.map((item) => (
            <div className="iconContainer">
              <img
                className="socialsIcon"
                key={item.id}
                src={item.image}
                alt={item.name}
              />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;

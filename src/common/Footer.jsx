import React from "react";
import { socialMediaPlatforms } from "../Data/SocialMedia";
import "../styleSheet/Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footerContainer bg-[#1E1E1E] ">
      <div className="footerWrapper">
        <div className="footerCaptionContainer">
          <h2 className="footerCaption ">READERAPP</h2>
        </div>
        <section className="footerSectionsContainer ">
          <section className="aboutUsContainer  ">
            <div>
              <h2 className="headings  ">About Us</h2>
            </div>
            <p className="bg-red-40 pr-6">
            Discover books and digital art on ReaderApp.
            Explore our diverse collection of ebooks, digital art, and paintings, all in one place.
            </p>
          </section>
          <section className="informationContainer">
            <h2 className="headings">Information</h2>
            <ul>
              <li>
                <Link
                  to="/aboutPage"
                  className="text-white hover:text-orange-400 text-[12px]"
                >
                  About Us
                </Link>
              </li>
              <li>
                {" "}
                <Link to="/NewsPage"
                  className="text-white hover:text-orange-400 text-[12px]"
                >
                  News and Updates
                </Link>
              </li>
            </ul>
          </section>
          <section className="helpfulLinksContainer">
            <h2 className="headings">Helpful links</h2>
            <ul>
              <li>
              <Link
                  to="/"
                  className="text-white hover:text-orange-400 text-[12px]"
                >
                 Terms and Conditions
                </Link>
              </li>
              {/* <li>Privacy</li> */}
              <li>
              <a
                  href="https://wa.link/ifefgv"
                  className="text-white hover:text-orange-400 text-[12px]"
                >
                  Chat With Us
                </a>
              </li>
            </ul>
          </section>
          <section className="subscribeContainer ">
            <p className="font-bold text-[13px]">Subscribe for More Info</p>
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
          
            <div className="iconContainer text-white text-[11px]">
            <p> 
All rights reserved.</p>
              {/* <img
                className="socialsIcon"
                key={item.id}
                src={item.image}
                alt={item.name}
              /> */}
            </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

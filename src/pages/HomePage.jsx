import React from "react";
// import Header from "../components/Header";
import "../styleSheet/LandingPage.css";
import firstImage from "../assets/Rectangle 1034.png";
import secondImage from "../assets/Rectangle 1035.png";
import thirdImage from "../assets/Rectangle 1036.png";
import arrow1 from "../assets/Arrow 1.png";
import arrow2 from "../assets/Arrow 2.png";
import polygon from "../assets/Polygon 2.png";
const HomePage = () => {
  return (
    <div className="LandingPageWrapper">
      <section className="overlayContainer">
        {/* <Header pageName="Contact Us" /> */}
        <div className="overlayText">
          <p style={{ color: "#1E1E1E" }}>Dive into the world of</p>
          <p style={{ color: "#ED7117" }}>Books</p>
          <p style={{ color: "#1E1E1E" }}>and</p>
          <p style={{ color: "#ED7117" }}>Digital Art</p>
        </div>
      </section>
      <section className="displayOfArtifactsSection">
        <p>Explore tons of digital</p>
        <p>art,books and paintings.</p>
        <div className="sectionImagesContainer">
          <img src={firstImage} alt="artifacts" />
          <img src={secondImage} style={{ marginTop: "5%" }} alt="artifacts" />
          <img src={thirdImage} style={{ marginTop: "10%" }} alt="artifacts" />
        </div>
      </section>
      <section className="aboutSection">
        <div
          className="polygons"
          style={{ position: "absolute", top: "38%", left: "-10%" }}
        >
          <img
            src={polygon}
            style={{
              width: "21.6px",
              height: "31.86px",
            }}
            alt="arrow"
          />
        </div>
        <div
          className="polygons"
          style={{
            position: "absolute",
            left: "70%",
            top: "-20%",
            transform: "rotate(220deg)",
          }}
        >
          <img
            src={polygon}
            style={{ width: "21.6px", height: "31.86px" }}
            alt="arrow"
          />
        </div>
        <div
          className="polygons"
          style={{
            position: "absolute",
            left: "50%",
            top: "100%",
            transform: "rotate(250deg)",
          }}
        >
          <img
            src={polygon}
            style={{ width: "21.6px", height: "31.86px" }}
            alt="arrow"
          />
        </div>
        <div className="aboutHeading">
          <p style={{ textAlign: "left" }}>About</p>
          <p style={{ textAlign: "right" }}>us</p>
        </div>
        <div className="aboutContent">
          <p>
          At ReaderApp, we believe in the power of stories to inspire, educate, and connect people.
          Founded in 2018, our platform offers a vibrant marketplace where authors can showcase their work and readers can discover new voices.
          With AwStore, our mobile app, we provide a unique space for book lovers to purchase, review, and engage directly with their favorite authors.
          Whether you're an avid reader or an aspiring writer, ReaderApp is your gateway to a world of endless literary possibilities.
          Join us on our mission to celebrate and share the written word.
          </p>
          <div className="learnMoreContainer">
            <div
              className="polygons"
              style={{ position: "absolute", left: "-100%", top: "450%" }}
            >
              <img
                src={polygon}
                style={{ width: "21.6px", height: "31.86px" }}
                alt="arrow"
              />
            </div>
            <div
              className="polygons"
              style={{
                position: "absolute",
                right: "-90%",
                top: "330%",
                transform: "rotate(220deg)",
              }}
            >
              <img
                src={polygon}
                style={{ width: "21.6px", height: "31.86px" }}
                alt="arrow"
              />
            </div>
            <div
              className="polygons"
              style={{
                position: "absolute",
                right: "-60%",
                top: "470%",
                transform: "rotate(250deg)",
              }}
            >
              <img
                src={polygon}
                style={{ width: "21.6px", height: "31.86px" }}
                alt="arrow"
              />
            </div>
            <p>Learn More</p>
            <img src={arrow2} alt="arrow to about us page" />
          </div>
        </div>
      </section>
      <section className="discoverySection">
        <p>Let's discover something </p>
        <p>
          <em>cool</em> together
        </p>
        <div className="mobileAppDownloadContainer">
          <p>Download Mobile app</p>
          <img src={arrow1} alt="arrow to mobile app" />
        </div>
      </section>
    </div>
  );

}

export default HomePage
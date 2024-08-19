import "../styleSheet/AboutUs.css";
import pageImage from "../assets/Rectangle 1022.png";
import mailImage from "../assets/mail.png";
import { socialMediaPlatforms } from "../Data/SocialMedia";
const AboutPage = () => {
  return (
    <div className="w-[90%] mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <section className="heroContainer">
          <div className="AboutContainer">
            <h2>About Us</h2>
          </div>
          <section className="ourVisionContainer">
            <h3>Our Vision</h3>
            <p>
              We envision a world where literature and art are seamlessly
              integrated into daily life, accessible to all, and appreciated by
              everyone. Our goal is to become the leading platform for
              discovering, sharing, and celebrating digital content, connecting
              creators with their audience in meaningful ways.
            </p>
          </section>
          <section className="ourMissionContainer">
            <h3>Our Mission</h3>
            <p>
              Our mission is to empower authors and artists by providing them
              with a vibrant platform to share their creativity with the world.
              We aim to make literature and art accessible to everyone,
              fostering a community of readers and creators who inspire and
              support each other.
            </p>
          </section>
          <section className="ourServicesContainer ">
            <h3>Our Services</h3>
            <p>
              <ul>
                <li>
                  <h4>
                    <b>Digital Bookstore</b>
                  </h4>
                  <p>
                    A diverse collection of ebooks spanning various genres,
                    available for purchase and download.
                  </p>
                </li>
                <li>
                  <h4>
                    <b>Art Marketplace</b>
                  </h4>
                  <p>
                    A curated selection of digital art and paintings from
                    talented artists around the world.
                  </p>
                </li>
                <li>
                  <h4>
                    <b>Author & Artist Profiles</b>
                  </h4>
                  <p>
                    Personalized pages where creators can showcase their work,
                    connect with fans, and engage with the community.
                  </p>
                </li>
                <li>
                  <h4>
                    <b>Interactive Features</b>
                  </h4>
                  <p>
                    User reviews, ratings, and comments to foster a dynamic and
                    engaging environment for readers and art lovers.
                  </p>
                </li>
                <li>
                  <h4>
                    <b>Mobile Access</b>
                  </h4>
                  <p>
                    Our AwStore app offers a seamless browsing and purchasing
                    experience, allowing users to enjoy content on the go.
                  </p>
                </li>
              </ul>
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
                <div key={item.id} className="iconsAndTextContainer">
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
};

export default AboutPage;
// import Header from "../components/Header";
import "../styleSheet/LandingPage.css";
import firstImage from "../assets/Rectangle 1034.png";
import secondImage from "../assets/Rectangle 1035.png";
import thirdImage from "../assets/Rectangle 1036.png";
import arrow1 from "../assets/Arrow 1.png";
import arrow2 from "../assets/Arrow 2.png";
import { Link } from "react-router-dom";

const HomePage = () => {
  const playStoreUrl = "https://play.google.com/store";
  
  return (
    <div className="">
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
        <div className="flex flex-col lg:flex-row justify-between items-center w-[90%] mx-auto mt-2 pl-6 ">
          <img src={firstImage} alt="artifacts" className="aspect-square h-70 w-70 md:h-80 md:w-80" />
          <img src={secondImage} alt="artifacts" className="aspect-square h-70 w-70 md:h-80 md:w-80" />
          <img src={thirdImage} alt="artifacts" className="aspect-square h-70 w-70 md:h-80 md:w-80" />
        </div>
      </section>
      <section className="w-[90%] mx-auto">
        <div className="font-extrabold text-5xl">
          <p style={{ textAlign: "center" }}>About Us</p>
        </div>
        <div className="text-center text-2xl my-3">
          <p className="my-5">
            At ReaderApp, we believe in the power of stories to inspire,
            educate, and connect people. Founded in 2018, our platform offers a
            vibrant marketplace where authors can showcase their work and
            readers can discover new voices. With AwStore, our mobile app, we
            provide a unique space for book lovers to purchase, review, and
            engage directly with their favorite authors. Whether you're an avid
            reader or an aspiring writer, ReaderApp is your gateway to a world
            of endless literary possibilities. Join us on our mission to
            celebrate and share the written word.
          </p>
          <Link to="/aboutPage" className="text-white text-[12px]">
          
          <div className="mt-10 border rounded-md bg-[#1e1e1e] text-xl hover:text-orange-400  text-white flex items-center gap-2 w-fit p-2 px-7 mx-auto">
            <p>Learn More</p>
            <span className="text-5xl h-14">&#8594;</span>
          </div>
        </Link>
        </div>
      </section>

      <section
        className="flex flex-col mx-auto items-center bg-black text-white p-6 mt-8 mb-4"
        style={{ width: "80%" }}
      >
        <p className="text-4xl font-light">Let's discover something cool</p>
        <a
          href={playStoreUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer"
        >
          <div className="flex items-center gap-4 cursor-pointer mt-6 hover:text-orange-400">
            <p className="text-2xl ">Download Mobile App</p>
            <img src={arrow1} alt="arrow" className="w-10" />
          </div>
        </a>
      </section>
    </div>
  );
};

export default HomePage;
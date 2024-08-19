// import Header from "../components/Header";
import "../styleSheet/LandingPage.css";
import firstImage from "../assets/Rectangle 1034.png";
import secondImage from "../assets/Rectangle 1035.png";
import thirdImage from "../assets/Rectangle 1036.png";
import arrow1 from "../assets/Arrow 1.png";

const HomePage = () => {
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
          <div className="mt-10 border rounded-md bg-[#1e1e1e] text-white flex items-center gap-2 w-fit p-2 px-7 mx-auto">
            <p>Learn More</p>
            <span className="text-5xl h-14">&#8594;</span>{" "}
          </div>
        </div>
      </section>
      <section className="mb-10 border rounded-md bg-[#1e1e1e] text-3xl text-white flex flex-col items-center gap-2 w-fit p-4 px-7 mx-auto">
        <p className="text-center">Let's discover something cool together</p>
        <div className="flex items-center gap-3">
          <p>Download Mobile app</p>
          <img src={arrow1} alt="arrow to mobile app" />
        </div>
      </section>
    </div>
  );
};

export default HomePage;
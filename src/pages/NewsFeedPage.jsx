import rec from "./rec.jpg";
import artwork from "./artwork.png";
import spotlight1 from "./spotlight1.png";
import spotlight2 from "./spotlight2.png";
import spotlight3 from "./spotlight3.png";
import "./News.css";

export const News = () => {
  return (
    <div className="news">
      <section className="container">
        <div className="mb-5 w-full items-center box-border text-center flex-1 ">
          <div className="bg-gray-500 h-10 w-10 mx-auto mb-2.5 "></div>
          <h1 className="text-4xl m-0">All You Need To Know About</h1>
          <h1 className="text-4xl m-0 text-[#ff7200]">READERAPP</h1>
          <div className="bg-white h-10 w-10 mx-auto my-2.5 rounded-full"></div>
        </div>

        <div className=" justify-center items-center ">
          <img
            src={rec}
            className="w-[420px] h-auto  mx-auto"
            alt="This is ..."
          />
        </div>

        <div class="justify-center items-center text-align">
          <div class=" p-4">
            <h2 class="text-[#ff7200] text-[1.5rem]">HOT NEWS</h2>

            {Array(3)
              .fill()
              .map((_, index) => (
                <div key={index} className="mb-2">
                  <h4 className="text-[1.2rem] font-bold">
                    Art will make you happy. Here's how.
                  </h4>
                  <h4 className="text-[1.2rem] font-bold">Here's how.</h4>
                  <p className="text-gray-500 text-[1rem]">
                    29min ago by Austella
                  </p>
                  <hr className="border-gray-300 mt-6" />
                </div>
              ))}
          </div>
        </div>
      </section>

      <div className="spotlight-container">
        <div className="spotlight-left">
          <img src={artwork} className="main-image" alt="Main Spotlight" />
          <div className="main-text">
            <h2>Explore all digital artworks across the world.</h2>
            <p>35 mins ago by Avantika</p>
          </div>
          
        </div>
        <div className="spotlight-right">
          <h2 className="spotlight-title text-[#ff7200]">Spotlight</h2>
          <div className="spotlight-item">
            <img
              src={spotlight1}
              alt="Spotlight Thumbnail"
              className="thumbnail"
            />
            <div>
              <h3>Art will make you happy. Here's how.</h3>
              <p>22 mins ago by Avantika</p>
            </div>
          </div>
          <div className="spotlight-item">
            <img
              src={spotlight2}
              alt="Spotlight Thumbnail"
              className="thumbnail"
            />
            <div>
              <h3>Art will make you happy. Here's how.</h3>
              <p>22 mins ago by Avantika</p>
            </div>
          </div>
          <div className="spotlight-item">
            <img
              src={spotlight3}
              alt="Spotlight Thumbnail"
              className="thumbnail"
            />
            <div>
              <h3>Art will make you happy. Here's how.</h3>
              <p>22 mins ago by Avantika</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

import "../styleSheet/AwStore.css";
import onboarding from "../../assets/Onboarding.png";
import collection from "../../assets/bookCollection.png";


const AwStore = () => {
  const playStoreUrl = "https://play.google.com/store";
  return (

//     <div className="awstore-page">
//       <section className="flex justify-center bg-white p-2.5 max-w-[1000px] mx-auto my-4">
//         <div className="w-full flex justify-between items-center">
//           <h3 className="font-bold text-orange-500">ReaderApp</h3>
//           <a  href={playStoreUrl} 
//           target="_blank" 
//           rel="noopener noreferrer" 
//        ><button 
//        className="download-button ">Download App</button>
//           </a>
//            </div>
//       </section>


    <div className="awstore-page  px-6 py-6 lg:px-36 md:px-20">

      <section className="hero-section">
        <div className="hero">
          <div className="hero-content">
            <h1>All your books and Digital Art in one place</h1>
            <p>
              This is the perfect platform for artists and authors. Create a
              profile, upload your artwork, and sell your works to buyers all
              over the world.
            </p>
          </div>
          <div className="app-preview">
            <img
              src={onboarding}
              alt="App Screenshot"
              className="slanted-image"
            />
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="feature-card">
          <h3>Easy-to-use interface</h3>
          <p>
            Awstore has an easy-to-use interface that allows users to search for
            specific items or browse by category.
          </p>
        </div>
        <div className="feature-card">
          <h3>All Genres of books available.</h3>
          <p>
            Create an account to explore all books, digital art, and paintings
            available.
          </p>
        </div>
      </section>

      <section className="hero-section">
        <div className="cta-content">
          <div className="cta-image">
            <img
              src={collection}
              alt="App Screenshot"
              className="cta-slanted-image"
            />
          </div>
          <div className="cta-text">
            <h2>Profit from your work</h2>
            <p>
              This is the perfect platform for artists and authors. Create a
              profile, upload your artwork, and sell to buyers all over the
              world.
            </p>
            <a  href={playStoreUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
       ><button 
       className="download-button text-[#ff7200] bg-white hover:bg-[#ffe0b2] ">Download App</button>
          </a>
          </div>
        </div>
      </section>

      <section className="download-section">
        <div className="download-header">
          <h3>Get the App for Free and Start Now </h3>
        </div>

        
        <a  href={playStoreUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
       ><button 
       className="download-button ">Download App</button>
          </a> </section>
    </div>
  );
};

export default AwStore;

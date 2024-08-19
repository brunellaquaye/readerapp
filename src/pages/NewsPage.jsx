import React from "react";
import digievent from "../assets/digievent.jpeg";
import news from "../assets/news.jpeg";
import digievent2 from "../assets/digievent2.jpeg";
import Newscard from "../components/Newscard";
import Newshero from "../components/Newshero";
import eventer from "../assets/eventer.jpg";
import { useEffect } from "react";

const NewsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const LatestNews = [

    { id:1,
      title: "Rising Voices: African Writers Platform Showcases New Wave of Literary Talent",
      description:
        "The African Writers Platform is highlighting emerging literary talent across the continent, offering a space for diverse voices and stories to reach a global audience.",
        image: digievent,
    },
    {
        id:2,
      title: "New Voices Emerge on African Writers Platform",

      description:
        "The African Writers Platform is spotlighting fresh literary talent, offering readers a glimpse into the diverse stories and perspectives shaping the continent's future.",
      image: digievent2,
    },
    {

        id:3,
      title: "Exploring the Literary Genius of Chimamanda Ngozi Adichie",

      description:
        "The African Writers Platform delves into the impactful work of Chimamanda Ngozi Adichie, celebrating her contributions to contemporary literature and her powerful voice in shaping African storytelling.",
      image: eventer,
    },
  ];
  const NewsData1 = [
    {
      title: "Highlighting the Voices of African Fantasy Writers",
      description:
        "The African Writers Platform shines a spotlight on the dynamic sub-community of African fantasy writers, celebrating their imaginative world-building and unique takes on the genre.",
      image: news,
    },
  ];
  return (
    <div className=" isolate px-6 py-24 sm:py-36 md:px-28 lg:px-32">
      <section className="justify-center ">
        <div className=" opacity-2 backdrop-blur-xl rounded-lg p-6 m-6 shadow-xl">
          <p className="text-center text-sm tracking-widest">
            WELCOME TO READERAPP
          </p>
          <p className="text-center text-2xl mt-3 tracking-tight">
            Discover Insights, Updates, and Stories from the World of{" "}
            <b className="text-orange-600">READERAPP</b>!
          </p>
        </div>
        <div className="flex p-6">
          <h1 className="text-3xl font-bold">News</h1>
        </div>

        <Newshero />
      </section>
      <div className="flex p-6">
        <h1 className="text-2xl font-bold">Trending</h1>
      </div>
      <section>
        <div className="flex-row ">
          {NewsData1.map((News) => (
            <Newscard
              className="h-24 w-24 p-2"
              key={NewsData1}
              image={News.image}
              title={News.title}
              description={News.description}
            />
          ))}
        </div>
      </section>
      <section className="mt-4">
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold">Latest News</h1>
          <h1 className="text-md font-bold text-orange-600 ">See All</h1>
          {/* arrow icon here */}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {LatestNews.map((news) => (
            <Newscard
              key={news.id}
              image={news.image}
              title={news.title}
              description={news.description}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default NewsPage;

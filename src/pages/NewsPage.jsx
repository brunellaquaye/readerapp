import React from "react";
import hero from "../assets/hero.jpeg";
import news from "../assets/news.jpeg";
import events from "../assets/events.jpeg";
import Newscard from "../components/Newscard";
import Newshero from "../components/Newshero";

const NewsPage = () => {
  const LatestNews = [
    {
      id: 1,
      title: "Behind the Horror: Inspired By True Stories",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciend sed lquia.",
      image: news,
    },
    {
      id: 2,
      title: "The Last of Us Part II",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciend sed lquia.",
      image: events,
    },
    {
      id: 3,
      title: "The Last of Us Part II",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciend sed lquia.",
      image: "../assets/events.jpeg",
    },
  ];
  const NewsData1 = [
    {
      title: "Behind the Horror: Inspired By True Stories",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis asperiores porro hic autem sed laboriosam aperiam, id quod, voluptatibus minus, debitis quia.",
      image: news,
    },
  ];
  return (
    <div className=" isolate px-6 py-24 bg-red-300 sm:py-36 md:px-28">
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
        <div className="flex-row">
          {NewsData1.map((News) => (
            <Newscard
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

import { useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
const API_KEY = "6c34dd8c6abc44299b3089212e958ff4";

const Sorotan = () => {
  const [articles, setArticles] = useState([]);

  const fetchNews = async () => {
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/everything?q=Automotive&language=id&apiKey=${API_KEY}`
      );
      setArticles(response.data.articles.slice(0, 6)); // Fetching the first 3 articles
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching Sorotan news:", error);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <div className="grid grid-cols-2  lg:grid-cols-3 gap-3 py-4">
      {articles.map((article) => (
        <SorotanNewsCard key={article.url} {...article} />
      ))}
    </div>
  );
};
const SorotanNewsCard = ({ title, url, urlToImage, author }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="h-fit hover:shadow-md transition-shadow duration-300 ease-in"
    >
      <div className="overflow-hidden">
        {urlToImage && (
          <img
            src={urlToImage}
            alt={title}
            loading="lazy"
            className="w-full  h-[100px] md:h-48 xl:h-72 object-cover object-center rounded-md"
          />
        )}
      </div>
      <div className="p-2 h-32 flex flex-col justify-between">
        <h5 className="mt-2 text-sm md:text-lg font-bold line-clamp-3 md:line-clamp-2">
          {title}
        </h5>
        <p className="text-xs text-blue-700 md:text-sm font-medium mt-1">
          {author}
        </p>
      </div>
    </a>
  );
};

const Trend = () => {
  const [articles, setArticles] = useState([]);

  const fetchNews = async () => {
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/everything?q=Indonesia&sortBy=popularity&apiKey=${API_KEY}`
      );
      setArticles(response.data.articles.slice(0, 5)); // Fetching the first 5 articles
    } catch (error) {
      console.error("Error fetching Trend news:", error);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <div className="flex flex-col space-y-4">
      {articles.map((article) => (
        <TrendNewsCard
          key={article.url}
          title={article.title}
          author={article.author || "Unknown"}
          source={article.source}
        />
      ))}
    </div>
  );
};

const TrendNewsCard = ({ title, author, source }) => {
  return (
    <div className="p-4 shadow-sm hover:shadow-md transition-shadow bg-white rounded-lg">
      <h5 className="text-lg font-bold line-clamp-2">{title}</h5>
      <p className="text-sm text-gray-600">{author}</p>
      <p className="text-sm text-blue-700 font-medium">{source.name}</p>
    </div>
  );
};

TrendNewsCard.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string,
  source: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export const SorotanTrend = () => {
  return (
    <>
      <div className="bg-gray-100 py-6">
        <div className="w-[90%] flex flex-col mx-auto ">
          <h2 className="font-semibold md:text-2xl ">Sorotan</h2>
          <Sorotan />
        </div>
        <div className="w-[90%] flex flex-col mx-auto my-8   ">
          <h2 className="text-2xl font-bold mb-4">Berita Terpopuler</h2>
          <Trend />
        </div>
      </div>
    </>
  );
};

SorotanNewsCard.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  urlToImage: PropTypes.string.isRequired,
};

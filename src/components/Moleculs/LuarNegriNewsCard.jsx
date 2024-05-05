import { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";

export const AbroadNewsCard = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);
  const [isloading, setisLoading] = useState(false);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setisLoading(true);
        const response = await axios.get(
          `https://newsapi.org/v2/everything?q=Automotive&language=en&apiKey=6c34dd8c6abc44299b3089212e958ff4`
        );
        const slicedNews = response.data.articles.slice(0, 6);
        setArticles(slicedNews);
      } catch (err) {
        setError(err.message);
        console.error("Failed to fetch news:", err);
      }
      setisLoading(false);
    };

    fetchNews();
  }, []);

  const getNewsType = (content) => {
    // Example logic to determine news type based on content
    if (content.includes("technology")) {
      return "Technology";
    } else if (content.includes("Tesla")) {
      return "Future";
    } else if (content.includes("cars")) {
      return "Hybrid";
    } else {
      return "World News";
    }
  };

  if (isloading)
    return (
      <p className="flex justify-center items-center">
        Mohon maaf data diambil dari NewsAPI...
      </p>
    );
  if (error) return <p>Error loading news: {error}</p>;

  return (
    <>
      {articles.map((article, index) => (
        <a
          href={article.url}
          key={index}
          className="ring-1 cursor-pointer ring-slate-300 min-w-[300px] hover:bg-slate-200 duration-300 ease-in-out max-w-xs rounded-md flex flex-col hover:inset-1"
        >
          <img
            src={article.urlToImage || "https://via.placeholder.com/400"}
            alt={article.title}
            loading="lazy"
            className="h-48 w-full object-cover"
          />
          <div className="p-3 flex flex-col justify-between flex-grow">
            <div className="flex items-center gap-2 text-gray-500 text-sm font-semibold">
              <span className="text-red-600">
                {" "}
                {getNewsType(article.content)}
              </span>{" "}
            </div>
            <h3 className="font-bold mb-2">{article.title}</h3>
            <div className="mt-auto">
              <div className="flex text-gray-500 text-xs font-medium items-center justify-between">
                <span>{article.author || "Unknown"}</span>
                <span>
                  {new Date(article.publishedAt).toLocaleDateString()}
                </span>
              </div>
            </div>
          </div>
        </a>
      ))}
    </>
  );
};

AbroadNewsCard.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string.isRequired,
    urlToImage: PropTypes.string,
    author: PropTypes.string,
    publishedAt: PropTypes.string.isRequired,
    description: PropTypes.string,
    url: PropTypes.string.isRequired,
  }),
};

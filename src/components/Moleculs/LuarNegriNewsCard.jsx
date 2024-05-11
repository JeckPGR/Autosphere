import PropTypes from "prop-types";

const article = [
  {
    url: "https://www.wired.com/story/tesla-autopilot-risky-deaths-crashes-nhtsa-investigation/",
    urlToImage:
      "https://media.wired.com/photos/662bac01e1300add6b717312/191:100/w_1280,c_limit/Tesla-Safety-GettyImages-1235870628.jpg",
    title: "Tesla Autopilot Was Uniquely Risky—and May Still Be",
    content:
      "A federal report published today found that Teslas Autopilot system was involved in at least 13 fatal crashes in which drivers misused the system in ways the automaker should have foreseenand done mo… [+3533 chars]",
    author: "Aarian Marshall",
    publishedAt: "2024-04-26T19:38:55Z",
  },
  {
    url: "https://www.businessinsider.com/test-drive-cars-happy-with-jeep-grand-cherokee-4xe-ev-2024-4",
    urlToImage:
      "https://i.insider.com/662146b210c6b0cde5f0b740?width=1200&format=jpeg",
    title:
      "I test-drive dozens of cars every year for work and I won't buy an EV yet — I'm happy with my hybrid",
    content:
      "A 2023 Jeep Grand Cherokee 4xe plug-in hybrid.John Vincent\r\n<ul><li>John Vincent, an automotive editor, bought a 2023 Jeep Grand Cherokee 4xe plug-in hybrid in 2022.</li><li>He loves the SUV's versat… [+4115 chars]",
    author: "Jules Rogers",
    publishedAt: "2024-04-19T09:05:01Z",
  },
  {
    url: "https://www.wired.com/story/everything-you-need-to-know-about-hybrid-cars/",
    urlToImage:
      "https://media.wired.com/photos/663393c4547d38327b3c2a1e/191:100/w_1280,c_limit/Hybrid-Gars-Guide-Gear-GettyImages-1137081327.jpg",
    title: "Everything You Need to Know About Hybrid Cars",
    content:
      "Have you heard?The hybrids are coming. As sales growth falters for electric vehicles, particularly in the United States, automakers have started to turn their gaze toward the EVs less-charged-up cous… [+2587 chars]",
    author: "Aarian Marshall",
    publishedAt: "2024-05-03T09:30:00Z",
  },
  {
    url: "https://www.businessinsider.com/tesla-stock-tsla-quarterly-earnings-call-report-live-updates-2024-4",
    urlToImage:
      "https://i.insider.com/6622a0bc23b29110d300fb61?width=1200&format=jpeg",
    title:
      "Live updates: Tesla to report quarterly earnings today after market close",
    content:
      "Tesla CEO Elon Musk said in 2016 that the company's Autopilot technology was safer than a human driver.Pool/Getty Images\r\n<ul><li>Tesla reports first-quarter earnings on Tuesday.</li><li>The EV maker… [+1512 chars]",
    author: "Joe Ciolli,Matthew Fox",
    publishedAt: "2024-04-23T14:07:24Z",
  },
  {
    url: "https://arstechnica.com/cars/2024/04/linux-is-now-an-option-for-safety-minded-software-defined-vehicle-developers/",
    urlToImage:
      "https://cdn.arstechnica.net/wp-content/uploads/2024/04/GettyImages-1464706809-760x380.jpg",
    title:
      "Linux can finally run your car’s safety systems and driver-assistance features",
    content:
      "21\r\nThere's a new Linux distro on the scene today, and it's a bit specialized. Its development was led by the automotive electronics supplier Elektrobit, and it's the first open source OS that compli… [+4181 chars]",
    author: "Jonathan M. Gitlin",
    publishedAt: "2024-04-23T14:43:57Z",
  },
  {
    url: "https://www.teslarati.com/10000-byd-seagull-us-auto/",
    urlToImage:
      "https://www.teslarati.com/wp-content/uploads/2024/03/BYD-Seagull.jpg",
    title: "The $10k BYD Seagull EV is scaring the U.S. auto industry",
    content:
      "China is the world’s largest automotive market, and understandably so, an important one for electric vehicle (EV) makers like Tesla. Although competitive Chinese automaker BYD isn’t yet slated to ent… [+3070 chars]",
    author: "Zachary Visconti",
    publishedAt: "2024-04-10T15:46:09Z",
  },
];

export const AbroadNewsCard = () => {
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

  return (
    <>
      {article.map((article, index) => (
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

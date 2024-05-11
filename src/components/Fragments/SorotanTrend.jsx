import PropTypes from "prop-types";
const trendData = [
  {
    title:
      "The ‘Hollywood Con Queen’ gets a new documentary from Apple TV Plus",
    author: "Elizabeth Lopatto",
    source: "The Verge",
  },
  {
    title:
      "Secrets of the Octopus takes us inside the world of these “aliens on Earth”",
    author: "Jennifer Ouellette",
    source: "Ars Technica",
  },
  {
    title: "Apple Considers Expanding Manufacturing Base to Indonesia",
    author: "Tim Hardwick",
    source: "MacRumors",
  },
  {
    title:
      "Orangutan in the wild applied medicinal plant to heal its own injury, biologists say",
    author: "Bill Chappell",
    source: "NPR",
  },
  {
    title:
      "Apple keeps looking for new places to make its stuff that aren't China",
    author: "Jyoti Mann",
    source: "Business Insider",
  },
];

const sorotanData = [
  {
    url: "https://paultan.org/2024/04/17/byd-terpilih-sebagai-rakan-rasmi-euro-2024/",
    title: "BYD terpilih sebagai rakan rasmi Euro 2024",
    author: "Izwaashura Sadali",
    urlToImage:
      "https://paultan.org/image/2024/04/BYD-EURO-Cup-2024-1-BM-1200x700.jpg",
  },
  {
    url: "https://paultan.org/2024/04/25/beijing-2024-mazda-arata-concept-dipamerkan-varian-ev-dan-phev-versi-produksi-di-china-pada-2025/",
    title:
      "Beijing 2024: Mazda Arata concept dipamerkan- varian EV dan PHEV; versi produksi di China pada 2025",
    author: "Izwaashura Sadali",
    urlToImage:
      "https://paultan.org/image/2024/04/Mazda-Arata-concept_Beijing-2024_wm-6-BM-1200x630.jpeg",
  },
  {
    url: "https://paultan.org/2024/05/02/proton-x70-facelift-2024-disahkan-dengan-pemanduan/",
    title:
      "Proton X70 facelift 2024 disahkan, dengan pemanduan semi-autonomous Tahap 2 — termasuk ciri Lane Centering Assist",
    author: "Hazril Hafiz",
    urlToImage:
      "https://paultan.org/image/2024/02/2024-Proton-X70-spied-1_BM-1200x801.jpeg",
  },
  {
    url: "https://paultan.org/2024/04/30/beijing-2024-byd-ocean-m-concept-hot-hatch-ev-dengan-rwd-versi-produksi-dilancar-tahun-ini/",
    title:
      "Beijing 2024: BYD Ocean-M concept – hot hatch EV dengan RWD; versi produksi dilancar tahun ini",
    author: "Izwaashura Sadali",
    urlToImage:
      "https://paultan.org/image/2024/04/2024_AutoChinaBeijing_BYD_Ocean-M_Concept-1-BM-1200x801.jpg",
  },
];

const Sorotan = () => {
  return (
    <div className="grid grid-cols-2  lg:grid-cols-3 gap-3 py-4">
      {sorotanData.map((article) => (
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
      className="h-fit shadow-lg hover:shadow-slate-700/30 transition-shadow  duration-300 ease-in-out"
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
  return (
    <div className="flex flex-col space-y-4">
      {trendData.map((article) => (
        <TrendNewsCard
          key={article.title}
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
    <div className="p-4 cursor-pointer shadow-sm hover:shadow-md transition-shadow bg-white rounded-lg">
      <h5 className="text-lg font-bold line-clamp-2">{title}</h5>
      <p className="text-sm text-gray-600">{author}</p>
      <p className="text-sm text-blue-700 font-medium">{source}</p>
    </div>
  );
};

TrendNewsCard.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string,
  source: PropTypes.string.isRequired,
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

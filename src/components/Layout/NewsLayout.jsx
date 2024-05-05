import { NewsTrendGrid } from "../Fragments/NewsTrending,";
import { LatestNewsCard } from "../Moleculs/LatestNewsCard";
import FutureCar from "../../assets/BgImg/MobilFuture.jpeg";
import SUV from "../../assets/BgImg/SUV.jpg";

import { AbroadNewsCard } from "../Moleculs/LuarNegriNewsCard";
import { Seemore } from "../Moleculs/Seemore";
import { SorotanTrend } from "../Fragments/SorotanTrend";

const automotiveNews = [
  {
    title: "Evolusi Mobil Listrik di 2024",
    writer: "Ahmad Fauzi",
    img: FutureCar,
    type: "Mobil",
    timetoread: "5 min read",
    waktuPost: calculateTimeAgo(new Date(Date.now() - 9 * 60 * 60 * 1000)), // 9 hours ago
  },
  {
    title: "Pengaruh Teknologi Hidrogen pada Industri Otomotif",
    writer: "Siti Aisyah",
    img: FutureCar,
    type: "Otomotif",
    timetoread: "5 min read",
    waktuPost: calculateTimeAgo(new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)), // 1 week ago
  },
  {
    title: "Tantangan Infrastruktur Pengisian Daya untuk Mobil Listrik",
    writer: "Budi Raharjo",
    img: SUV,
    type: "Mobil",
    timetoread: "5 min read",
    waktuPost: calculateTimeAgo(
      new Date(Date.now() - 15 * 24 * 60 * 60 * 1000)
    ), // More than 2 weeks
  },
  {
    title: "Uji Keamanan Mobil Otonom Terbaru",
    writer: "Jessica Tania",
    img: SUV,
    type: "Mobil",
    timetoread: "5 min read",
    waktuPost: calculateTimeAgo(new Date(Date.now() - 2 * 24 * 60 * 60 * 1000)), // 2 days ago
  },
  {
    title: "Tren Modifikasi Mobil 2024",
    writer: "Andreas Setiawan",
    img: SUV,
    type: "Mobil",
    timetoread: "5 min read",
    waktuPost: calculateTimeAgo(
      new Date(Date.now() - 60 * 24 * 60 * 60 * 1000)
    ), // More than 2 weeks
  },
];
function calculateTimeAgo(date) {
  const now = new Date();
  const secondsPast = (now.getTime() - date.getTime()) / 1000;

  if (secondsPast < 60) {
    // less than a minute
    return `${Math.round(secondsPast)} seconds ago`;
  } else if (secondsPast < 3600) {
    // less than an hour
    return `${Math.round(secondsPast / 60)} minutes ago`;
  } else if (secondsPast < 86400) {
    // less than a day
    return `${Math.round(secondsPast / 3600)} hours ago`;
  } else if (secondsPast < 604800) {
    // less than a week
    return `${Math.round(secondsPast / 86400)} days ago`;
  } else if (secondsPast < 1209600) {
    // less than 2 weeks
    return `${Math.round(secondsPast / 604800)} weeks ago`;
  } else {
    return date.toLocaleDateString(); // exact date
  }
}
export const NewsLayout = () => {
  return (
    <>
      <h1 className="uppercase font-bold text-2xl md:text-4xl text-center mt-8 mb-5  px-3">
        Berita Trending{" "}
      </h1>

      <NewsTrendGrid />
      <Latestnews />
      <AbroadNews />
      <SorotanTrend />
    </>
  );
};

const AbroadNews = () => {
  return (
    <div className="text-black flex-col mt-10 my-4 w-[90%] flex mx-auto">
      <div className="flex justify-between text-lg   items-center">
        <h1 className="font-semibold md:text-2xl ">Berita Luar Negri {">"}</h1>
        <Seemore />
      </div>
      <div className="flex overflow-x-auto genre-dropdown sm:-w-4xl gap-3 py-4">
        <AbroadNewsCard />
      </div>
    </div>
  );
};

const Latestnews = () => {
  return (
    <div className="text-black  flex-col my-4 w-[90%] flex mx-auto">
      <div className="flex justify-between text-lg  items-center">
        <h1 className="font-semibold md:text-2xl   ">Berita Hangat {">"}</h1>
        <Seemore />
      </div>
      <div className="flex overflow-x-auto genre-dropdown  sm:-w-4xl gap-3 py-4">
        {/* Each child element should have a defined width, not just "w-full" if they need to be wider than their container for scrolling to activate */}
        {automotiveNews.map((news, index) => (
          <LatestNewsCard
            key={index}
            type={news.type}
            timetoread={news.timetoread}
            writer={news.writer}
            waktuPost={news.waktuPost}
            img={news.img}
          >
            {news.title}
          </LatestNewsCard>
        ))}
      </div>
    </div>
  );
};

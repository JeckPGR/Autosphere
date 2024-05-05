import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import PropTypes from "prop-types";
import { IdxSellCard } from "./IndexSellCard";
import { NewsCard } from "./NewsCard";

export default function SimpleSlider({
  IdxSellCardData,
  type = "Indexcard",
  NewsCardData,
  autoplay = false, // Default value is false for no autoplay
}) {
  const sliderRef = useRef(null);

  const defaultSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 640, // width maksimal untuk sm screen
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // width maksimal untuk md screen
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1146, // width maksimal untuk lg screen
        settings: {
          slidesToShow: 4,
        },
      },
    ],
  };

  // Extend defaultSettings with autoplay settings if autoplay is true
  const sliderSettings = autoplay
    ? {
        ...defaultSettings,
        autoplay: true,
        autoplaySpeed: 7000,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        cssEase: "linear",
        centerMode: true,
      }
    : defaultSettings;

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <>
      <div className="relative flex ">
        <Slider ref={sliderRef} {...sliderSettings} className="w-full ">
          {type === "Indexcard" &&
            IdxSellCardData.map((data, index) => (
              <IdxSellCard
                key={index}
                img={data.img}
                title={data.title}
                harga={data.harga}
                cicilharga={data.cicilharga}
                cicilX={data.cicilX}
              />
            ))}
          {type === "News" &&
            NewsCardData.map((data, index) => (
              <NewsCard
                key={index}
                title={data.title}
                deskripsi={data.deskripsi}
                img={data.img}
                tanggal={data.tanggal}
                type={data.type}
                CTA={data.CTA}
              />
            ))}
        </Slider>
        <button
          className="absolute top-1/2 lg:-left-6 -left-4 z-20 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-slate-200 duration-300 ease-out shadow-slate-800/30"
          onClick={handlePrev}
        >
          <IoIosArrowBack size={26} color="black" />
        </button>
        <button
          className="absolute top-1/2 lg:right-0 -right-5 md:right-1 z-20 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-slate-200 duration-300 ease-out shadow-slate-800/30"
          onClick={handleNext}
        >
          <IoIosArrowForward size={26} color="black" />
        </button>
      </div>
    </>
  );
}

SimpleSlider.propTypes = {
  IdxSellCardData: PropTypes.arrayOf(
    PropTypes.shape({
      img: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      harga: PropTypes.string.isRequired,
      cicilharga: PropTypes.string.isRequired,
      cicilX: PropTypes.number.isRequired,
    })
  ),
  NewsCardData: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      deskripsi: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      tanggal: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      CTA: PropTypes.string.isRequired,
    })
  ),
  type: PropTypes.string,
  autoplay: PropTypes.bool,
};

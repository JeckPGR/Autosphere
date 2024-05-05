import PropTypes from "prop-types";
import SimpleSlider from "../Moleculs/SimpleSlider";
import Fortuner from "../../assets/Fortuner.jpg";
import VWSell from "../../assets/VWSell.webp";
import Daihatsu from "../../assets/Daihatsu.png";
import HRV from "../../assets/HRV.webp";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const IdxSellCardData = [
  {
    img: Fortuner,
    title: "Suzuki Ertiga",
    harga: "Rp 138 - 185,8 Juta",
    cicilharga: "6,27",
    cicilX: 25,
  },
  {
    img: VWSell,
    title: "Volkswagen",
    harga: "Rp 230 - 280,4 Juta",
    cicilharga: "6,27",
    cicilX: 25,
  },
  {
    img: Daihatsu,
    title: "Daihatsu Xenia",
    harga: "Rp 400 - 440 Juta",
    cicilharga: "15,27",
    cicilX: 25,
  },
  {
    img: HRV,
    title: "HRV Hybrid",
    harga: "Rp 500 - 585 Juta",
    cicilharga: "6,27",
    cicilX: 40,
  },
  {
    img: VWSell,
    title: "Volkswagen",
    harga: "Rp 138 - 185,8 Juta",
    cicilharga: "6,27",
    cicilX: 25,
  },
];
export const IndexCardLayout = ({ type }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  if (type === "Second") {
    return (
      <>
        <div
          data-aos="zoom-in-up"
          data-aos-duration="700"
          className="flex flex-col gap-4 my-10  px-6 py-10 "
        >
          <h1 className="text-3xl md:text-2xl font-semibold text-center md:text-left">
            Barang Second
          </h1>
          <div className="w-[90vw]">
            <SimpleSlider IdxSellCardData={IdxSellCardData} />
          </div>
        </div>
      </>
    );
  } else if (type === "TitipJual") {
    return (
      <>
        <div
          data-aos="zoom-in-up"
          data-aos-duration="700"
          className="flex flex-col gap-4 my-10 "
        >
          <h1 className="text-3xl md:text-2xl font-semibold text-center md:text-left">
            Keluaran Terbaru
          </h1>
          <div className="w-[90vw] ">
            <SimpleSlider IdxSellCardData={IdxSellCardData} />
          </div>
        </div>
      </>
    );
  }
};

IndexCardLayout.propTypes = {
  type: PropTypes.string,
};

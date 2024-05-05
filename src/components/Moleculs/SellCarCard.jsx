import PropTypes from "prop-types";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export const SellCarCard = ({
  type,
  img,
  vehiclename,
  handle,
  cicilan,
  km,
  tahun,
  price,
  filtertype,
}) => {
  useEffect(() => {
    AOS.init();
  }, []);
  if (type === "Mobil") {
    return (
      <>
        <article
          data-aos="zoom-in-up"
          data-aos-easing="linear"
          data-aos-duration="500"
          className="flex flex-col cursor-pointer group gap-y-2 overflow-hidden w-full h-[425px] rounded-md shadow-md"
        >
          <div className="bg-slate-300 group h-[500px] overflow-hidden w-full  shadow-sm">
            <img
              src={img}
              alt={vehiclename}
              className="h-60 group-hover:scale-110 duration-200    w-full   object-center"
            />
          </div>
          <div className="p-3  flex flex-col justify-between h-full   ">
            <div className="text-sm">
              <div className="flex justify-between items-center">
                <p className="font-semibold text-base">{tahun}</p>
                <p className="px-5 py-1 rounded-full font-medium  bg-blue-500 text-white">
                  {filtertype}
                </p>
              </div>
              <h3 className="font-medium mb-0.5 text-xl ">{vehiclename}</h3>
              <p className="flex items-center gap-x-1">
                <span>{km}</span>
                <span>{handle}</span>
              </p>
            </div>
            <div className=" text-lg">
              <p className="font-semibold text-red-700">{price}</p>
              <p className="text-xs">{cicilan}</p>
            </div>
            <button className="text-sm font-semibold w-fit text-red-600 hover:underline">
              Jelajahi
            </button>
          </div>
        </article>
      </>
    );
  } else if (type === "Motor") {
    return (
      <>
        <article
          data-aos="zoom-in-up"
          data-aos-easing="linear"
          data-aos-duration="500"
          className="flex flex-col cursor-pointer gap-y-2 group overflow-hidden w-full h-[425px] rounded-md shadow-md"
        >
          <div className="bg-slate-300  h-[500px] overflow-hidden w-full  shadow-sm">
            <img
              src={img}
              alt={vehiclename}
              className="h-60 group-hover:scale-110 duration-200    w-full   object-center"
            />
          </div>
          <div className="p-3  flex flex-col justify-between h-full   ">
            <div className="text-sm">
              <div className="flex justify-between items-center">
                <p className="font-semibold text-base">{tahun}</p>
                <p className="px-5 py-1 rounded-full font-medium  bg-blue-500 text-white">
                  {filtertype}
                </p>
              </div>
              <h3 className="font-medium mb-0.5 text-xl ">{vehiclename}</h3>
              <p className="flex items-center gap-x-1">
                <span>{km}</span>
                <span>{handle}</span>
              </p>
            </div>
            <div className=" text-lg">
              <p className="font-semibold text-red-700">{price}</p>
              <p className="text-xs">{cicilan}</p>
            </div>
            <button className="text-sm font-semibold w-fit text-red-600 hover:underline">
              Jelajahi
            </button>
          </div>
        </article>
      </>
    );
  }
};

SellCarCard.propTypes = {
  type: PropTypes.oneOf(["Mobil", "Motor"]).isRequired,
  img: PropTypes.string.isRequired,
  vehiclename: PropTypes.string.isRequired,
  tahun: PropTypes.number.isRequired,
  km: PropTypes.string.isRequired,
  handle: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  cicilan: PropTypes.string.isRequired,
  filtertype: PropTypes.oneOf([
    "Bekas",
    "Baru",
    "Tahun",
    "Keluarga",
    "Hemat",
    "Sport",
    "SUV",
    "Sedan",
    "Listrik",
    "Cub",
    "Matic",
  ]).isRequired,
};

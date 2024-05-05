import Mobil from "../../assets/Icon/Mobil.png";
import Motor from "../../assets/Icon/Motor.png";
import Konsul from "../../assets/Icon/Consul.png";
import Servis from "../../assets/Icon/Services.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
export const ServiceOffers = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="w-full flex flex-col gap-4 lg:flex-row justify-center lg:items-center   px-14 py-20 mt-12">
        <div
          data-aos="zoom-in-up"
          data-aos-duration="700"
          className="lg:w-[40%] flex justify-center items-center lg:items-start lg:justify-normal"
        >
          <div className="flex flex-col gap-y-1">
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-black to-indigo-900 text-center lg:text-left md:text-5xl my-2  ">
              Layanan kami
            </h2>
            <p className="text-gray-600 text-base text-center lg:text-left lg:text-lg  font-medium">
              Temukan beragam layanan unggulan kami.
            </p>
          </div>
        </div>
        <div
          data-aos="zoom-in-down"
          data-aos-duration="700"
          className=" lg:w-[60%] grid grid-cols-2 grid-rows-2 md:grid-cols-6 w-full gap-3"
        >
          <div className="border-2 rounded-md border-slate-200 flex flex-col gap-2 font-medium bg-white hover:shadow-lg transition-shadow duration-150 justify-center items-center p-2  md:col-span-2 row-span-2  ">
            <img
              src={Mobil}
              alt="Mobil Services"
              loading="lazy"
              className="w-20 group-hover:text-white"
            />
            <p className="lg:text-xl">Mobil</p>
          </div>
          <div className="border-2 rounded-md border-slate-200 flex flex-col gap-2 font-medium bg-white hover:shadow-lg transition-shadow duration-150 justify-center items-center p-3   md:col-span-2 row-span-2 lg:row-span-1">
            <img
              src={Motor}
              alt="Motor Services"
              loading="lazy"
              className="w-20 group-hover:text-white"
            />
            <p className="lg:text-xl">Motor</p>
          </div>
          <div className="border-2 rounded-md border-slate-200 flex flex-col gap-2 font-medium bg-white hover:shadow-lg transition-shadow duration-150 justify-center items-center p-3  md:col-span-2 lg:row-span-2 ">
            <img
              src={Konsul}
              alt="Consult Services"
              loading="lazy"
              className="w-16 group-hover:text-white"
            />
            <p className="lg:text-xl">Konsultasi</p>
          </div>
          <div className="border-2 rounded-md border-slate-200 flex flex-col gap-2 font-medium bg-white hover:shadow-lg transition-shadow duration-150 justify-center items-center p-3  md:col-span-2 ">
            <img
              src={Servis}
              alt="Servis Kendaraan"
              loading="lazy"
              className="w-16 group-hover:text-white"
            />
            <p className="lg:text-xl">Servis</p>
          </div>
        </div>
      </div>
    </>
  );
};

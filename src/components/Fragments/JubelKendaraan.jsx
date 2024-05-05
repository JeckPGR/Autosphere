import { IoIosSearch } from "react-icons/io";
import { SellCarCard } from "../Moleculs/SellCarCard";
import Fortuner from "../../assets/Fortuner.jpg";
import VWSell from "../../assets/VWSell.webp";
import Daihatsu from "../../assets/Daihatsu.png";
import HRV from "../../assets/HRV.webp";
import mio from "../../assets/mio.webp";
import KSR from "../../assets/KSR.webp";
import cub from "../../assets/cub.webp";
import scoopy from "../../assets/scoopy.webp";
import CBR150 from "../../assets/CBR150.webp";
import Kawasaki from "../../assets/Kawasaki.webp";
import XSR from "../../assets/XSR-155.webp";
import GSX from "../../assets/GSX.webp";
import CRF from "../../assets/CRF.webp";
import BMWG from "../../assets/BMWG.webp";
import formatRupiah from "../../data/FormatRupiah";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { CTABtn } from "./CallToAction";
const SellcarData = [
  {
    type: "Mobil",
    img: Fortuner,
    carname: "Suzuki Ertiga",
    km: "20,000 km",
    where: "Jakarta",
    price: formatRupiah(560000000, "Rp "),
    cicilan: "Rp 6,27 Juta x 25 Bulan",
    filtertype: "Bekas",
    handle: "Manual",
    tahun: 2019,
  },
  {
    type: "Mobil",
    img: VWSell,
    carname: "Volkswagen",
    km: "15,000 km",
    where: "Surabaya",
    price: formatRupiah(284000000, "Rp "),
    cicilan: "Rp 6,27 Juta x 25 Bulan",
    filtertype: "Baru",
    handle: "Manual",
    tahun: 2020,
  },
  {
    type: "Mobil",
    img: Daihatsu,
    carname: "Daihatsu Xenia",
    km: "10,000 km",
    where: "Bandung",
    price: formatRupiah(280000000, "Rp "),
    cicilan: "Rp 15,27 Juta x 25 Bulan",
    filtertype: "Bekas",
    handle: "Automatic",
    tahun: 2018,
  },
  {
    type: "Mobil",
    img: HRV,
    carname: "HRV Hybrid",
    km: "5,000 km",
    where: "Yogyakarta",
    price: formatRupiah(560000000, "Rp "),
    cicilan: "Rp 6,27 Juta x 40 Bulan",
    filtertype: "Baru",
    handle: "Manual",
    tahun: 2021,
  },
  {
    type: "Mobil",
    img: VWSell,
    carname: "Volkswagen",
    km: "12,000 km",
    where: "Bandung",
    price: formatRupiah(300000000, "Rp "),
    cicilan: "Rp 6,27 Juta x 25 Bulan",
    filtertype: "Sedan",
    handle: "Automatic",
    tahun: 2017,
  },
  {
    type: "Mobil",
    img: Daihatsu,
    carname: "Daihatsu Hudson",
    km: "15,000 km",
    where: "Surabaya",
    price: formatRupiah(284000000, "Rp "),
    cicilan: "Rp 6,27 Juta x 25 Bulan",
    filtertype: "Keluarga",
    handle: "Manual",
    tahun: 2020,
  },

  {
    type: "Motor",
    img: Daihatsu,
    carname: "Bison Racer",
    km: "5.000 km",
    where: "Jakarta",
    price: formatRupiah(250000, "Rp "),
    cicilan: "Rp 2.5 Juta x 10 Bulan",
    filtertype: "Baru",
    handle: "Custom",
    tahun: 2020,
  },
  {
    type: "Mobil",
    img: HRV,
    carname: "HRV Electric",
    km: "5,000 km",
    where: "Yogyakarta",
    price: formatRupiah(560000000, "Rp "),
    cicilan: "Rp 6,27 Juta x 40 Bulan",
    filtertype: "Listrik",
    handle: "Manual",
    tahun: 2021,
  },
];

const SellMotorData = [
  {
    type: "Motor",
    img: scoopy,
    motorname: "Honda Scoopy",
    km: "8,000 km",
    where: "Jakarta",
    price: formatRupiah(15000000, "Rp "),
    cicilan: "Rp 500,000 x 30 Bulan",
    filtertype: "Matic",
    handle: "Automatic",
    tahun: 2019,
  },
  {
    type: "Motor",
    img: mio,
    motorname: "Yamaha Mio",
    km: "5,000 km",
    where: "Bandung",
    price: formatRupiah(13000000, "Rp "),
    cicilan: "Rp 450,000 x 30 Bulan",
    filtertype: "Matic",
    handle: "Automatic",
    tahun: 2020,
  },
  {
    type: "Motor",
    img: KSR,
    motorname: "Kawasaki KSR Pro",
    km: "3,000 km",
    where: "Yogyakarta",
    price: formatRupiah(30000000, "Rp "),
    cicilan: "Rp 800,000 x 40 Bulan",
    filtertype: "Cub",
    handle: "Manual",
    tahun: 2021,
  },
  {
    type: "Motor",
    img: cub,
    motorname: "Honda Super Cub",
    km: "6,000 km",
    where: "Surabaya",
    price: formatRupiah(35000000, "Rp "),
    cicilan: "Rp 900,000 x 40 Bulan",
    filtertype: "Cub",
    handle: "Manual",
    tahun: 2018,
  },
  {
    type: "Motor",
    img: XSR,
    motorname: "Yamaha XSR 155",
    km: "0 km",
    where: "Jakarta",
    price: formatRupiah(25000000, "Rp "),
    cicilan: "Rp 600,000 x 30 Bulan",
    filtertype: "Baru",
    handle: "Automatic",
    tahun: 2024,
  },
  {
    type: "Motor",
    img: CBR150,
    motorname: "Honda CBR150R",
    km: "0 km",
    where: "Surabaya",
    price: formatRupiah(28000000, "Rp "),
    cicilan: "Rp 650,000 x 30 Bulan",
    filtertype: "Baru",
    handle: "Automatic",
    tahun: 2024,
  },
  {
    type: "Motor",
    img: Kawasaki,
    motorname: "Kawasaki Ninja 250",
    km: "15,000 km",
    where: "Bandung",
    price: formatRupiah(18000000, "Rp "),
    cicilan: "Rp 550,000 x 30 Bulan",
    filtertype: "Bekas",
    handle: "Manual",
    tahun: 2020,
  },
  {
    type: "Motor",
    img: GSX,
    motorname: "Suzuki GSX-R150",
    km: "5,000 km",
    where: "Yogyakarta",
    price: formatRupiah(35000000, "Rp "),
    cicilan: "Rp 950,000 x 40 Bulan",
    filtertype: "Custom",
    handle: "Manual",
    tahun: 2021,
  },

  {
    type: "Motor",
    img: CRF,
    motorname: "Honda CRF150L",
    km: "10,000 km",
    where: "Bandung",
    price: formatRupiah(30000000, "Rp "),
    cicilan: "Rp 800,000 x 36 Bulan",
    filtertype: "Trail",
    handle: "Manual",
    tahun: 2022,
  },
  {
    type: "Motor",
    img: BMWG,
    motorname: "BMW G310GS",
    km: "20,000 km",
    where: "Surabaya",
    price: formatRupiah(45000000, "Rp "),
    cicilan: "Rp 1,500,000 x 48 Bulan",
    filtertype: "Touring",
    handle: "Manual",
    tahun: 2019,
  },
];

const MobilFilter = [
  "Semua",
  "Bekas",
  "Baru",
  "Irit",
  "Keluarga",
  "Hemat",
  "Sport",
  "SUV",
  "Sedan",
  "Listrik",
];

const MotorFilter = [
  "Semua",
  "Bekas",
  "Baru",
  "Custom",
  "Sport",
  "Matic",
  "Cub",
  "Trail",
  "Touring",
];
const Mobil = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const [activeFilter, setActiveFilter] = useState("Semua");
  const filteredCars = SellcarData.filter(
    (car) => activeFilter === "Semua" || car.filtertype === activeFilter
  );

  return (
    <section className="container mx-auto w-10/12 relative py-10">
      <div
        data-aos="zoom-in"
        data-aos-duration="800"
        className="bg-gray-300/70 w-full flex flex-col rounded-md justify-center items-center p-5 "
      >
        <h1 className="text-3xl text-center font-semibold">
          Autosphere Market Place
        </h1>
        <p className="text-sm md:text-base text-center font-medium">
          Carilah Mobil dengan referensimu <span className="text-3xl">🚗</span>
        </p>
      </div>
      <div
        data-aos="fade-left"
        data-aos-duration="800"
        className="flex items-center border overflow-hidden border-slate-300 rounded-md focus-within:border-blue-500 my-3 "
      >
        <button className="px-2 py-3 bg-gray-100 text-gray-600 hover:text-gray-800">
          <IoIosSearch size={24} />
        </button>
        <input
          type="search"
          placeholder="Cari mobil menurut Merek, Baru/Bekas"
          className="flex-1 px-4 py-3 w-full bg-gray-100 placeholder:text-sm md:placeholder:text-base focus:outline-none"
        />
      </div>
      <div
        data-aos="fade-right"
        data-aos-duration="800"
        className="flex gap-x-2 items-center group overflow-x-auto h-fit"
      >
        {MobilFilter.map((data, index) => (
          <button
            key={index}
            onClick={() => setActiveFilter(data)}
            className={`px-7 py-3 h-10 md:py-5 xl:w-full  hover:border-blue-500 hover:text-blue-500 flex justify-center items-center border w-fit text-xs md:text-sm  border-slate-300 rounded-md ${
              data === activeFilter
                ? "border-blue-600 font-semibold text-blue-800 "
                : "font-medium"
            }`}
          >
            {data}
          </button>
        ))}
      </div>
      <div className="my-6 grid  md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredCars.length > 0 ? (
          filteredCars.map((car, index) => (
            <SellCarCard
              key={index}
              img={car.img}
              type={car.type}
              vehiclename={car.carname}
              handle={car.handle}
              km={car.km}
              where={car.where}
              tahun={car.tahun}
              price={car.price}
              cicilan={car.cicilan}
              filtertype={car.filtertype}
            />
          ))
        ) : (
          <div className="h-[50vh] flex justify-center col-span-full items-center w-full text-center px-4">
            <p className="text-xl md:text-2xl font-semibold text-slate-500">
              Mobil tipe {activeFilter} Tidak di temukan
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

const Motor = () => {
  const [activeFilter, setActiveFilter] = useState("Semua");
  const filteredMotor = SellMotorData.filter(
    (motor) => activeFilter === "Semua" || motor.filtertype === activeFilter
  );
  return (
    <section className="container mx-auto w-10/12   py-10">
      <div className="bg-gray-300/70 w-full flex flex-col rounded-md justify-center items-center  p-5 ">
        <h1 className="text-3xl text-center font-semibold">
          Autosphere Market Place
        </h1>
        <p className="text-sm md:text-base text-center font-medium">
          Carilah Motor dengan referensimu <span className="text-3xl">🛵</span>
        </p>
      </div>
      <div className="flex items-center border overflow-hidden border-slate-300 rounded-md focus-within:border-blue-500 my-3 ">
        <button className=" px-2 py-3  bg-gray-100  text-gray-600 hover:text-gray-800 ">
          <IoIosSearch size={24} />
        </button>
        <input
          type="search"
          placeholder="Cari Motor menurut Merek, Baru/Bekas"
          className="flex-1 px-4 py-3 w-full bg-gray-100  placeholder:text-sm md:placeholder:text-base focus:outline-none"
        />
      </div>
      <div className="flex gap-x-2 items-center group  overflow-x-auto h-fit">
        {MotorFilter.map((data, index) => (
          <button
            key={index}
            onClick={() => setActiveFilter(data)}
            className={`px-7 py-3 h-10 md:py-5 xl:w-full hover:border-blue-500 hover:text-blue-500 flex justify-center items-center border w-fit text-xs md:text-sm font-medium border-slate-300 rounded-md ${
              data === activeFilter
                ? "border-blue-800 text-blue-800  font-bold"
                : ""
            }`}
          >
            {" "}
            {data}
          </button>
        ))}
      </div>
      <div className="my-6 grid  md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredMotor.length > 0 ? (
          filteredMotor.map((car, index) => (
            <SellCarCard
              key={index}
              img={car.img}
              type={car.type}
              vehiclename={car.motorname}
              handle={car.handle}
              km={car.km}
              where={car.where}
              tahun={car.tahun}
              price={car.price}
              cicilan={car.cicilan}
              filtertype={car.filtertype}
            />
          ))
        ) : (
          <div className="h-[50vh] flex justify-center col-span-full items-center w-full text-center px-4">
            <p className="text-xl md:text-2xl font-semibold text-slate-500">
              Motor tipe {activeFilter} Tidak di temukan
            </p>
          </div>
        )}
      </div>
      <div className="w-full">
        <CTABtn
          title="Sedang mencari Mobil  ?"
          subtitle="Temukan berbagai pilihan MoBIL di Marketplace kami."
          link="/JualBeli/JualBeliMobil"
          custom=" w-full md:w-full lg:w-full"
        >
          Cari Mobil
        </CTABtn>
      </div>
    </section>
  );
};

export { Mobil, Motor };

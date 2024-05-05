import { FreqAsk } from "../components/Fragments/FrequentlAsked";
import Car from "../assets/Car.webp";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { IndexCardLayout } from "../components/Layout/IndexCardLayout";
import { CTABtn } from "../components/Fragments/CallToAction";
import { ServiceOffers } from "../components/Fragments/ServiceOffer";
import { AnimImage } from "../components/Moleculs/MarqueImage";
import { NewsIndex } from "../components/Fragments/NewsIndex";

import { ExpertIndex } from "../components/Fragments/ExpertIndex";

export const IndexPage = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <section className="bg-slate-100 flex flex-col items-center  ">
        <div className=" flex flex-col gap-y-7 lg:flex-row w-full justify-between items-center lg:px-10  px-6 py-10   ">
          <div
            className="lg:w-[60%]"
            data-aos="fade-right"
            data-aos-duration="800"
          >
            <h2 className="md:text-5xl text-3xl text-center lg:text-left font-black lg:w-[95%] leading-tight">
              AutoSphere. Menyederhanakan Pengalaman Otomotif Anda!
            </h2>
            <p className="lg:w-3/4 mt-8 text-justify md:text-center lg:text-left md:text-lg text-sm">
              Jawaban terbaik dalam dunia otomotif modern. Kami menyederhanakan
              proses pencarian suku cadang dan layanan perbaikan untuk Anda.
            </p>
          </div>
          <img
            src={Car}
            alt="car"
            className="lg:w-[40%]"
            data-aos="fade-left"
            data-aos-duration="800"
          />
        </div>
        <ServiceOffers />
        <AnimImage />
        <IndexCardLayout type="TitipJual" />
        <ExpertIndex />
        <NewsIndex />
        <FreqAsk />
        <CTABtn
          title=" Mulai tertarik dengan Dunia Otomotif ?"
          subtitle=" Konsultasikan dengan ahlinya!"
          link="/Layanan/KonsultasiOnline"
        >
          Hubungi Kami
        </CTABtn>
      </section>
    </>
  );
};

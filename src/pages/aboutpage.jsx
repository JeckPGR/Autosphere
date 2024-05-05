import { CTABtn } from "../components/Fragments/CallToAction";
import Car from "../assets/Car.webp";
import Journey from "../assets/Jorney.svg";

import { Analysis } from "../components/Fragments/Analysis";

export const AboutPage = () => {
  return (
    <section className="bg-slate-100">
      <main className="container flex flex-col justify-center items-center py-10  px-6  mx-auto overflow-hidden ">
        <div className=" flex flex-col gap-y-7 lg:flex-row w-full justify-between items-center lg:px-10 ">
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
        {/* Companies Analysis */}
        <Analysis />
        <section
          data-aos="flip-up"
          data-aos-duration="800"
          className="w-full flex flex-col gap-10 justify-around  lg:flex-row items-center py-10   text-white overflow-hidden "
        >
          <img src={Journey} alt="" className="lg:w-1/3 " />
          <div className="bg-blue-600 lg:p-16 md:p-12 p-8 text-white w-3/4 lg:w-1/2 rounded-md rotate-1  transition-transform duration-200">
            <h2 className="text-3xl font-bold">Berdirinya Kami</h2>
            <p className=" mt-6">
              Pada tahun 2019, Autosphere resmi diluncurkan sebagai hasil dari
              kolaborasi yang mendalam antara para pemimpin industri dalam upaya
              untuk mengubah paradigma transportasi. Dengan fokus pada inovasi
              dan keberlanjutan, Autosphere bertujuan untuk membangun masa depan
              mobilitas yang lebih cerdas dan terkoneksi secara global.
            </p>
          </div>
        </section>
        <CTABtn
          title=" Bergabung Dalam Revolusi Otomotif !"
          subtitle=" Ingin tahu lebih lanjut tentang bagaimana kami bisa membantu? Kami siap menjawab pertanyaan Anda."
          link="/Layanan/KonsultasiOnline"
        >
          Hubungi Kami
        </CTABtn>
      </main>
    </section>
  );
};

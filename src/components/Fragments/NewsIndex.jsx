import LsitrikM from "../../assets/ListrikM.jpg";
import EduMobil from "../../assets/EduMobil.jpeg";
import SimpleSlider from "../Moleculs/SimpleSlider";
import { Link } from "react-router-dom";

const NewData1 = [
  {
    title: "Jarak Tempuh Mobil Listrik Berkurang",
    deskripsi:
      "Kompresor AC mobil listrik bekerja mengambil daya listrik dari baterai.",
    img: LsitrikM,
    tanggal: "April 28 2024",
    type: "News",
    CTA: "Selengkapnya",
  },
  {
    title: "Inovasi Terbaru dalam Pendidikan Mobil Listrik",
    deskripsi: "Temukan inovasi terkini dalam pendidikan mobil listrik.",
    img: EduMobil,
    tanggal: "Agustus 12 2023",
    type: "Education",
    CTA: "Pelajari Lebih Lanjut",
  },

  {
    title: "Jarak Tempuh Mobil Listrik Berkurang",
    deskripsi:
      "Kompresor AC mobil listrik bekerja mengambil daya listrik dari baterai.",
    img: LsitrikM,
    tanggal: "April 28 2024",
    type: "News",
    CTA: "Selengkapnya",
  },
  {
    title: "Inovasi Terbaru dalam Pendidikan Mobil Listrik",
    deskripsi: "Temukan inovasi terkini dalam pendidikan mobil listrik.",
    img: EduMobil,
    tanggal: "Agustus 12 2023",
    type: "Education",
    CTA: "Pelajari Lebih Lanjut",
  },
];
export const NewsIndex = () => {
  return (
    <>
      <div className="flex flex-col  px-4 justify-center items-center gap-x-4 md:mt-10">
        <div className="">
          <h2 className="text-4xl md:text-5xl font-bold text-center  mt-10">
            Berita & Informasi
          </h2>
          <p className="text-gray-600 text-sm text-center font-medium  lg:text-base my-3">
            Terus terupdate dengan berita terbaru dari dunia otomotif dan
            edukasi mobil listrik.
          </p>
        </div>
        <div className="w-[90vw] mt-12 mb-16">
          <SimpleSlider NewsCardData={NewData1} type="News" isSecond />
        </div>
        <div className="py-4 px-8 bg-blue-600  rounded-full text-2xl text-slate-100 font-medium hover:bg-blue-700 duration-200">
          <Link to="/InformasiBerita">View More News </Link>
        </div>
      </div>
    </>
  );
};

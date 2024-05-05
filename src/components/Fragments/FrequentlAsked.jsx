import Accord from "../Moleculs/Accordion";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const faqs = [
  {
    title: "Apakah AutoSphere menyediakan layanan pengiriman suku cadang?",
    description:
      "Ya, AutoSphere menyediakan layanan pengiriman suku cadang ke seluruh wilayah Indonesia. Kami bekerja sama dengan penyedia jasa pengiriman terpercaya untuk memastikan suku cadang Anda sampai tepat waktu dan dalam kondisi baik.",
  },
  {
    title: "Bagaimana cara memperoleh promo dan diskon di AutoSphere?",
    description:
      "Anda dapat memperoleh promo dan diskon di AutoSphere dengan bergabung menjadi member kami atau mengikuti promo-promo yang kami tawarkan melalui media sosial kami. Jangan lewatkan kesempatan untuk mendapatkan penawaran menarik!",
  },
  {
    title: "Apa yang membedakan AutoSphere dari toko otomotif lainnya?",
    description:
      "AutoSphere memiliki koleksi suku cadang yang lengkap, layanan perbaikan berkualitas, dan tim profesional yang siap membantu setiap kebutuhan otomotif Anda.",
  },
  {
    title: "Apakah AutoSphere menyediakan layanan konsultasi teknis?",
    description:
      "Ya, AutoSphere menyediakan layanan konsultasi teknis gratis bagi pelanggan kami. Tim kami siap membantu Anda memahami dan menyelesaikan masalah teknis kendaraan Anda.",
  },
  {
    title: "Bagaimana cara mendaftar sebagai mitra bisnis di AutoSphere?",
    description:
      "Untuk menjadi mitra bisnis AutoSphere, Anda dapat menghubungi tim kami melalui formulir kontak di situs web kami atau mengunjungi toko kami langsung untuk informasi lebih lanjut.",
  },
];
export const FreqAsk = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="px-5 py-10 w-full">
      <h2 className="text-3xl font-bold text-center my-12  ">
        Pertanyaan yang sering diajukan
      </h2>
      <div className="gap-y-3  w-full  items-center flex flex-col justify-center">
        {faqs.map((faq, index) => (
          <Accord key={index} title={faq.title}>
            {faq.description}
          </Accord>
        ))}
      </div>
    </div>
  );
};

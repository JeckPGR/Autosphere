import { ExpertCard } from "../Moleculs/ExpertCard";
import menpicture from "../../assets/Icon/men.webp";
const expertCommentData = [
  {
    comment:
      "Pengetahuan yang mendalam tentang pasar otomotif membuat kami terdepan.",
    expertName: "Dr. John Doe",
    expertTitle: "Ahli Otomotif",
    image: menpicture,
  },
  {
    comment:
      "Kami memberikan analisis terpercaya & terjamin untuk semua kebutuhan otomotif Anda.",
    expertName: "Samuel L Jackson",
    expertTitle: "Konsultan Otomotif",
    image: menpicture,
  },
  {
    comment:
      "Dapatkan pandangan yang mendalam dan analisis yang dapat anda andalkan.",
    expertName: "goofy gober",
    expertTitle: "Pakar Otomotif ",
    image: menpicture,
  },
];

export const ExpertIndex = () => {
  return (
    <>
      <div className="my-20 flex flex-col justify-center items-center ">
        <h1 className="text-4xl font-bold  text-center lg:text-left my-10 mb-3">
          Pendapat Para Pakar
        </h1>
        <p
          className="text-gray-600 text-sm w-3/4
       lg:text-lg mb-6 text-center"
        >
          Dapatkan wawasan mendalam dari para ahli otomotif tentang tren terbaru
          dan analisis yang dapat dipercaya.
        </p>
        <div className="flex flex-col md:flex-row md:flex-wrap justify-center items-center  w-full  gap-7">
          {expertCommentData.map((data, index) => (
            <ExpertCard
              key={index}
              expertName={data.expertName}
              expertTitle={data.expertTitle}
              img={data.image}
            >
              {data.comment}
            </ExpertCard>
          ))}
        </div>
      </div>
    </>
  );
};

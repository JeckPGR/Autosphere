export const NewsCard = ({ title, deskripsi, img, type, tanggal, CTA }) => {
  return (
    <div className="flex  justify-between   h-[450px] mx-2 ">
      <div className="flex-col overflow-hidden shadow-lg flex gap-y-4">
        <img
          className="w-full h-48 object-center object-cover"
          src={img}
          alt={title}
        />

        <div className="flex flex-col  justify-between  gap-y-1 px-4 ">
          <div className="flex items-center justify-between  ">
            <span
              className={`inline-block  rounded-full px-3 py-1 text-xs font-medium text-gray-700 mr-2 mb-2 ${
                type === "News" ? "bg-gray-00" : "bg-gray-900 text-slate-200"
              }`}
            >
              {type}
            </span>
            <span className="inline-block  rounded-full px-3 py-1 text-xs font-semibold text-gray-500 mr-2 mb-2">
              {tanggal}
            </span>
          </div>

          <h2 className="font-bold text-xl  flex flex-col gap-y-2 ">{title}</h2>
          <p className="text-gray-700 text-base">{deskripsi}</p>
          <button className="bg-blue-700 w-fit mt-2 hover:bg-blue-500 duration-200 text-white font-bold py-2 px-4 rounded">
            {CTA}
          </button>
        </div>
      </div>
    </div>
  );
};

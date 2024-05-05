import PropTypes from "prop-types";

export const NewsCard = ({ title, deskripsi, img, type, tanggal, CTA }) => {
  const getTypeClass = () => {
    if (type === "News") {
      return "bg-gray-00 text-gray-700"; // Ganti dengan kelas CSS yang sesuai untuk jenis berita
    } else if (type === "Article") {
      return "bg-gray-900 text-slate-200"; // Ganti dengan kelas CSS yang sesuai untuk jenis artikel
    } else {
      return "bg-gray-900 text-slate-200"; // Atur kelas CSS default jika nilai prop type tidak valid
    }
  };
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
              className={`inline-block  rounded-full px-3 py-1 text-xs font-medium text-gray-700 mr-2 mb-2 ${getTypeClass}
                `}
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

NewsCard.propTypes = {
  title: PropTypes.string.isRequired,
  deskripsi: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["News", "Article", "Education"]).isRequired, // Added "Education" as a valid type
  tanggal: PropTypes.string.isRequired,
  CTA: PropTypes.string.isRequired,
};

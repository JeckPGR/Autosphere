import PropTypes from "prop-types";

export const IdxSellCard = ({ title, harga, img, cicilharga, cicilX }) => {
  return (
    <>
      <div className="flex flex-col w-full md:w-80  group h-full gap-y-2 hover:shadow-lg transition duration-300 ease-in-out   overflow-hidden border border-slate-300 rounded-md">
        <div className="overflow-hidden">
          <img
            src={img}
            alt="Car Sale"
            loading="lazy"
            className="group-hover:scale-105 h-[211px] w-fit object-center  transition duration-300 ease-in-out"
          />
        </div>
        <div className="p-4">
          <div className="flex items-center gap-x-2 ">
            <h2 className="text-xl">{title}</h2>{" "}
            <span
              className="text-black text-with-background "
              data-tooltip="Created by @dzakyrazi"
            >
              &#9432;
            </span>
          </div>
          <p className="font-semibold">{harga}</p>
          <p className="text-xs font-medium text-red-600 mt-1">
            Cicil : Rp {cicilharga} Juta x {cicilX}
          </p>
        </div>
      </div>
    </>
  );
};

IdxSellCard.propTypes = {
  title: PropTypes.string.isRequired,
  harga: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  cicilharga: PropTypes.string.isRequired,
  cicilX: PropTypes.number.isRequired,
};

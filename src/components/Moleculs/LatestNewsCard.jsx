import PropTypes from "prop-types";
export const LatestNewsCard = ({
  children,
  writer,
  waktuPost,
  timetoread,
  type,
  img,
}) => {
  return (
    <div className="ring-1 cursor-pointer ring-slate-300 min-w-[300px] hover:bg-slate-300 duration-300 ease-in-out max-w-xs rounded-md flex flex-col hover:inset-1">
      <img
        src={img}
        alt={type}
        loading="lazy"
        className="h-48 w-full object-cover"
      />
      <div className="p-3 flex flex-col justify-between  flex-grow">
        <div className="flex items-center gap-2 text-gray-500 text-sm font-semibold ">
          <span className="text-red-600">{type}</span>
          <span>
            {timetoread} <span className="text-red-600">*</span>
          </span>
        </div>
        <h3 className="font-bold mb-2 ">{children}</h3>{" "}
        <div className="mt-auto">
          {" "}
          {/* Pushes this div to the bottom of the container */}
          <div className="flex text-gray-500 text-xs font-medium items-center justify-between">
            <span>{writer}</span>

            <span>{waktuPost}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

LatestNewsCard.propTypes = {
  children: PropTypes.node.isRequired,
  writer: PropTypes.string.isRequired,
  waktuPost: PropTypes.string.isRequired,
  timetoread: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

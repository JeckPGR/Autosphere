import PropTypes from "prop-types";
export const ExpertCard = ({ children, expertName, expertTitle, img }) => {
  return (
    <>
      <div className="bg-white shadow-md rounded-sm flex flex-col items-center justify-between p-3  w-80 h-72 ">
        <div>
          <img
            src={img}
            alt={expertName}
            loading="lazy"
            className="bg-slate-200 rounded-full size-14"
          />
        </div>
        <div className="flex flex-col gap-y-7 p-5 h-52 ">
          <p className="text-lg font-medium text-center md:text-left ">
            &quot;{children}&quot;
          </p>
          <div className="flex justify-between w-full text-sm text-slate-950">
            <span>{expertName}</span>
            <span>{expertTitle}</span>
          </div>
        </div>
      </div>
    </>
  );
};

ExpertCard.propTypes = {
  children: PropTypes.string.isRequired,
  expertName: PropTypes.string.isRequired,
  expertTitle: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

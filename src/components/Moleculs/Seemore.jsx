import { FaArrowRight } from "react-icons/fa6";
import Swal from "sweetalert2";
export const Seemore = () => {
  const handleclick = () => {
    Swal.fire("Sorry This Functionality  is not available at the moment");
  };
  return (
    <button
      onClick={handleclick}
      className="  flex items-center  overflow-hidden group text-base active:text-indigo-900 text-indigo-600 gap-2 font-semibold"
    >
      <span className="bg-white z-20">See More all</span>
      <span>
        <FaArrowRight className=" hidden lg:block -translate-x-20 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-transform duration-700 ease-linear  " />
      </span>
    </button>
  );
};

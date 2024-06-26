import AOS from "aos";
import "aos/dist/aos.css";
import PropTypes from "prop-types";
import { useEffect } from "react";
import { Link } from "react-router-dom";
export const CTABtn = ({ title, subtitle, children, link = "#", custom }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div
        data-aos="flip-up"
        data-aos-duration="800"
        className={`p-5 flex flex-col md:w-3/4 lg:w-3/5 my-20  gap-y-2 items-center justify-center bg-white shadow-md shadow-slate-400/40 rounded-lg  ${custom}`}
      >
        <h1 className="text-2xl text-center font-semibold text-blue-500">
          {title}
        </h1>
        <p className=" text-sm text-center text-slate-500 font-semibold">
          {subtitle}
        </p>
        <Link
          to={link}
          className=" bg-blue-600 font-semibold  hover:bg-blue-500 px-4 py-2 rounded-sm duration-200 text-white mt-4 md:mt-2"
        >
          {" "}
          {children}
        </Link>
      </div>
    </>
  );
};

CTABtn.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string,
  custom: PropTypes.string,
  subtitle: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

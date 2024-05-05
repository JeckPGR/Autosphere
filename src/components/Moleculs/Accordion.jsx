import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import PropTypes from "prop-types";

export default function Accord({ title, children, custom }) {
  const [AccordionIsOpen, setAccordionIsOpen] = useState(false);
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      data-aos="zoom-in-down"
      className={` border border-slate-300 rounded-md   p-3 w-full lg:w-3/4 group hover:shadow-md transition-shadow duration-200  ${custom}`}
    >
      <button
        className={` px-3 py-4 text-lg rounded-sm text-secondary flex justify-between w-full items-center  transition-all duration-300   
        ${AccordionIsOpen && "text-blue-800 "}`}
        onClick={() => setAccordionIsOpen(!AccordionIsOpen)}
      >
        <span className="text-sm md:text-base text-left group-hover:text-blue-800">
          {title}
        </span>
        <span className="transform origin-center transition group-hover:text-blue-800 duration-200 ease-out">
          {AccordionIsOpen ? (
            <IoIosArrowUp size={28} />
          ) : (
            <IoIosArrowDown size={28} />
          )}
        </span>
      </button>
      <div
        className={`p-3 h-full   text-justify grid overflow-hidden transition-all duration-500 ease-in-out text-secondary text-base 
        ${
          AccordionIsOpen
            ? "  max-h-96 opacity-100 "
            : " hidden  max-h-0 opacity-0"
        }`}
      >
        <p className="overflow-hidden text-xs md:text-sm px-5  ">{children}</p>
      </div>
    </div>
  );
}

Accord.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  custom: PropTypes.string,
};

import { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import AOS from "aos";
import "aos/dist/aos.css";
export const Analysis = () => {
  return (
    <>
      {/* Companies Analysis */}
      <section data-aos="flip-down">
        <div className="grid mt-2 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-10">
          <div className="flex flex-col gap-y-1 justify-center  lg:items-start items-center bg-white border-2 border-slate-200/50 rounded-md lg:border-none lg:bg-transparent p-10">
            <Counter end="86" duration={3500} />
            <p className="text-sm font-semibold text-slate-500 text-center lg:text-left">
              AutoSphere telah berkembang dari tim yang hanya 2 orang, menjadi
              lebih dari 86 anggota yang berdedikasi.
            </p>
          </div>
          <div className="flex flex-col gap-y-3 justify-center  lg:items-start items-center bg-white border-2 border-slate-200/50 rounded-md lg:border-none lg:bg-transparent p-10">
            <Counter end="500" duration={3500} />
            <p className="text-sm font-semibold text-slate-500 text-center lg:text-left">
              Lebih dari 500 pengemudi telah memilih AutoSphere sebagai penyedia
              layanan otomotif terpercaya mereka.
            </p>
          </div>
          <div className="flex flex-col gap-y-3 justify-center md:col-span-2 lg:col-span-1 lg:items-start items-center bg-white border-2 border-slate-200/50 rounded-md lg:border-none lg:bg-transparent p-10">
            <Counter end="100" duration={3500} />
            <p className="text-sm font-semibold text-slate-500 text-center lg:text-left">
              Kami telah bekerja sama dengan 100 perusahaan terkemuka untuk
              memberikan yang terbaik dalam solusi otomotif.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

const Counter = ({ end, duration }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false); // Track if the animation has already occurred

  useEffect(() => {
    AOS.init();
  }, []);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          let start = 0;
          const endCount = parseInt(end, 10);
          const intervalDuration = duration / endCount;

          hasAnimated.current = true;

          if (start < endCount) {
            let timer = setInterval(() => {
              start += 1;
              setCount(start);
              if (start === endCount) clearInterval(timer);
            }, intervalDuration);
          }
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(ref.current);

    return () => observer.disconnect(); // Clean up the observer on component unmount
  }, [end, duration]);

  return (
    <h3 ref={ref} className="font-semibold text-4xl lg:text-5xl ">
      {count}+
    </h3>
  );
};

Counter.propTypes = {
  end: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  duration: PropTypes.number.isRequired,
};

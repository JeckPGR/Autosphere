import Ford from "../../assets/Ford.webp";
import Errie from "../../assets/Errie.webp";
import VW from "../../assets/VW.webp";
import BMW from "../../assets/bmw.webp";
import Audi from "../../assets/Audi_1.webp";
import { useRef } from "react";
const CarBrand = [
  {
    url: Ford,
    alt: "Ford Brand",
  },
  {
    url: VW,
    alt: "VW Brand",
  },
  {
    url: BMW,
    alt: "BMW Brand",
  },
  {
    url: Audi,
    alt: "Audi Brand",
  },
  {
    url: Errie,
    alt: "Errie Brand",
  },
];

export const AnimImage = () => {
  const containerRef = useRef(null);

  const handleMouseEnter = () => {
    containerRef.current.style.animationPlayState = "paused";
  };

  const handleMouseLeave = () => {
    containerRef.current.style.animationPlayState = "running";
  };
  return (
    <div
      className="overflow-hidden relative py-10"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={containerRef}
    >
      <div className="animate-marquee flex items-center gap-10 whitespace-nowrap">
        {CarBrand.concat(CarBrand).map((item, index) => (
          <img
            key={index}
            src={item.url}
            alt={item.alt}
            loading="lazy"
            className="h-14 md:h-24 w-40 lg:w-full object-contain transition-shadow duration-300"
          />
        ))}
      </div>
    </div>
  );
};

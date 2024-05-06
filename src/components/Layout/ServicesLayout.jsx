import { useParams } from "react-router-dom";
import {
  KonsultasiOnline,
  HitungBiayaPerbaikan,
} from "../Fragments/LayananChoose";

export const ServiceLayout = () => {
  const { subcategory } = useParams();

  const renderServiceContent = () => {
    switch (subcategory) {
      case "KonsultasiOnline":
        return <KonsultasiOnline />;
      case "HitungBiayaPerbaikan":
        return <HitungBiayaPerbaikan />;
      default:
        return <div>Service not found</div>;
    }
  };

  return renderServiceContent();
};

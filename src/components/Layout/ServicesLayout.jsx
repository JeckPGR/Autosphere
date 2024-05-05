import { useParams } from "react-router-dom";
import {
  KonsultasiOnline,
  DashboardKondisiKendaraan,
  HitungBiayaPerbaikan,
} from "../Fragments/LayananChoose";

export const ServiceLayout = () => {
  const { subcategory } = useParams();

  const renderServiceContent = () => {
    switch (subcategory) {
      case "KonsultasiOnline":
        return <KonsultasiOnline />;
      case "DashboardKondisiKendaraan":
        return <DashboardKondisiKendaraan />;
      case "HitungBiayaPerbaikan":
        return <HitungBiayaPerbaikan />;
      default:
        return <div>Service not found</div>;
    }
  };

  return renderServiceContent();
};

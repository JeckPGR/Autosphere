import { useParams } from "react-router";
import { Mobil, Motor } from "../Fragments/JubelKendaraan";

export const JubelLayout = () => {
  const { subcategory } = useParams();

  const renderJubelLayout = () => {
    switch (subcategory) {
      case "JualBeliMobil":
        return <Mobil />;
      case "JualBeliMotor":
        return <Motor />;

      default:
        return <div>Page Not Found</div>;
    }
  };

  return renderJubelLayout();
};

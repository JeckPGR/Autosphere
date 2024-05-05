import { useParams } from "react-router-dom";
import { ServiceLayout } from "../components/Layout/ServicesLayout"; // Assuming ServiceLayout is exported from a layouts directory

const ServicePage = () => {
  const { subcategory } = useParams(); // Extract the necessary parameters

  return <ServiceLayout subcategory={subcategory} />;
};

export default ServicePage;

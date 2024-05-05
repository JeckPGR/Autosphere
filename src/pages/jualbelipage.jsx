import { useParams } from "react-router-dom";
import { JubelLayout } from "../components/Layout/JubelLayout";

function JualBeliPage() {
  const { subcategory } = useParams();

  return <JubelLayout subcategory={subcategory} />;
}

export default JualBeliPage;

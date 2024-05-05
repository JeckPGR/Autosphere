import { AboutPage } from "./pages/aboutpage";
import { IndexPage } from "./pages/indexpages";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import JualBeliPage from "./pages/jualbelipage";
import ServicesPage from "./pages/servicespage";
import NewsPage from "./pages/newspage";
import Navbar from "./components/Atoms/Navbar";
import Footer from "./components/Atoms/Footer";
const router = createBrowserRouter([
  {
    path: "/",
    element: <IndexPage />,
  },
  {
    path: "/TentangKami",
    element: <AboutPage />,
  },
  {
    path: "/JualBeli/:subcategory",
    element: <JualBeliPage />,
  },
  {
    path: "/Layanan/:subcategory",
    element: <ServicesPage />,
  },
  {
    path: "/InformasiBerita",
    element: <NewsPage />,
  },
]);
function App() {
  return (
    <>
      <Navbar />
      <RouterProvider router={router} />
      <Footer />
    </>
  );
}

export default App;

import { useState } from "react";
import Burger from "./Burgers/Burger";
import Dropdown from "./Dropdown";

const languange = [
  {
    name: "Indonesia",
    code: "ID",
  },
  {
    name: "English",
    code: "EN",
  },
];

const Navlist = [
  {
    title: "Tentang Kami",
    link: "/TentangKami",
    isdropdown: false,
    id: "About",
  },
  {
    title: "Jual & Beli",
    link: "/JualBeli",
    isdropdown: true,
    id: "Jubel",
    dropdownItems: [
      { element: "/JualBeli/JualBeliMobil", label: "Jual & Beli Mobil" },
      { element: "/JualBeli/JualBeliMotor", label: "Jual &Beli Motor" },
    ],
  },
  {
    title: "Layanan",
    link: "/Layanan",
    isdropdown: true,
    id: "Services",
    dropdownItems: [
      { element: "/Layanan/KonsultasiOnline", label: "Konsultasi Online" },
      {
        element: "/Layanan/DashboardKondisiKendaraan",
        label: "Dashboard Kondisi kendaraan",
      },
      {
        element: "/Layanan/HitungBiayaPerbaikan",
        label: "Hitung Biaya Perbaikan",
      },
    ],
  },
  {
    title: "Informasi & Berita",
    link: "/InformasiBerita",
    isdropdown: false,
    id: "Berita & Informasi",
    dropdownItems: [
      { element: "/InformasiBerita/Artikel", label: "Artikel Terbaru" },
      { element: "/InformasiBerita/TipsPerawatan", label: "Tips Perawatan" },
      {
        element: "/InformasiBerita/PanduanPembelian",
        label: "Panduan Pembelian",
      },
    ],
  },
];

export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMenu = () => {
    setShowMenu((prevState) => !prevState);
  };

  const toggleDropdown = (id) => {
    setActiveDropdown((prevId) => (prevId === id ? null : id));
  };

  return (
    <>
      <nav className=" bg-slate-50 text-slate-800 p-4  shadow z-40 relative">
        <div className=" relative container mx-auto flex lg:justify-around justify-between items-center">
          <a href="/" className=" text-2xl md:text-4xl  font-semibold  ">
            AutoSphere
          </a>
          <div className="hidden lg:flex space-x-4">
            {Navlist.map((item, index) => (
              <div key={index}>
                {item.isdropdown ? (
                  <Dropdown
                    title={item.title}
                    items={item.dropdownItems}
                    isOpen={activeDropdown === item.id}
                    toggleDropdown={() => toggleDropdown(item.id)}
                  />
                ) : (
                  <>
                    <a
                      href={item.link} // Atur tautan langsung jika tidak ada dropdown
                      key={index}
                      onClick={() => toggleDropdown(null)}
                      className="p-3  relative  rounded-full flex active:text-white/40  lg:hover:bg-indigo-600 lg:hover:text-white  font-semibold  transition-all duration-300  ease-in-out"
                    >
                      {item.title}
                    </a>
                  </>
                )}
              </div>
            ))}
          </div>
          <select
            name=""
            id=""
            className="hidden lg:block order-2 form-select font-semibold rounded-lg  bg-transparent text-lg ring-1 ring-black   px-1 py-2"
          >
            {languange.map((item, index) => (
              <option
                key={index}
                value={item.code}
                className=" p-2   font-semibold"
              >
                {item.name}
              </option>
            ))}
          </select>
          <Burger toggleMenu={toggleMenu} />
        </div>
      </nav>

      {/* List Responsive */}
      <div
        className={`left-0 absolute bg-slate-100 w-full z-30 text-slate-950  transform transition-transform  duration-500 ease-in-out ${
          showMenu ? "translate-y-0 opacity-100" : "-translate-y-full  "
        } lg:hidden`}
      >
        <ul className="flex flex-col gap-y-3">
          {Navlist.map((item, index) => (
            <li
              key={index}
              className="border-b border-slate-200 last:border-b-0"
            >
              {item.isdropdown ? (
                <div onClick={() => toggleDropdown(item.id)}>
                  <Dropdown
                    title={item.title}
                    items={item.dropdownItems}
                    isOpen={activeDropdown === item.id}
                    toggleDropdown={() => toggleDropdown(item.id)}
                  />
                </div>
              ) : (
                <a href={item.link} className="block  font-semibold p-4 ">
                  {item.title}
                </a>
              )}
            </li>
          ))}
          <li>
            <div className="p-3">
              <select className="form-select w-full p-2 rounded border border-slate-300 text-black">
                {languange.map((item, index) => (
                  <option key={index} value={item.code} className="text-black ">
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;

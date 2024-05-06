import { useState } from "react";
import Burger from "./Burgers/Burger";
import Dropdown from "./Dropdown";

const language = [
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
    id: 1,
  },
  {
    title: "Jual & Beli",
    link: "/JualBeli",
    isdropdown: true,
    id: 2,
    dropdownItems: [
      { element: "/JualBeli/JualBeliMobil", label: "Jual & Beli Mobil" },
      { element: "/JualBeli/JualBeliMotor", label: "Jual & Beli Motor" },
    ],
  },
  {
    title: "Layanan",
    link: "/Layanan",
    isdropdown: true,
    id: 3,
    dropdownItems: [
      { element: "/Layanan/KonsultasiOnline", label: "Konsultasi Online" },

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
    id: 4,
  },
];

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMenu = () => {
    setShowMenu((prevState) => !prevState);
  };

  const toggleDropdown = (id) => {
    console.log("Toggling Dropdown for ID:", id);
    setActiveDropdown((prevId) => (prevId === id ? null : id));
  };

  return (
    <>
      <nav className=" bg-slate-50 text-slate-800 p-4   z-40 relative">
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
            {language.map((item, index) => (
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
      <div
        className={`left-0 absolute bg-slate-100 w-full z-30 text-slate-950  transform transition-transform  duration-500 ease-in-out ${
          showMenu ? "translate-y-0 opacity-100" : "-translate-y-full  "
        } lg:hidden`}
      >
        <ul className="flex flex-col gap-y-3 shadow shadow-slate-300/50">
          {Navlist.map((item) => (
            <>
              <li key={item.id}>
                {item.isdropdown ? (
                  <div
                    aria-label="dropdown-button"
                    onClick={() => toggleDropdown(item.id)}
                  >
                    <Dropdown
                      key={item.id}
                      title={item.title}
                      items={item.dropdownItems}
                      isOpen={activeDropdown === item.id}
                      toggleDropdown={() => toggleDropdown(item.id)}
                    />
                  </div>
                ) : (
                  <a
                    key={item.id}
                    href={item.link}
                    className="block font-semibold py-4 px-3"
                  >
                    {item.title}
                  </a>
                )}
              </li>
            </>
          ))}
        </ul>
      </div>
    </>
  );
};

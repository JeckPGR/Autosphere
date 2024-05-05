import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState, useRef } from "react";
import { Label } from "../Atoms/Label";
import { Input } from "../Atoms/Input";
import Accord from "../Moleculs/Accordion";
import Swal from "sweetalert2";
import { IoMdAdd, IoMdTrash } from "react-icons/io";
import { FaEye } from "react-icons/fa";

// import { CSSTransition, TransitionGroup } from "react-transition-group";
const PertanyaanUmum = [
  {
    title: " Bagaimana saya bisa menyimpan rekaman dari sesi konsultasi?",
    content:
      " Rekaman sesi akan tersedia dan dapat diunduh setelah sesi berakhir.",
  },
  {
    title: "  Apakah ada batas waktu untuk setiap sesi konsultasi?",
    content:
      "  Tergantung pada paket yang dipilih, namun biasanya sesi berlangsung antara 30 menit hingga satu jam.",
  },
];

// KonsultasiOnline.js
const KonsultasiOnline = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const handlesubmit = (e) => {
    e.preventDefault();
    // Ambil nilai dari input nama pelanggan
    const namaPelanggan = e.target.elements.namacustomer.value;

    // Tampilkan pesan dengan SweetAlert
    Swal.fire({
      title: `Halo, ${namaPelanggan}`,
      text: "Keluhan  akan segera kami tanggapi.",
      icon: "success",
    }).then((result) => {
      // Lakukan refresh jika pengguna menekan tombol OK pada SweetAlert
      if (result.isConfirmed) {
        window.location.reload();
      }
    });
  };

  return (
    <div className="container  flex flex-col  gap-x-6 gap-y-10 xl:flex-row mt-2  mx-auto px-4 py-6">
      <div className="flex flex-col gap-1 xl:w-1/2">
        <h1
          data-aos="flip-up"
          className="text-blue-600 font-bold text-3xl text-center mb-4"
        >
          Konsultasi Otomotif Online
        </h1>
        <p data-aos="flip-up" className="  mb-6">
          Dapatkan bantuan langsung dari ahli otomotif kami melalui sesi
          konsultasi online. Ideal untuk memecahkan masalah kendaraan Anda atau
          mendapatkan saran perbaikan dan pemeliharaan.
        </p>
        <div data-aos="fade-up" className=" text-base leading-relaxed mb-6">
          <h2 className="text-2xl text-blue-700 font-semibold mb-2">
            Mengapa Memilih Konsultasi Online Kami?
          </h2>
          <ul className="list-disc pl-5">
            <li>Kemudahan akses dari mana saja dan kapan saja.</li>
            <li>Respon cepat dari tim ahli yang berpengalaman.</li>
            <li>
              Biaya terjangkau dengan beberapa paket pilihan sesuai kebutuhan
              Anda.
            </li>
            <li>Privasi dan keamanan informasi Anda terjamin.</li>
          </ul>
        </div>

        <div data-aos="zoom-in" className="">
          <h2 className="text-2xl  text-blue-700 font-semibold mb-2">
            Pertanyaan Umum
          </h2>
          <div className=" space-y-4">
            {PertanyaanUmum.map((data, index) => (
              <Accord key={index} title={data.title} custom="lg:w-full">
                {data.content}
              </Accord>
            ))}
          </div>
        </div>
      </div>

      <div data-aos="fade-left" className="mb-6 xl:w-1/2">
        <h2 className="text-3xl text-center text-blue-600 font-bold mb-2">
          Daftar Konsultasi
        </h2>
        <form className="space-y-4" onSubmit={handlesubmit}>
          <div>
            <Label htmlFor="namacustomer">Nama</Label>
            <Input
              name="namacustomer"
              type="text"
              id="namacustomer"
              placeholder="Felicia Baren"
            />
          </div>
          <div>
            <Label htmlFor="Email">Email</Label>
            <Input
              name="Email"
              type="text"
              id="Email"
              placeholder="dzakyrazi@gmail.com"
            />
          </div>
          <div>
            <Label htmlFor="JenisKendaraan">Jenis Kendaraan</Label>
            <Input
              name="JenisKendaraan"
              type="text"
              id="JenisKendaraan"
              placeholder="HR-V Ash Grey"
            />
          </div>
          <div>
            <Label htmlFor="Masalah">Deskripsi Masalah</Label>
            <textarea
              name="Masalah"
              id="Masalah"
              rows="6"
              placeholder="Deskripsikan masalah yang anda alami"
              className="w-full px-4 py-2 border  border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded"
          >
            Kirim Permintaan
          </button>
        </form>
      </div>
    </div>
  );
};

// LayananPerbaikan.js
const DashboardKondisiKendaraan = () => {
  // Data dummy untuk kondisi kendaraan
  const vehicleConditionData = {
    mileage: 50000,
    engineHealth: "Good",
    brakeSystem: "Excellent",
    tirePressure: "Optimal",
    batteryStatus: "Charged",
    // Tambahkan lebih banyak data kondisi jika diperlukan
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold mb-4">
        Dashboard Kondisi Kendaraan Anda
      </h1>
      <div className="bg-white shadow-md rounded-md p-6">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h2 className="text-lg font-semibold mb-2">Mileage</h2>
            <p>{vehicleConditionData.mileage} km</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-2">Engine Health</h2>
            <p>{vehicleConditionData.engineHealth}</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-2">Brake System</h2>
            <p>{vehicleConditionData.brakeSystem}</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-2">Tire Pressure</h2>
            <p>{vehicleConditionData.tirePressure}</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-2">Battery Status</h2>
            <p>{vehicleConditionData.batteryStatus}</p>
          </div>
          {/* Tambahkan lebih banyak informasi kondisi kendaraan jika diperlukan */}
        </div>
      </div>
    </div>
  );
};

const HitungBiayaPerbaikan = () => {
  // State untuk menyimpan data input biaya perbaikan
  const [isActivetype, setIsActivetype] = useState("Mobil");
  const [submissions, setSubmissions] = useState([]);
  const [selectedSubmission, setSelectedSubmission] = useState(null);
  const newCardRef = useRef(null);
  const initialFormState = {
    namapelanggan: "",
    PlatNomor: "",
    Spesifikasi: "",
    services: [{ service: "" }],
    additionalInfo: "",
    Kelas: "",
  };

  const [formState, setFormState] = useState(initialFormState);
  const serviceOptions = {
    Mobil: ["Ganti Oli", "Servis Rem", "Servis AC", "Tune Up"],
    Motor: ["Ganti Oli", "Ganti Ban", "Servis Mesin", "Servis Rantai"],
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };
  const handleServiceChange = (e, index) => {
    const { name, value } = e.target;
    const updatedServices = formState.services.map((service, idx) =>
      idx === index ? { ...service, [name]: value } : service
    );
    setFormState((prevState) => ({ ...prevState, services: updatedServices }));
  };

  const addService = () => {
    setFormState({
      ...formState,
      services: [...formState.services, { service: "", Kelas: "" }],
    });
  };

  const removeService = (index) => {
    const updatedServices = formState.services.filter(
      (_, idx) => idx !== index
    );
    setFormState((prevState) => ({ ...prevState, services: updatedServices }));
  };
  const deleteSubmission = (index) => {
    const updatedSubmissions = submissions.filter((_, idx) => idx !== index);
    setSubmissions(updatedSubmissions);
  };
  const calculateTotalCost = () => {
    let kelasFee = formState.Kelas === "Executive" ? 80000 : 40000;
    return (
      formState.services.reduce((total, { service }) => {
        let serviceprice = 0;

        switch (service) {
          case "Ganti Oli":
            serviceprice = 120000;
            break;
          case "Servis Rem":
            serviceprice = 100000;
            break;
          case "Servis AC":
            serviceprice = 450000;
            break;
          case "Tune Up":
            serviceprice = 55000;
            break;
          case "Ganti Ban":
            serviceprice = 150000;
            break;
          case "Servis Mesin":
            serviceprice = 350000;
            break;
          case "Servis Rantai":
            serviceprice = 100000;
            break;
          default:
            serviceprice = 0;
        }

        return total + serviceprice;
      }, 0) + kelasFee
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if Kelas is properly selected
    if (formState.Kelas !== "Reguler" && formState.Kelas !== "Executive") {
      Swal.fire({
        title: "Kelas belum dipilih",
        text: "Mohon pilih kelas yang diberikan",
        icon: "info",
      });
      return;
    }

    // Check if all services are properly selected from serviceOptions
    const allServicesValid = formState.services.every((service) =>
      serviceOptions[isActivetype].includes(service.service)
    );

    if (!allServicesValid) {
      Swal.fire({
        title: "Service belum dipilih",
        text: "Mohon pilih service yang diberikan.",
        icon: "info",
      });
      return;
    }

    const calculatedCost = calculateTotalCost();
    const newSubmission = {
      ...formState,
      totalCost: calculatedCost,
      type: isActivetype,
    };

    setSubmissions([...submissions, newSubmission]);
  };

  useEffect(() => {
    if (newCardRef.current) {
      newCardRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [submissions]);

  const resetForm = () => {
    setFormState(initialFormState);
  };

  const switchType = (type) => {
    setIsActivetype(type);
    resetForm();
  };

  function getServicePrice(service) {
    switch (service) {
      case "Ganti Oli":
        return 120000;
      case "Servis Rem":
        return 100000;
      case "Servis AC":
        return 450000;
      case "Tune Up":
        return 55000;
      case "Ganti Ban":
        return 150000;
      case "Servis Mesin":
        return 350000;
      case "Servis Rantai":
        return 100000;
      default:
        return 0;
    }
  }

  function getClassFee(className) {
    return className === "Executive" ? 80000 : 40000;
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl text-center  font-semibold mb-4 px-4">
        Hitung Biaya Perbaikan
      </h1>
      <div className="w-full flex justify-around   gap-x-2">
        <div className="w-1/2 flex justify-center">
          <button
            onClick={() => switchType("Mobil")}
            className={` w-3/4 md:w-1/3 border-b-2 text-center py-1.5 lg:text-2xl text-xl   font-semibold ${
              isActivetype === "Mobil" ? "border-blue-600" : "border-slate-50"
            } `}
          >
            Mobil
          </button>
        </div>
        <div className="w-1/2 flex justify-center">
          <button
            onClick={() => switchType("Motor")}
            className={` w-3/4  md:w-1/3 border-b-2 rounded-sm text-center py-1.5 lg:text-2xl text-xl  font-semibold  ${
              isActivetype === "Motor" ? "border-blue-600" : "border-slate-100"
            } `}
          >
            Motor
          </button>
        </div>
      </div>
      {/* <TransitionGroup>
        <CSSTransition key={isActivetype}> */}
      {isActivetype === "Mobil" ? (
        <form
          onSubmit={handleSubmit}
          className={`bg-slate-50 mt-2 shadow rounded-md flex flex-col px-6 py-4 ${
            isActivetype === "Mobil" && "slide-up"
          }`}
        >
          <div className="flex flex-col gap-2">
            <div>
              <Label htmlFor="namapelanggan">Nama Pelanggan</Label>
              <Input
                name="namapelanggan"
                type="text"
                id="namapelanggan"
                placeholder="Dzaky Razi"
                value={formState.namapelanggan}
                onChange={handleChange}
              />
            </div>
            <div>
              <Label htmlFor="PlatNomor">Nomor Plat</Label>
              <Input
                name="PlatNomor"
                type="text"
                id="PlatNomor"
                placeholder="Masukkan Plat Nomor"
                value={formState.PlatNomor}
                onChange={handleChange}
              />
            </div>
            <div>
              <Label htmlFor="Spesifikasi">Spesifikasi Mobil</Label>
              <Input
                name="Spesifikasi"
                type="text"
                id="Spesifikasi"
                placeholder="Fortuner Hitam"
                value={formState.Spesifikasi}
                onChange={handleChange}
              />
            </div>
            <div>
              <Label htmlFor="Kelas">Pilih Kelas</Label>
              <select
                name="Kelas"
                id="Kelas"
                onChange={handleChange}
                value={formState.Kelas}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              >
                <option value="Nope">Pilih Kelas</option>
                <option value="Reguler">Reguler</option>
                <option value="Executive">Executive</option>
              </select>
            </div>
            {formState.services.map((service, index) => (
              <div key={index} className="my-1">
                <div className="flex items-center gap-x-2 mb-2 ">
                  <Label htmlFor={`service-${index}`}>Pilih Layanan</Label>
                  <div className="flex gap-x-1 items-center">
                    {formState.services.length > 1 && (
                      <button
                        onClick={() => removeService(index)}
                        className="bg-red-600 hover:bg-red-400   rounded-full px-1 py-1"
                      >
                        <IoMdTrash size={21} color="white" />
                      </button>
                    )}
                    {index === formState.services.length - 1 && (
                      <button
                        onClick={addService}
                        className="bg-blue-600 hover:bg-blue-400   rounded-full px-1 py-1"
                      >
                        <IoMdAdd size={21} color="white" />
                      </button>
                    )}
                  </div>
                </div>
                <select
                  id={`service-${index}`}
                  name="service"
                  value={service.service}
                  onChange={(e) => handleServiceChange(e, index)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                >
                  <option value="">Pilih Layanan</option>
                  {serviceOptions[isActivetype].map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            ))}

            <div>
              <Label htmlFor="additionalInfo">Informasi tambahan</Label>
              <textarea
                name="additionalInfo"
                id="additionalInfo"
                rows="5"
                value={formState.additionalInfo}
                onChange={handleChange}
                placeholder="Tolong lihat velknya juga"
                className="w-full px-4 py-2 border placeholder:text-base border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              ></textarea>
            </div>
          </div>
          <button
            type="submit"
            className="bg-blue-500  mt-3 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 transition duration-300"
          >
            Hitung Total Biaya
          </button>
        </form>
      ) : (
        <form
          onSubmit={handleSubmit}
          className={`bg-slate-50 mt-2 shadow rounded-md flex flex-col px-6 py-4 ${
            isActivetype === "Motor" && "slide-up"
          }`}
        >
          <div className="flex flex-col gap-2">
            <div>
              <Label htmlFor="namapelanggan">Nama Pelanggan</Label>
              <Input
                name="namapelanggan"
                type="text"
                value={formState.namapelanggan}
                onChange={handleChange}
                id="namapelanggan"
                placeholder="Dzaky Razi"
                required
              />
            </div>
            <div>
              <Label htmlFor="PlatNomor">Nomor Plat</Label>
              <Input
                name="PlatNomor"
                type="text"
                value={formState.PlatNomor}
                onChange={handleChange}
                id="PlatNomor"
                placeholder="Masukkan Plat Nomor"
                required
              />
            </div>
            <div>
              <Label htmlFor="Spesifikasi">Spesifikasi Motor</Label>
              <Input
                type="text"
                id="Spesifikasi"
                value={formState.Spesifikasi}
                onChange={handleChange}
                name="Spesifikasi"
                placeholder="XSR 155"
              />
            </div>
            <div>
              <Label htmlFor="Kelas">Pilih Kelas</Label>
              <select
                name="Kelas"
                id="Kelas"
                onChange={handleChange}
                value={formState.Kelas}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              >
                <option value="Nope">Pilih Kelas</option>
                <option value="Reguler">Reguler</option>
                <option value="Executive">Executive</option>
              </select>
            </div>
            {formState.services.map((service, index) => (
              <div key={index} className="my-1">
                <div className="flex items-center gap-x-2 mb-2 ">
                  <Label htmlFor={`service-${index}`}>Pilih Layanan</Label>
                  <div className="flex gap-x-1 items-center">
                    {formState.services.length > 1 && (
                      <button
                        onClick={() => removeService(index)}
                        className="bg-red-600 hover:bg-red-400   rounded-full px-1 py-1"
                      >
                        <IoMdTrash size={21} color="white" />
                      </button>
                    )}
                    {index === formState.services.length - 1 && (
                      <button
                        onClick={addService}
                        className="bg-blue-600 hover:bg-blue-400   rounded-full px-1 py-1"
                      >
                        <IoMdAdd size={21} color="white" />
                      </button>
                    )}
                  </div>
                </div>
                <select
                  id={`service-${index}`}
                  name="service"
                  value={service.service}
                  onChange={(e) => handleServiceChange(e, index)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                >
                  <option value="">Pilih Layanan</option>
                  {serviceOptions[isActivetype].map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            ))}
            <div>
              <Label htmlFor="additionalInfo">Informasi tambahan</Label>
              <textarea
                name="additionalInfo"
                id="additionalInfo"
                value={formState.additionalInfo}
                onChange={handleChange}
                rows="5"
                placeholder="Tolong diperhatikan kampas remnya"
                className="w-full px-4 py-2 border placeholder:text-base border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              ></textarea>
            </div>
          </div>
          <button
            type="submit"
            className="bg-blue-500 mt-3 w-full lg:w1/2 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 transition duration-300"
          >
            Hitung Total Biaya
          </button>
        </form>
      )}
      {/* </CSSTransition>
      </TransitionGroup> */}
      <div className="mt-10  grid md:grid-cols-2 lg:grid-cols-3 px-2  gap-4">
        {submissions.length > 0 ? (
          submissions.map((submission, index) => (
            <div
              key={index}
              ref={index === submissions.length - 1 ? newCardRef : null}
              className="space-y-1 relative bg-white p-4 border-2 shadow-sm border-slate-200 rounded"
            >
              {index === submissions.length - 1 && (
                <p className="text-sm absolute left-0 top-0 text-white font-semibold bg-red-500 px-3 py-2 rounded-r-full">
                  Data Terbaru
                </p>
              )}
              <h2 className="text-xl text-center font-semibold">
                Servis {submission.type}
              </h2>
              <p>Customer: {submission.namapelanggan}</p>
              <p>Kendaraan: {submission.Spesifikasi}</p>
              <p>Kelas: {submission.Kelas}</p>
              <p>Plate: {submission.PlatNomor}</p>
              <p>
                Service:{" "}
                {submission.services
                  .map((service) => service.service)
                  .join(", ")}
              </p>
              <p className=" line-clamp-2">
                Additional Info: {submission.additionalInfo}
              </p>
              <p className="font-bold">
                Total Cost: Rp {submission.totalCost.toLocaleString("id-ID")}
              </p>
              <div className="absolute flex items-center gap-x-2 top-3 right-3">
                <button
                  onClick={() => deleteSubmission(index)}
                  className="bg-red-600 px-2 py-2 rounded-md hover:bg-red-400 "
                >
                  <IoMdTrash size={21} color="white" />
                </button>
                <button
                  onClick={() => setSelectedSubmission(submission)}
                  className="bg-blue-600 px-2 py-2 rounded-md hover:bg-blue-400 "
                >
                  <FaEye size={21} color="white" />
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="flex  w-full  text-3xl text-gray-400 font-semibold uppercase items-center justify-center">
            <p className="text-center">Mulai demo Service</p>
          </div>
        )}
        {selectedSubmission && (
          <div className="fixed inset-0 bg-black/50 z-40 flex justify-center  items-center">
            <div className="bg-white text-black z-20 ring-1 rounded-md  w-[95%] md:w-[500px]   ring-slate-100 p-6  w">
              <h2 className="text-2xl font-semibold mb-4 text-center">
                Detail for {selectedSubmission.namapelanggan}
              </h2>
              <ul className="flex flex-col gap-y-1">
                <li>
                  <span className=" font-semibold">Plat Nomor : </span>
                  {selectedSubmission.PlatNomor}
                </li>
                <li>
                  <span className=" font-semibold">Spesifikasi Mobil :</span>{" "}
                  {selectedSubmission.Spesifikasi}
                </li>
                <li>
                  <span className=" font-semibold">Kelas : </span>
                  {selectedSubmission.Kelas}
                </li>
                <li className=" font-semibold">
                  {" "}
                  Service :
                  {selectedSubmission.services.map((service, index) => (
                    <p key={index}>
                      <span>
                        {" "}
                        {index + 1}. {service.service} - Rp{" "}
                        {getServicePrice(service.service).toLocaleString(
                          "id-ID"
                        )}
                      </span>
                    </p>
                  ))}
                </li>
                <li className=" font-semibold">
                  <span>Kelas Fee : </span>
                  <span>
                    Rp{" "}
                    {getClassFee(selectedSubmission.Kelas).toLocaleString(
                      "id-ID"
                    )}
                  </span>
                </li>
                <li className=" font-semibold">
                  <span>Total Cost: </span>
                  <span>
                    {" "}
                    Rp {selectedSubmission.totalCost.toLocaleString("id-ID")}
                  </span>
                </li>
                <li>
                  <p className=" font-semibold"> Informasi Lengkap :</p>
                  <p className=" overflow-y-auto max-h-48">
                    {" "}
                    {selectedSubmission.additionalInfo}
                  </p>
                </li>
              </ul>
              <button
                className="bg-red-600 hover:bg-red-700 mt-4 text-white font-semibold py-2 px-4 rounded"
                onClick={() => setSelectedSubmission(null)}
              >
                Tutup
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export { KonsultasiOnline, DashboardKondisiKendaraan, HitungBiayaPerbaikan };

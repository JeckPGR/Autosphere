import FutureCar from "../../assets/BgImg/MobilFuture.jpeg";
import Hybrid from "../../assets/BgImg/Hybrid.jpg";
import Motorcycle from "../../assets/BgImg/Motorcycle.jpeg";
import SUV from "../../assets/BgImg/SUV.jpg";
export const NewsTrendGrid = () => {
  return (
    <div className="p-2 w/96  mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:h-[80vh]  lg:grid-cols-4 lg:grid-rows-3 gap-2 lg:gap-1">
        {/* Card 1 */}
        <div
          style={{ backgroundImage: `url(${FutureCar})` }}
          className="cursor-pointer bg-no-repeat bg-center bg-cover filter overflow-hidden   h-80 lg:h-full  hover:brightness-75 transition-all  duration-300 ease-in-out  flex flex-col  items-start justify-end relative  lg:col-span-2 lg:row-span-3 p-4  rounded-sm shadow"
        >
          <div className=" z-0 absolute top-0 left-0 right-0 -bottom-12 bg-gradient-to-t from-black to-transparent"></div>
          <div className=" z-20 text-gray-300 ">
            <p className="text-sm mb-3 text-white font-semibold bg-gray-900 rounded-md w-fit p-2">
              Masa depan Otomotif
            </p>
            <h3 className="xl:text-3xl md:text-2xl text-xl font-bold xl:w-3/4">
              Mengintip Teknologi Terbaru di Mobil Konsep Masa Depan
            </h3>
          </div>
        </div>
        {/* Card 2 */}
        <div
          style={{ backgroundImage: `url(${SUV})` }}
          className="cursor-pointer bg-no-repeat bg-center bg-cover flex flex-col w-full filter overflow-hidden  h-80 lg:h-full    hover:brightness-75 transition-all  duration-300  items-start justify-end relative p-4  lg:col-span-2  lg:row-span-2     rounded-sm shadow"
        >
          <div className=" z-0 absolute top-0 left-0 right-0 -bottom-12 bg-gradient-to-t from-black to-transparent"></div>
          <div className=" z-20 text-gray-300 ">
            <p className="text-xs mb-2 text-white font-semibold bg-gray-900 rounded-md w-fit p-2">
              Perbandingan
            </p>
            <h3 className="md:text-2xl text-xl font-bold">
              Membandingkan Fitur dan Performa SUV Terpopuler di Pasaran
            </h3>
          </div>
        </div>
        {/* Card 3 */}
        <div
          style={{ backgroundImage: `url(${Motorcycle})` }}
          className="cursor-pointer bg-no-repeat bg-center bg-cover flex flex-col w-full filter overflow-hidden  h-80 lg:h-full    hover:brightness-75 transition-all  duration-300  items-start justify-end relative p-4  lg:col-span-1     rounded-sm shadow"
        >
          <div className=" z-0 absolute top-0 left-0 right-0 -bottom-8 bg-gradient-to-t from-black to-transparent"></div>
          <div className=" z-20 text-gray-300 ">
            <p className="text-xs mb-2 text-white font-semibold  bg-gray-900 rounded-md w-fit p-2">
              Perawatan Motor
            </p>
            <h3 className="md:text-2xl lg:text-sm text-xl font-bold">
              Tips Penting Perawatan Motor agar Tetap Optimal di Musim Hujan
            </h3>
          </div>
        </div>
        {/* Card 4 */}
        <div
          style={{ backgroundImage: `url(${Hybrid})` }}
          className="cursor-pointer bg-no-repeat bg-center bg-cover flex flex-col w-full filter overflow-hidden  h-80 lg:h-full    hover:brightness-75 transition-all  duration-300  items-start justify-end relative p-4  lg:col-span-1      rounded-sm shadow"
        >
          <div className=" z-0 absolute top-0 left-0 right-0 -bottom-8 bg-gradient-to-t from-black to-transparent"></div>
          <div className=" z-20 text-gray-300 ">
            <p className="text-xs mb-2 text-white font-semibold  bg-gray-900 rounded-md w-fit p-2">
              {" "}
              Mobil Hybrid
            </p>
            <h3 className=" md:text-2xl lg:text-sm text-xl font-bold">
              Meninjau Peran dan Penggunaan Teknologi Hybrid dalam Industri
              Otomotif Modern
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

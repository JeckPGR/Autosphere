export const Information = () => {
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
  return (
    <>
      <div className=" bg-blue-700 flex justify-around items-center text-lg text-white gap-x-3  container w-full p-2">
        <p>(+62) 877 94780139</p>
        <div>
          <select
            name=""
            id=""
            className=" bg-transparent ring-1 ring-white rounded-sm   p-1"
          >
            {languange.map((item, index) => (
              <option
                key={index}
                value={item.code}
                className="text-black bg-white p-2 active:bg-red-300"
              >
                {item.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
};

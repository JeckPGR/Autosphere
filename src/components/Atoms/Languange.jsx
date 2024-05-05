export const Languange = () => {
  // Ganti nama fungsi menjadi huruf kapital dan sesuaikan dengan komponen
  const [selectedLanguage, setSelectedLanguage] = useState(languanges[0]); // Gunakan useState

  return (
    <select className="form-select w-full p-2 rounded border border-blue-300 text-blue-900">
      {languanges.map((item, index) => (
        <option
          key={index}
          value={item.code}
          className="text-white bg-blue-600"
        >
          {item.name}
        </option>
      ))}
    </select>
  );
};

const languanges = [
  // Perbaiki penulisan konstanta languanges menjadi languages
  {
    name: "Indonesia",
    code: "ID",
    unavailable: false,
  },
  {
    name: "English",
    code: "EN",
    unavailable: false,
  },
];

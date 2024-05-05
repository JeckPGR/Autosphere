import PropTypes from "prop-types";
export const Input = ({ name, type, id, value, onChange, placeholder }) => {
  return (
    <input
      type={type}
      id={id}
      name={name}
      value={value}
      onChange={onChange} // Ensure this matches the case used in props
      placeholder={placeholder}
      required
      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
    />
  );
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
};

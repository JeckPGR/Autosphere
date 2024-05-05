import PropTypes from "prop-types";
export const Label = ({ htmlFor, children }) => {
  return (
    <label htmlFor={htmlFor} className="block lg:text-lg font-medium mb-1 ">
      {children}
    </label>
  );
};

Label.propTypes = {
  htmlFor: PropTypes.string.isRequired,

  children: PropTypes.string.isRequired,
};

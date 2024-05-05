import PropTypes from "prop-types";
export const Label = ({ htmlFor, children, custom }) => {
  return (
    <label
      htmlFor={htmlFor}
      className={`block lg:text-lg font-medium mb-1 ${custom}`}
    >
      {children}
    </label>
  );
};

Label.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  custom: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

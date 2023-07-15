import PropTypes from "prop-types";

export const InputComponent = ({ label, type, id, placeholder }) => {
  return (
    <div>
      <div htmlFor={id}>{label} </div>
      <div>
        <input type={type} id={id} placeholder={placeholder} />
      </div>
    </div>
  );
};

InputComponent.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
};

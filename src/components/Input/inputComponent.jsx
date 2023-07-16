import React from "react";
import PropTypes from "prop-types";

export const InputComponent = ({ label, type, id, placeholder, value, onChange, error }) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <div>
        <input type={type} id={id} placeholder={placeholder} value={value} onChange={onChange} />
      </div>
       </div>
  );
};

InputComponent.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.string,
};
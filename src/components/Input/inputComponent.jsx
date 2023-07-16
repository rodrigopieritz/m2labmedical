import React from "react";
import PropTypes from "prop-types";

export const InputComponent = ({ label, type, id, placeholder, value, onInput, error }) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <div>
        <input type={type} id={id} placeholder={placeholder} value={value} onInput={onInput}/>
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
  onInput: PropTypes.func,
  error: PropTypes.string,
};
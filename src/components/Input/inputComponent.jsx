import React from "react";
import PropTypes from "prop-types";

export const InputComponent = ({ label, type, id, placeholder, value, onInput,onChange, readOnly, defaultValue}) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <div>
        <input type={type} id={id} placeholder={placeholder} value={value} onInput={onInput} onChange={onChange} readOnly={readOnly} defaultValue={defaultValue}/>
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
  defaultValue: PropTypes.string,
  onInput: PropTypes.func,
  error: PropTypes.string,
  onChange: PropTypes.func,
  readOnly: PropTypes.bool
};
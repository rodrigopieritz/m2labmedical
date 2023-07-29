import React from "react";
import PropTypes from "prop-types";

export const InputComponent = ({ label, type, id, placeholder, value, onInput,onChange, readOnly, defaultValue}) => {
  return (
    <div className="form-outline mb-4">
      <label className="form-label" htmlFor={id}>{label}</label>
      <div>
        <input className="form-control form-control-lg" type={type} id={id} placeholder={placeholder} value={value} onInput={onInput} onChange={onChange} readOnly={readOnly} defaultValue={defaultValue}/>
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
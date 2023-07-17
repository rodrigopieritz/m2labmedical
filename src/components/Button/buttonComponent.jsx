import React from "react";
import PropTypes from "prop-types";

export const ButtonComponent = ({ id, label, type, icon, onClick }) => {
  return (
    <>
    <div>
    <img src={icon}/>
    </div>
      <div>
        <button type={type} id={id} onClick={onClick}>
          {label}
        </button>
      </div>
    </>
  );
};

ButtonComponent.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  type: PropTypes.string,
  icon:PropTypes.string,
};

import React from "react";
import PropTypes from "prop-types";

export const ButtonComponent = ({ id, label, type, onClick, disabled, icon }) => {
  return (
    <>
      <div className=" mb-2">
        <button
          className="btn btn-info btn-lg btn-block w-100"
          style={{ backgroundColor: "rgb(0, 133, 132)", color: "whitesmoke" }}
          type={type}
          id={id}
          onClick={onClick}
          disabled={disabled}
        >
          {icon}{label}
        </button>
      </div>
    </>
  );
};

ButtonComponent.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
};

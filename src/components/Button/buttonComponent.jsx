import React from "react";
import PropTypes from "prop-types";

export const ButtonComponent = ({ id, label, type, icon, onClick, disabled }) => {
  return (
    <>
    <div>
    <img src={icon}/>
    </div>
      <div className=" mb-2">
        <button className="btn btn-info btn-lg btn-block w-100" style={{ backgroundColor: "rgb(0, 133, 132)", color:"whitesmoke" }} type={type} id={id} onClick={onClick} disabled={disabled}>
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
  disabled: PropTypes.bool,
};

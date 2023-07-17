import React from "react";
import PropTypes from "prop-types";

const Toolbar = ({ pageTitle, userName, userPhoto }) => {
  return (
    <div>
      <h1>{pageTitle}</h1>
      <div>
        <div>
          <img src={userPhoto} alt="User Avatar" width="35" height="35" />
        </div>
        <div>{userName}</div>
              </div>
    </div>
  );
};

export default Toolbar;

Toolbar.propTypes = {
    pageTitle: PropTypes.string.isRequired,
    userName: PropTypes.string,
    userPhoto: PropTypes.string
  };

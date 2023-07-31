import React from "react";
import PropTypes from "prop-types";
import * as Styled from "../Toolbar/Toolbar.style";

const Toolbar = ({ pageTitle, userName, userPhoto }) => {
  return (
    <>
<Styled.Toolbar className="fixed-top" aria-label="Toolbar">
  <div className="d-flex align-items-center mx-2 mb-2" aria-label="Logo">
    <img src="/../../lab-medical-logo-white.png" alt="Logo" width="90px" />
  </div>
  <div aria-label="Page Title">
    <h1>{pageTitle}</h1>
  </div>
  <div className="d-flex align-items-center mx-2 mb-2" aria-label="User Information">
    <div className="mr-2 mb-2" aria-label="User Avatar">
      <img src={userPhoto} alt="User Avatar" width="35" height="35" />
    </div>
    <div className="mr-2" aria-label="User Name">
      {userName}
    </div>
  </div>
</Styled.Toolbar>
</>
  );
};

export default Toolbar;

Toolbar.propTypes = {
  pageTitle: PropTypes.string.isRequired,
  userName: PropTypes.string,
  userPhoto: PropTypes.string,
};

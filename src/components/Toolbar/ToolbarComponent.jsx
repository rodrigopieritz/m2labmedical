import React from "react";
import PropTypes from "prop-types";
import * as Styled from '../Toolbar/Toolbar.style'

const Toolbar = ({ pageTitle, userName, userPhoto }) => {
  return (
    <>
    <Styled.Toolbar>
      <h1>{pageTitle}</h1>
      <div>
        <div>
          <img src={userPhoto} alt="User Avatar" width="35" height="35" />
        </div>
        <div>{userName}</div>
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

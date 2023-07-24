import React from "react";
import PropTypes from "prop-types";

export const PatientMedicalRecordComponent = ({id}) => {
   return (
    <>
     <p>teste de patient Medical Record</p> {id}
    </>
  );
};

PatientMedicalRecordComponent.propTypes = {
  id: PropTypes.string.isRequired,
  };

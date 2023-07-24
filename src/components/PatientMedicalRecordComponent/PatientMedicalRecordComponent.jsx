import React from "react";
import PropTypes from "prop-types";
import { getPatientById } from './../../service/patients.service';
import PatientCard from "../PatientCard/PatientCard";

export const PatientMedicalRecordComponent = ({id}) => {
  const patientData = getPatientById(id);
  
  
  return (
    <>
     <h3>Identificação do Paciente</h3>
     
     <PatientCard
                  id={patientData.id}
                  name={patientData.name}
                  insurance={patientData.insurance}
                  emergencyContact= {patientData.emergencyContact}
                  allergies={patientData.allergies}
                  specialCare = {patientData.specialCare}
                />

    </>
  );
};

PatientMedicalRecordComponent.propTypes = {
  id: PropTypes.string.isRequired,
  };

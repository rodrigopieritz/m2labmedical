import React from "react";
import PropTypes from "prop-types";
import {
   FaUserDoctor,
  FaStethoscope,
  FaHospitalUser,
} from "react-icons/fa6";

export const StatsCardComponent = ({
  totalPatients,
  totalExams,
  totalMedicalAppointments,
}) => {
  return (
    <div className="d-flex flex-row">
      <div className="card m-4" >
        
        <FaHospitalUser size="60%" className="mb-5 m-5"/>
        <h6>Pacientes Cadastrados: <span>{totalPatients}</span></h6>
      </div>
      
      <div className="card m-4">
        
        <FaStethoscope size="60%" className="mb-5 m-5"/>
        
        <h6>Exames Cadastrados: <span>{totalExams}</span></h6>
      </div>
      <div className="card m-4">
        
        <FaUserDoctor size="60%" className="mb-5 m-5"/>
        <h6>Consultas Cadastradas: <span>{totalMedicalAppointments}</span></h6>
      </div>
      </div>
   
    
  );
};

StatsCardComponent.propTypes = {
    totalPatients: PropTypes.number,
    totalExams: PropTypes.number,
    totalMedicalAppointments: PropTypes.number,
}

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
  <div className="card m-4 d-flex align-items-center justify-content-center">
    <FaHospitalUser size="30%" className="mb-5 m-5" />
    <div>
      <h5>Pacientes Cadastrados: {totalPatients}</h5>
      
    </div>
  </div>

  <div className="card m-4 d-flex align-items-center justify-content-center">
    <FaStethoscope size="30%" className="mb-5 m-5" />
    <div>
      <h5>Exames Cadastrados: {totalExams}</h5>
      
    </div>
  </div>

  <div className="card m-4 d-flex align-items-center justify-content-center">
    <FaUserDoctor size="30%" className="mb-5 m-5" />
    <div>
      <h5>Consultas Cadastradas: {totalMedicalAppointments} </h5>
     
    </div>
  </div>
</div>

   
    
  );
};

StatsCardComponent.propTypes = {
    totalPatients: PropTypes.number,
    totalExams: PropTypes.number,
    totalMedicalAppointments: PropTypes.number,
}

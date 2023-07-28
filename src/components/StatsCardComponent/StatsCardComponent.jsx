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
    <div>
      <div>
        <h6>Pacientes Cadastrados</h6>
        <FaHospitalUser size="5%" />
        {totalPatients}
      </div>
      <div>
        <h6>Exames Cadastrados</h6>
        <FaStethoscope size="5%" />
        {totalExams}
      </div>
      <div>
        <h6>Consultas Cadastradas</h6>
        <FaUserDoctor size="5%" />
        {totalMedicalAppointments}
      </div>
    </div>
  );
};

StatsCardComponent.propTypes = {
    totalPatients: PropTypes.string,
    totalExams: PropTypes.string,
    totalMedicalAppointments: PropTypes.string,
}

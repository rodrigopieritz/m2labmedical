import React from "react";
import PropTypes from "prop-types";
import { ButtonComponent } from "../Button/buttonComponent";
import { Navigate, useNavigate } from "react-router-dom";

export const MedicalRecordCard = ({
  id,
  label,
  isAppoint,
  appointDate,
  appointTime,
  appointReason,
  problemDescription,
  medicationPrescribed,
  dosageAndPrecautions,
  examDate,
  examTime,
  laboratory,
  urlDoc,
  examName,
  examType,
  results,
}) => {
    const navigate = useNavigate();

    const handleRedirect = (path) => {
      navigate(path);
    };
  return (
    <div>
      <h5>{label}</h5>
      {isAppoint && (
        <div>
          <div>
             <label><h6>Data da Consulta:</h6></label>
            <div>{appointDate}</div>
            <label><h6>Hora da Consulta:</h6></label>
            <div>{appointTime}</div>
            <label><h6>Motivo da Consulta:</h6></label>
            <div>{appointReason}</div>
            <label>Descrição do Problema:</label>
            <div>{problemDescription}</div>
            <label>Medicação Prescrita:</label>
            <div>{medicationPrescribed}</div>
            <label>Descrição do Problema:</label>
            <div>{problemDescription}</div>
            <label>Dosagem e Precauções:</label>
            <div>{dosageAndPrecautions}</div>
          </div>
          <ButtonComponent
              id={`editBtn${appointDate}${appointTime}`}
              onClick={() => handleRedirect("/medical-register")}
              label="Editar Consulta"
            />
          <div>-----</div>
        </div>
      )}
      {!isAppoint && (
        <div>
          <div>
          <label>ID:</label>
            <div>{id}</div>
            <label><h6>Data do Exame:</h6></label>
            <div>{examDate}</div>
            <label><h6>Hora do Exame:</h6></label>
            <div>{examTime}</div>
            <label><h6>Laboratório:</h6></label>
            <div>{laboratory}</div>
            <label><h6>Link para Anexo:</h6></label>
            <div>{urlDoc}</div>
            <label>Nome do Exame:</label>
            <div>{examName}</div>
            <label>Tipo de Exame:</label>
            <div>{examType}</div>
            <label>Resultados:</label>
            <div>{results}</div>
          </div>
          <ButtonComponent
              id={`editBtn${examDate}${examTime}`}
              onClick={() => handleRedirect(`/exam-register/${id}`)}
              label="Editar Exame"
            />
          <div>-----</div>
        </div>
      )}
    </div>
  );
};

MedicalRecordCard.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  isAppoint: PropTypes.bool,
  appointDate: PropTypes.string,
  examDate: PropTypes.string,
  appointTime: PropTypes.string,
  appointReason: PropTypes.string,
  problemDescription: PropTypes.string,
  medicationPrescribed: PropTypes.string,
  dosageAndPrecautions: PropTypes.string,
  examName: PropTypes.string,
  examType: PropTypes.string,
  results: PropTypes.string,
};

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
    <div className="mt-4" style={{ maxWidth: "1300px" }}>
      <h6>{label}</h6>
      {isAppoint && (
        <div className="container-fluid">
          <div className="row text-black d-flex align-items-center justify-content-center">
            <div>
              <div className="row  text-black">
                <div class="col-6 mb-2 mt-4">
                  <label>
                    <h6>Motivo da Consulta:</h6>
                  </label>
                  <div>{appointReason}</div>
                </div>
                <div class="col-3 mb-2 mt-4">
                  <label>
                    <h6>Data da Consulta:</h6>
                  </label>
                  <div>{appointDate}</div>
                </div>
                <div class="col-3 mb-2 mt-4">
                  <label>
                    <h6>Hora da Consulta:</h6>
                  </label>
                  <div>{appointTime}</div>
                </div>

                <div class="col-12 mb-2 mt-2">
                  <label>
                    <h6>Descrição do Problema:</h6>
                  </label>
                  <div>{problemDescription}</div>
                </div>
                <div class="col-6 mb-2 mt-2">
                  <label>
                    <h6>Medicação Prescrita:</h6>
                  </label>
                  <div>{medicationPrescribed}</div>
                </div>

                <div class="col-6 mb-2 mt-2">
                  <label>
                    <h6>Dosagem e Precauções:</h6>
                  </label>
                  <div>{dosageAndPrecautions}</div>
                </div>
              </div>
            </div>
            <div className="row  text-black mt-4 ">
              <div className="col-8"></div>
              <div className="col-3">
                <ButtonComponent
                  id={`editBtn${appointDate}${appointTime}`}
                  onClick={() => handleRedirect(`/medical-register/${id}`)}
                  label="Editar Consulta"
                />
              </div>
            </div>
          </div>
        </div>
      )}
       {!isAppoint && (
        <div className="container-fluid">
          <div className="row text-black d-flex align-items-center justify-content-center">
            <div>
              <div className="row  text-black">
              <div class="col-4 mb-2 mt-2">
                  <label>
                    <h6>Tipo de Exame:</h6>
                  </label>
                  <div>{examType}</div>
                </div>

           
                 <div class="col-1 mb-2 mt-4">
                  <label>
                    <h6>ID:</h6>
                  </label>
                  <div>{id}</div>
                </div>

                <div class="col-3 mb-2 mt-4">
                  <label>
                    <h6>Data do Exame:</h6>
                  </label>
                  <div>{examDate}</div>
                </div>
                <div class="col-4 mb-2 mt-4">
                  <label>
                    <h6>Hora do Exame:</h6>
                  </label>
                  <div>{examTime}</div>
                </div>

                <div class="col-6 mb-2 mt-2">
                  <label>
                    <h6>Nome do Exame:</h6>
                  </label>
                  <div>{examName}</div>
                </div>
                
           

           
        
                <div class="col-4 mb-2 mt-2">
                  <label>
                    <h6>Laboratório:</h6>
                  </label>
                  <div>{laboratory}</div>
                </div>
                <div class="col-12 mb-2 mt-2">
                  <label>
                    <h6>Link para Anexo:</h6>
                  </label>
                  <div>{urlDoc}</div>
                </div>
                <div class="col-12 mb-2 mt-2">
                  <label>
                    <h6>Resultados:</h6>
                  </label>
                  <div>{results}</div>
                </div>
              </div>
            </div>
            <div className="row  text-black mt-4 ">
              <div className="col-8"></div>
              <div className="col-3">
                <ButtonComponent
                  id={`editBtn${appointDate}${appointTime}`}
                  onClick={() => handleRedirect(`/medical-register/${id}`)}
                  label="Editar Consulta"
                />
              </div>
            </div>
          </div>
        </div>
      )}
     
    </div>
  );
};

MedicalRecordCard.propTypes = {
  id: PropTypes.number,
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

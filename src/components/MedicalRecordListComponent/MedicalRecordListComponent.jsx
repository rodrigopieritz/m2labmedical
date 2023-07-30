import React, { useState } from "react";
import { ButtonComponent } from "../Button/buttonComponent";
import { InputComponent } from "../Input/inputComponent";
import * as Styled from "./MedicalRecordListComponent.style";
import PatientCard from "../PatientCard/PatientCard";
import { getPatients } from "../../service/patients.service";
import { Navigate, useNavigate } from "react-router-dom";

export const MedicalRecordListComponent = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [foundPatient, setFoundPatient] = useState(null);
  const [foundPatientError, setFoundPatientError] = useState(null);

  const navigate = useNavigate();

  const handleRedirect = (path) => {
    navigate(path);
  };

  const patientsListRender = getPatients();

  const searchLocalStorage = (query) => {
    if (query.trim() === "") {
      return null;
    }

    const patientsList = getPatients();

    const foundByName = patientsList.find((patient) =>
      patient.name.toLowerCase().includes(query.toLowerCase())
    );

    if (foundByName) {
      return foundByName;
    }

    const queryAsNumber = Number(query);
    if (!isNaN(queryAsNumber)) {
      const foundById = patientsList.find(
        (patient) => patient.id === queryAsNumber
      );
      if (foundById) {
        return foundById;
      }
    }

    return null;
  };

  const handleSearchPatient = () => {
    const foundPatient = searchLocalStorage(searchQuery);
    if (foundPatient) {
      setFoundPatient(foundPatient);
    } else {
      setFoundPatient(null);
      alert("Paciente não encontrado.");
    }
  };

  return (
    <>
    <Styled.MedicalRecordList style={{ maxWidth: "1200px"}}>
         <div className="d-flex align-items-center mx-2 mb-2">
        <img src="/../../lab-medical-logo-white.png" alt="Logo" width="90px"/>
      </div>
      <div className="row"></div>
          <h5>Busca de Pacientes</h5>
      <div className="row">
            <div className="row"></div>
            <div className="d-flex flex-row">
              <div className="col-8">
                <InputComponent
                  id="searchPatientInp"
                  type="text"
                  placeholder="Digite o nome do paciente"
                  value={searchQuery}
                  onInput={(event) => setSearchQuery(event.target.value)}
                />
              </div>
              <div className="col-8">
                <div className="col-2 "></div>
                <div className="col-2 ">
                  <ButtonComponent
                    id="searchPatientBtn"
                    type="button"
                    label="Buscar Paciente"
                    onClick={handleSearchPatient}
                  />
                </div>
              </div>
            </div>
          </div>
      {!foundPatient ? (
         <div>
         <div className="row d-flex flex-row">
           {patientsListRender.map((patient) => (
             <div key={patient.id} className="col-6 ">
               <PatientCard
                 id={patient.id}
                 name={patient.name}
                 birthdate={patient.bithdate}
                 insurance={patient.insurance}
                 phone={patient.phone}
               />
               <ButtonComponent
                 id={`seeMoreBtn${patient.id}`}
                 onClick={() =>
                  handleRedirect(`/patient-medical-record/${patient.id}`)
                 }
                 label="Veja Mais"
               />
             </div>
           ))}
         </div>
       </div>
       
      ) : (
        <div>
          <h5>Paciente Selecionado: {foundPatient.name}</h5>
          <div className="row d-flex flex-row">
          <div key={foundPatient.id} className="col-6 ">
            <PatientCard
              id={foundPatient.id}
              name={foundPatient.name}
              birthdate={foundPatient.bithdate}
              insurance={foundPatient.insurance}
              phone={foundPatient.phone}
            />
            <ButtonComponent
              id={`seeMoreBtn${foundPatient.id}`}
              onClick={() => handleRedirect(`/patient-medical-record/${foundPatient.id}`)}
              label="Veja Mais"
            />
          </div>
        </div>
        </div>
      )}
      {foundPatientError && <div>{foundPatientError}</div>}
      </Styled.MedicalRecordList>
    </>
  );
};

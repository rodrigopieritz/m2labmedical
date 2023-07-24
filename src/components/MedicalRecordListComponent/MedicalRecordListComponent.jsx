import React, { useState } from "react";
import { ButtonComponent } from "../Button/buttonComponent";
import { InputComponent } from "../Input/inputComponent";
import * as Styled from "./MedicalRecordListComponent.style";
import PatientCard from "../PatientCard/PatientCard";

export const MedicalRecordListComponent = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [foundPatient, setFoundPatient] = useState(null);
  const [foundPatientError, setFoundPatientError] = useState(null);

    const searchLocalStorage = (query) => {
        if (query.trim() === "") {
          return null;
        }
    
        const patientsList = JSON.parse(localStorage.getItem("patients")) || [];
    
        const foundByName = patientsList.find(
          (patient) => patient.name.toLowerCase().includes(query.toLowerCase())
        );
    
        if (foundByName) {
          return foundByName;
        }
    
        const queryAsNumber = Number(query);
        if (!isNaN(queryAsNumber)) {
          const foundById = patientsList.find((patient) => patient.id === queryAsNumber);
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
          console.log(foundPatient)
        } else {
          setFoundPatient(null);
          alert("Paciente não encontrado.");
          console.log(foundPatient)
        }
      };

  return (
    <>
      <div>
        <InputComponent
          id="searchPatientInp"
          type="text"
          placeholder="Digite o nome ou ID do paciente"
          label="Buscar Paciente"
          value={searchQuery}
          onInput={(event) => setSearchQuery(event.target.value)}
        />
        <ButtonComponent
          id="searchPatientBtn"
          type="button"
          label="Buscar Paciente"
          onClick={handleSearchPatient}
        />
      </div>
      {!foundPatient ? (
        <div>Para começar, escolha um paciente</div>
      ) : (
        <div>Paciente Selecionado: {foundPatient.name}
            <div>
      
        <PatientCard
          id={foundPatient.id}
          name={foundPatient.name}
          birthdate={foundPatient.bithdate}
          insurance={foundPatient.insurance}
          phone={foundPatient.phone}
          navigateTo=""
        />
      
    </div>
        
        </div>
        
      )}
      {foundPatientError && <div>{foundPatientError}</div>}


      </>
  );
};

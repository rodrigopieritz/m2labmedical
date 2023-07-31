import React, { useEffect, useState } from "react";
import { ButtonComponent } from "../Button/buttonComponent";
import { InputComponent } from "../Input/inputComponent";
import * as Styled from "./HomeComponent.style";
import PatientCard from "../PatientCard/PatientCard";
import { getPatients } from "../../service/patients.service";
import { getExamsList } from "../../service/examRegister.service";
import { useNavigate } from "react-router-dom";
import { StatsCardComponent } from "../StatsCardComponent/StatsCardComponent";
import { getMedAppList } from "../../service/medicalAppointment.service";

export const HomeComponent = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [foundPatient, setFoundPatient] = useState(null);
  const [foundPatientError, setFoundPatientError] = useState(null);
  const [totalPatients, setTotalPatients] = useState(null);
  const [totalExams, setTotalExams] = useState(null);
  const [totalMedicalAppointments, setTotalMedicalAppointments] =
    useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    setTotalPatients(getPatients().length);
    setTotalExams(getExamsList().length);
    setTotalMedicalAppointments(getMedAppList().length);
  }, []);

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

    const foundByPhone = patientsList.find((patient) =>
      patient.phone.includes(query)
    );

    if (foundByPhone) {
      return foundByPhone;
    }

    const foundByEmail = patientsList.find((patient) =>
      patient.email.toLowerCase().includes(query.toLowerCase())
    );

    if (foundByEmail) {
      return foundByEmail;
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

  useEffect(() => {
    setTotalPatients(getPatients().length);
  }, []);

  return (
    <>
      <div
        className="d-flex align-items-center mx-2 mb-2"
        style={{ maxWidth: "500px" }}
      >
        <img src="/../../lab-medical-logo-white.png" alt="Logo" width="140px" />
      </div>

      <div className="row mt-4">
        <div className="col-12">
          <h5>Estatísticas do Sistema</h5>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <StatsCardComponent
            totalPatients={totalPatients}
            totalExams={totalExams}
            totalMedicalAppointments={totalMedicalAppointments}
          />
        </div>
      </div>
      <div>
        <div className="row">
          <h5>Informações Rápidas de Pacientes</h5>
        </div>
        <div className="row">
          <div className="d-flex flex-row">
            <div className="col-8">
              <InputComponent
                id="searchPatientInp"
                type="text"
                placeholder="Digite o nome ou ID do paciente"
                value={searchQuery}
                onInput={(event) => setSearchQuery(event.target.value)}
              />
            </div>
            <div className="col-md-8 col-4 lg-8">
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
        <div className="row"></div>
        {!foundPatient ? (
          <div>
            <div className="row d-flex flex-row">
              {patientsListRender.map((patient) => (
                <div key={patient.id} className="col-md-6 col-lg-6 ">
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
                      handleRedirect(`/patient-register/${patient.id}`)
                    }
                    label="Veja Mais"
                  />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div>
            Paciente Selecionado: {foundPatient.name}
            <div key={foundPatient.id}>
              <PatientCard
                id={foundPatient.id}
                name={foundPatient.name}
                birthdate={foundPatient.bithdate}
                insurance={foundPatient.insurance}
                phone={foundPatient.phone}
              />
              <ButtonComponent
                id={`seeMoreBtn${foundPatient.id}`}
                onClick={() =>
                  handleRedirect(`/patient-register/${foundPatient.id}`)
                }
                label="Veja Mais"
              />
            </div>
          </div>
        )}
        {foundPatientError && <div>{foundPatientError}</div>}
      </div>
    </>
  );
};

import React from "react";
import PropTypes from "prop-types";
import { getPatientById } from "./../../service/patients.service";
import PatientCard from "../PatientCard/PatientCard";
import { getExamsList } from "../../service/examRegister.service";
import { getMedAppList } from "../../service/medicalAppointment.service";
import { MedicalRecordCard } from "../MerdicalRecordCard/MerdicalRecordCard";

export const PatientMedicalRecordComponent = ({ id }) => {
  const patientData = getPatientById(id);

  const exams = getExamsList();
  const medicalAppointments = getMedAppList();

  const idToFind = +id;
  const patientExams = exams.filter((exam) => exam.patient === idToFind);
  const patientAppointments = medicalAppointments.filter(
    (appointment) => appointment.patient === idToFind
  );

  const allEvents = [...patientExams, ...patientAppointments];

  const sortedEvents = allEvents.sort((a, b) => {
    const dateA = new Date(a.examDate || a.appointDate);
    const dateB = new Date(b.examDate || b.appointDate);

    if (dateA.getTime() === dateB.getTime()) {
      const timeA = a.examTime || a.appointTime || "00:00";
      const timeB = b.examTime || b.appointTime || "00:00";
      return timeA.localeCompare(timeB);
    }

    return dateA - dateB;
  });

  return (
    <>
      <div className="d-flex align-items-center mx-2 mb-2">
        <img src="/../../lab-medical-logo-white.png" alt="Logo" width="140px" />
      </div>

      <div className="row ">
        <div className="col-12 mb-2">
          <h5>Identificação do Paciente</h5>
        </div>
      </div>
      <div>
        <div className="row d-flex flex-row">
          <div className="col-6 mb-2 ">
            <PatientCard
              id={patientData.id}
              name={patientData.name}
              insurance={patientData.insurance}
              emergencyContact={patientData.emergencyContact}
              allergies={patientData.allergies}
              specialCare={patientData.specialCare}
            />
          </div>
        </div>
      </div>
      <div className="row d-flex flex-row">
        <div className="col-12 mt-4 ">
          <h5>Consultas e Exames </h5>
        </div>
      </div>

      <div>
      <div className="row d-flex flex-row">
        {sortedEvents.map((patientRecord, index) => (
          <div key={index} className="mt-4 col-10 card">
            {patientRecord.appointDate ? (
              <MedicalRecordCard
                label="Consulta Médica"
                isAppoint={true}
                id={patientRecord.id}
                appointDate={patientRecord.appointDate}
                appointTime={patientRecord.appointTime}
                appointReason={patientRecord.appointReason}
                problemDescription={patientRecord.problemDescription}
                medicationPrescribed={patientRecord.medicationPrescribed}
                dosageAndPrecautions={patientRecord.dosageAndPrecautions}
              />
            ) : (
              <MedicalRecordCard
                label="Exame de Laboratório"
                isAppoint={false}
                id={patientRecord.id}
                examDate={patientRecord.examDate}
                examTime={patientRecord.examTime}
                laboratory={patientRecord.laboratory}
                urlDoc={patientRecord.urlDoc}
                examName={patientRecord.examName}
                examType={patientRecord.examType}
                results={patientRecord.results}
              />
            )}
            
          </div>
        ))}</div>
      </div>
    </>
  );
};

PatientMedicalRecordComponent.propTypes = {
  id: PropTypes.string,
};

import React, { useState, useEffect } from "react";
import * as Styled from "./ExamRegisterComponent.style";
import { ButtonComponent } from "../Button/buttonComponent";
import { InputComponent } from "../Input/inputComponent";
import * as yup from "yup";
import { addmedicalAppointment } from "../../service/medicalAppointment.service";
import { Spinner } from "react-bootstrap";

export const ExamRegisterComponent = () => {

  const [examName, setExamName] = useState("");
  const [examNameError, setExamNameError] = useState("");


  const [examDate, setExamDate] = useState("");
  const [examDateError, setExamDateError] = useState("");

  const [submitButtonState, setSubmitButtonState] = useState("");
  const [editButtonState, setEditButtonState] = useState(false);
  const [deleteButtonState, setDeleteButtonState] = useState(false);
  const [examTime, setExamTime] = useState("");
  const [examTimeError, setExamTimeError] = useState("");
  const [examType, setExamType] = useState("");
  const [examTypeError, setExamTypeError] = useState("");
//   const [medicationPrescribed, setMedicationPrescribed] = useState("");
//   const [dosageAndPrecautions, setDosageAndPrecautions] = useState("");
//   const [dosageAndPrecautionsError, setDosageAndPrecautionsError] =
//     useState("");
  const [currentDate, setCurrentDate] = useState("");
  const [currentTime, setCurrentTime] = useState("");
//   const [searchQuery, setSearchQuery] = useState("");
//   const [foundPatient, setFoundPatient] = useState(null);
//   const [foundPatientError, setFoundPatientError] = useState(null);

  useEffect(() => {
    const getCurrentDate = () => {
      const now = new Date();
      const year = now.getFullYear();
      const month = String(now.getMonth() + 1).padStart(2, "0");
      const day = String(now.getDate()).padStart(2, "0");
      return `${year}-${month}-${day}`;
    };

    const getCurrentTime = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      return `${hours}:${minutes}`;
    };

    setExamDate(getCurrentDate());
    setCurrentDate(getCurrentDate());
    setExamTime(getCurrentTime());
    setCurrentTime(getCurrentTime());
  }, []);

//   const handleSearchPatient = () => {
//     if (searchQuery.trim() === "") {
//          setFoundPatient(null);
//         return;
//       }
//     const patientsList = JSON.parse(localStorage.getItem("patients")) || [];

//     const patient = patientsList.find((patient) =>
//       patient.name.toLowerCase().includes(searchQuery.toLowerCase())
//     );

//     if (patient) {
//       setFoundPatient(patient);
//     } else {
//       setFoundPatient(null);
//       alert("Paciente não encontrado.");
//     }
//   };

  const handleInput = (event) => {
    event.preventDefault();
    setDeleteButtonState(true);
    setEditButtonState(true);
    const { value, id } = event.target;
    if (id === "examName") {
      setExamName(value);
      setExamNameError("");
    } else if (id === "examDateDate") {
      setExamDate(value);
      setExamDateError("");
    } else if (id === "examTime") {
      setExamTime(value);
      setExamTimeError("");
    } else if (id === "examType") {
      setExamType(value);
      setExamTypeError("");
//     } else if (id === "medicationPrescribed") {
//       setMedicationPrescribed(value);
//     } else if (id === "dosageAndPrecautions") {
//       setDosageAndPrecautions(value);
//       setDosageAndPrecautionsError("");
//     } else if (id === "foundPatient") {
//       setFoundPatient(value);
//       setFoundPatientError("");
    }
  };

//   const addMedicalAppointmentToLocalStorage = () => {
//     const newMedicalAppointment = {
//       patient: foundPatient.id,
//       examName: examName,
//       examDate: examDate,
//       examTime: examTime,
//       examType: examType,

//       dosageAndPrecautions: dosageAndPrecautions,
//       medicationPrescribed: medicationPrescribed,
//     };
//     addmedicalAppointment(newMedicalAppointment);
//     setSubmitButtonState("");
//   };

  const handleFormSubmission = (e) => {
    e.preventDefault();

    const validationSchema = yup.object().shape({
//         foundPatient: yup
//         .mixed()
//         .nullable("Este campo é obrigatório")
//         .test(
//           "is-patient-selected",
//           "Por favor, selecione um paciente.",
//           (value) => {
//             return value !== null;
//           }
//         ),
      examName: yup
        .string()
        .min(5, "Este campo deve ter pelo menos 6 caracteres")
        .max(50, "Este campo deve ter no máximo 60 caracteres"),
        examDate: yup
        .date("Este campo é obrigatório")
        .required("Este campo é obrigatório")
        .nullable("Este campo é obrigatório")
        .typeError("Data inválida"),
      examTime: yup
      .string()
      .required("Este campo é obrigatório"),
      examType: yup
        .string()
        .min(5, "Este campo deve ter pelo menos 5 caracteres")
        .max(30, "Este campo deve ter no máximo 30 caracteres")
        .required("Este campo é obrigatório"),
//       dosageAndPrecautions: yup
//         .string()
//         .min(15, "Este campo deve ter pelo menos 15 caracteres")
//         .max(250, "Este campo deve ter no máximo 250 caracteres")
//         .required("Este campo é obrigatório"),
    });

    validationSchema
      .validate(
        {
//           foundPatient,
          examName,
          examDate,
          examTime,
          examType,
//           dosageAndPrecautions,
        },
        { abortEarly: false }
      )
      .then(() => {
//         setSubmitButtonState("Carregando...");
//         setTimeout(() => {
//           addMedicalAppointmentToLocalStorage();
          alert("Novo exame cadastrado com sucesso");
//         }, 2000);
      })
      .catch((error) => {
        if (error.inner) {
          error.inner.forEach((err) => {
            const { path, message } = err;
            if (path === "examName") {
                setExamNameError(message);
            } else if (path === "examDate") {
              setExamDateError(message);
            } else if (path === "examTime") {
              setExamTimeError(message);
            } else if (path === "examType") {
              setExamTypeError(message);
//             } else if (path === "medicationPrescribed") {
//               setMedicationPrescribedError(message);
//             } else if (path === "dosageAndPrecautions") {
//               setDosageAndPrecautionsError(message);
//             } else if (path === "foundPatient") {
//               setFoundPatientError(message);
            }
          });
        }
      });
  };

  return (
    <>
    
      {/* <div>
        <InputComponent
          id="searchPatientInp"
          type="text"
          placeholder="Digite o nome do paciente"
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
      </div> */}

      
        <form onSubmit={handleFormSubmission} noValidate>
          <ButtonComponent
            id="editButton"
            type="button"
            label="Editar"
            disabled={editButtonState}
            onClick={() => {
              alert(
                "funcionalidade não desenvolvida - fora do escopo do projeto"
              );
            }}
          />
          <ButtonComponent
            id="deletButton"
            type="button"
            label="Apagar"
            disabled={deleteButtonState}
            onClick={() => {
              alert(
                "funcionalidade não desenvolvida- fora do escopo do projeto"
              );
            }}
          />
          <ButtonComponent
            id="save"
            type="submit"
            label="Salvar"
            onClick={handleFormSubmission}
          />
          {submitButtonState && (
            <div>
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Carregando...</span>
              </Spinner>
            </div>
          )}

          {/* {!foundPatient ? (
            <div>Para começar, escolha um paciente</div>
          ) : (
            <div>Paciente: {foundPatient.name}</div>
          )}
          {foundPatientError && <div>{foundPatientError}</div>} */}

          <InputComponent
            id="examName"
            type="text"
            placeholder="Digite o Nome do Exame"
            label="Nome do Exame"
            value={examName}
            onInput={handleInput}
            error={examNameError}
          />
          {examNameError && <div>{examNameError}</div>}

          <InputComponent
            id="examDate"
            type="date"
            label="Data do Exame"
            value={examDate}
            onInput={handleInput}
            error={examDate}
          />
          {examDateError && <div>{examDateError}</div>}
          <InputComponent
            id="examTime"
            type="time"
            label="Horário do Exame"
            value={examTime}
            onInput={handleInput}
            error={examTimeError}
          />
          {examTimeError && <div>{examTimeError}</div>}

          <InputComponent
            id="examType"
            type="textarea"
            placeholder="Digite o tipo de Exame"
            label="Tipo de Exame"
            value={examType}
            onInput={handleInput}
          />
          {examTypeError && <div>{examTypeError}</div>}

          {/* <InputComponent
            id="medicationPrescribed"
            placeholder="Digite a prescrição médica"
            type="textarea"
            label="Medicação Receitada"
            onInput={handleInput}
          />

          <InputComponent
            id="dosageAndPrecautions"
            placeholder="Digite as dosagens e prescrição"
            type="textarea"
            label="Dosagem e Precauções"
            value={dosageAndPrecautions}
            onInput={handleInput}
          />
          {dosageAndPrecautionsError && <div>{dosageAndPrecautionsError}</div>} */}
        </form>
     
    </>
  );
};
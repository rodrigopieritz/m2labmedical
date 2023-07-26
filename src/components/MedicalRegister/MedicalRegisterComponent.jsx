// import React, { useState, useEffect } from "react";
// import * as Styled from "./MedicalRegisterComponent.style";
// import { ButtonComponent } from "../Button/buttonComponent";
// import { InputComponent } from "../Input/inputComponent";
// import * as yup from "yup";
// import { addmedicalAppointment } from "../../service/medicalAppointment.service";
// import { Spinner } from "react-bootstrap";
// import PropTypes from "prop-types";

// export const MedicalRegisterComponent = () => {
//   const [appointReason, setAppointReason] = useState("");
//   const [appointReasonError, setAppointReasonError] = useState("");
//   const [appointDate, setAppointDate] = useState("");
//   const [appointDatError, setAppointDateError] = useState("");
//   const [submitButtonState, setSubmitButtonState] = useState("");
//   const [editButtonState, setEditButtonState] = useState(false);
//   const [deleteButtonState, setDeleteButtonState] = useState(false);
//   const [appointTime, setAppointTime] = useState("");
//   const [appointTimeError, setAppointTimeError] = useState("");
//   const [problemDescription, setProblemDescription] = useState("");
//   const [problemDescriptionError, setProblemDescriptionError] = useState("");
//   const [medicationPrescribed, setMedicationPrescribed] = useState("");
//   const [dosageAndPrecautions, setDosageAndPrecautions] = useState("");
//   const [dosageAndPrecautionsError, setDosageAndPrecautionsError] =
//     useState("");

//   const [currentDate, setCurrentDate] = useState("");
//   const [currentTime, setCurrentTime] = useState("");
//   const [searchQuery, setSearchQuery] = useState("");
//   const [foundPatient, setFoundPatient] = useState(null);
//   const [foundPatientError, setFoundPatientError] = useState(null);

//   useEffect(() => {
//     const getCurrentDate = () => {
//       const now = new Date();
//       const year = now.getFullYear();
//       const month = String(now.getMonth() + 1).padStart(2, "0");
//       const day = String(now.getDate()).padStart(2, "0");
//       return `${year}-${month}-${day}`;
//     };

//     const getCurrentTime = () => {
//       const now = new Date();
//       const hours = String(now.getHours()).padStart(2, "0");
//       const minutes = String(now.getMinutes()).padStart(2, "0");
//       return `${hours}:${minutes}`;
//     };

//     setAppointDate(getCurrentDate());
//     setCurrentDate(getCurrentDate());
//     setAppointTime(getCurrentTime());
//     setCurrentTime(getCurrentTime());
//   }, []);

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

//   const handleInput = (event) => {
//     event.preventDefault();
//     setDeleteButtonState(true);
//     setEditButtonState(true);
//     const { value, id } = event.target;
//     if (id === "appointReason") {
//       setAppointReason(value);
//       setAppointReasonError("");
//     } else if (id === "appointDate") {
//       setAppointDate(value);
//       setAppointDateError("");
//     } else if (id === "appointTime") {
//       setAppointTime(value);
//       setAppointTimeError("");
//     } else if (id === "problemDescription") {
//       setProblemDescription(value);
//       setProblemDescriptionError("");
//     } else if (id === "medicationPrescribed") {
//       setMedicationPrescribed(value);
//     } else if (id === "dosageAndPrecautions") {
//       setDosageAndPrecautions(value);
//       setDosageAndPrecautionsError("");
//     } else if (id === "foundPatient") {
//       setFoundPatient(value);
//       setFoundPatientError("");
//     }
//   };

//   const addMedicalAppointmentToLocalStorage = () => {
//     const newMedicalAppointment = {
//       patient: foundPatient.id,
//       appointReason: appointReason,
//       appointDate: appointDate,
//       appointTime: appointTime,
//       problemDescription: problemDescription,
//       dosageAndPrecautions: dosageAndPrecautions,
//       medicationPrescribed: medicationPrescribed,
//     };
//     addmedicalAppointment(newMedicalAppointment);
//     setSubmitButtonState("");
//   };

//   const handleFormSubmission = (e) => {
//     e.preventDefault();

//     const validationSchema = yup.object().shape({
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
//       appointReason: yup
//         .string()
//         .min(6, "Este campo deve ter pelo menos 6 caracteres")
//         .max(60, "Este campo deve ter no máximo 60 caracteres"),
//       appointDate: yup
//         .date("Este campo é obrigatório")
//         .required("Este campo é obrigatório")
//         .nullable("Este campo é obrigatório")
//         .typeError("Data de nascimento inválida"),
//       appointTime: yup.string().required("Este campo é obrigatório"),
//       problemDescription: yup
//         .string()
//         .min(15, "Este campo deve ter pelo menos 15 caracteres")
//         .max(1000, "Este campo deve ter no máximo 1000 caracteres")
//         .required("Este campo é obrigatório"),
//       dosageAndPrecautions: yup
//         .string()
//         .min(15, "Este campo deve ter pelo menos 15 caracteres")
//         .max(250, "Este campo deve ter no máximo 250 caracteres")
//         .required("Este campo é obrigatório"),
//     });

//     validationSchema
//       .validate(
//         {
//           foundPatient,
//           appointReason,
//           appointDate,
//           appointTime,
//           problemDescription,
//           dosageAndPrecautions,
//         },
//         { abortEarly: false }
//       )
//       .then(() => {
//         setSubmitButtonState("Carregando...");
//         setTimeout(() => {
//           addMedicalAppointmentToLocalStorage();
//           alert("Nova consulta médica cadastrada com sucesso");
//         }, 2000);
//       })
//       .catch((error) => {
//         if (error.inner) {
//           error.inner.forEach((err) => {
//             const { path, message } = err;
//             if (path === "appointReason") {
//               setAppointReasonError(message);
//             } else if (path === "appointDate") {
//               setAppointDateError(message);
//             } else if (path === "appointTime") {
//               setAppointTimeError(message);
//             } else if (path === "problemDescription") {
//               setProblemDescriptionError(message);
//             } else if (path === "medicationPrescribed") {
//               setMedicationPrescribedError(message);
//             } else if (path === "dosageAndPrecautions") {
//               setDosageAndPrecautionsError(message);
//             } else if (path === "foundPatient") {
//               setFoundPatientError(message);
//             }
//           });
//         }
//       });
//   };

//   return (
//     <>
//       <div>
//         <InputComponent
//           id="searchPatientInp"
//           type="text"
//           placeholder="Digite o nome do paciente"
//           label="Buscar Paciente"
//           value={searchQuery}
//           onInput={(event) => setSearchQuery(event.target.value)}
//         />
//         <ButtonComponent
//           id="searchPatientBtn"
//           type="button"
//           label="Buscar Paciente"
//           onClick={handleSearchPatient}
//         />
//       </div>

//       <Styled.MedicalRegisterComponent>
//         <form onSubmit={handleFormSubmission} noValidate>
//           <ButtonComponent
//             id="editButton"
//             type="button"
//             label="Editar"
//             disabled={editButtonState}
//             onClick={() => {
//               alert(
//                 "funcionalidade não desenvolvida - fora do escopo do projeto"
//               );
//             }}
//           />
//           <ButtonComponent
//             id="deletButton"
//             type="button"
//             label="Apagar"
//             disabled={deleteButtonState}
//             onClick={() => {
//               alert(
//                 "funcionalidade não desenvolvida- fora do escopo do projeto"
//               );
//             }}
//           />
//           <ButtonComponent
//             id="save"
//             type="submit"
//             label="Salvar"
//             onClick={handleFormSubmission}
//           />
//           {submitButtonState && (
//             <div>
//               <Spinner animation="border" role="status">
//                 <span className="visually-hidden">Carregando...</span>
//               </Spinner>
//             </div>
//           )}

//           {!foundPatient ? (
//             <div>Para começar, escolha um paciente</div>
//           ) : (
//             <div>Paciente Selecionado: {foundPatient.name}</div>
//           )}
//           {foundPatientError && <div>{foundPatientError}</div>}

//           <InputComponent
//             id="appointReason"
//             type="text"
//             placeholder="Digite o motivo da consulta"
//             label="Motivo da Consulta"
//             value={appointReason}
//             onInput={handleInput}
//             error={appointReasonError}
//           />
//           {appointReasonError && <div>{appointReasonError}</div>}

//           <InputComponent
//             id="appointDate"
//             type="date"
//             label="Data da Consulta"
//             value={appointDate}
//             onInput={handleInput}
//             error={appointDate}
//           />
//           {appointDatError && <div>{appointDatError}</div>}
//           <InputComponent
//             id="appointTime"
//             type="time"
//             label="Horário da Consulta"
//             value={appointTime}
//             onInput={handleInput}
//             error={appointTimeError}
//           />
//           {appointTimeError && <div>{appointTimeError}</div>}

//           <InputComponent
//             id="problemDescription"
//             type="textarea"
//             placeholder="Digite a descrição do problema"
//             label="Descrição do Problema"
//             value={problemDescription}
//             onInput={handleInput}
//           />
//           {problemDescriptionError && <div>{problemDescriptionError}</div>}

//           <InputComponent
//             id="medicationPrescribed"
//             placeholder="Digite a prescrição médica"
//             type="textarea"
//             label="Medicação Receitada"
//             onInput={handleInput}
//           />

//           <InputComponent
//             id="dosageAndPrecautions"
//             placeholder="Digite as dosagens e prescrição"
//             type="textarea"
//             label="Dosagem e Precauções"
//             value={dosageAndPrecautions}
//             onInput={handleInput}
//           />
//           {dosageAndPrecautionsError && <div>{dosageAndPrecautionsError}</div>}
//         </form>
//       </Styled.MedicalRegisterComponent>
//     </>
//   );
// };

// MedicalRegisterComponent.propTypes = {
//   id: PropTypes.number,
// };

import React, { useState, useEffect } from "react";
import * as Styled from "./MedicalRegisterComponent.style";
import { ButtonComponent } from "../Button/buttonComponent";
import { InputComponent } from "../Input/inputComponent";
import * as yup from "yup";
import { addmedicalAppointment, deleteMedAppoint, getMedAppointById, updateMedAppoint } from "../../service/medicalAppointment.service";
//vai ter que adicionar mais funções neste service
import { Spinner } from "react-bootstrap";
import PropTypes from "prop-types";
import { useNavigate } from "react-router";
import { getPatientById, getPatients } from "../../service/patients.service";

export const MedicalRegisterComponent = ({ id }) => {
  //Variáveis dos Campos do Formulário
  const [appointReason, setAppointReason] = useState("");
  const [appointReasonError, setAppointReasonError] = useState("");
  const [appointDate, setAppointDate] = useState("");
  const [appointDatError, setAppointDateError] = useState("");
  const [appointTime, setAppointTime] = useState("");
  const [appointTimeError, setAppointTimeError] = useState("");
  const [problemDescription, setProblemDescription] = useState("");
  const [problemDescriptionError, setProblemDescriptionError] = useState("");
  const [medicationPrescribed, setMedicationPrescribed] = useState("");
  const [medicationPrescribedError, setMedicationPrescribedError] =
    useState("");
  const [dosageAndPrecautions, setDosageAndPrecautions] = useState("");
  const [dosageAndPrecautionsError, setDosageAndPrecautionsError] =
    useState("");

  //Variáveis dos botões
  const [editButtonDisabled, setEditButtonDisabled] = useState(false);
  const [deleteButtonDisabled, setDeleteButtonDisabled] = useState(false);
  const [saveButtonDisabled, setSaveButtonDisabled] = useState(false);

  //Variáveis encontrar Data e Hora Atual

  const [currentDate, setCurrentDate] = useState("");
  const [currentTime, setCurrentTime] = useState("");

  //Variáveis Barra de Pesquisa
  const [searchQuery, setSearchQuery] = useState("");
  const [foundPatientData, setFoundPatientData] = useState(null);
  const [foundPatientDataError, setFoundPatientDataError] = useState(null);
  const [foundPatientId, setFoundPatientId] = useState(null);
  const [foundPatientIdError, setFoundPatientIdError] = useState(null);

  //Auxiliares renderização e assist LEC
  const [saveAnimationRender, setSaveAnimationRender] = useState(false);
  const [searchPatientRender, setSearchPatientRender] = useState(false);
  const [formMode, setFormMode] = useState(null);
  const [readMode, setReadMode] = useState(true);
  const [medAppointRender, setMedAppointRender] = useState(null);

  const navigate = useNavigate();

  const handleRedirect = (path) => {
    navigate(path);
  };

  useEffect(() => {
    switch (id) {
      case "newMedAppoint":
        setFormMode("register");
        break;
      default:
        setFormMode("read");
    }
  }, [id]);

  useEffect(() => {
    const newPatientData = getPatientById(foundPatientId);
    setFoundPatientData(newPatientData);
  }, [foundPatientId]);

  useEffect(() => {
    if (formMode === "register") {
      setReadMode(false);
      setEditButtonDisabled(true);
      setDeleteButtonDisabled(true);
      setSaveButtonDisabled(false);
      setSearchPatientRender(true);
      setFoundPatientData("");
      setFoundPatientId("");
      setSearchQuery("");
      setCurrentDate(getCurrentDate());
      setCurrentTime(getCurrentTime());
      setAppointReason("");
      setAppointDate(getCurrentDate());
      setAppointTime(getCurrentTime());
      setProblemDescription("");
      setMedicationPrescribed("");
      setDosageAndPrecautions("");
       }
    if (formMode === "read") {
      setReadMode(true);
      setEditButtonDisabled(false);
      setDeleteButtonDisabled(true);
      setSaveButtonDisabled(true);
      setSearchPatientRender(false);
      setMedAppointRender(getMedAppointRender());
    }
    if (formMode === "edit") {
      setReadMode(false);
      setEditButtonDisabled(true);
      setDeleteButtonDisabled(false);
      setSaveButtonDisabled(false);
      setSearchPatientRender(false);
      setMedAppointRender(getMedAppointRender());
    }
  }, [formMode]);

  const getMedAppointRender = () => {
    const medAppoint = getMedAppointById(id);
    if (medAppoint) {
      setFoundPatientId(medAppoint.patient);
      setAppointReason(medAppoint.appointReason);
      setAppointDate(medAppoint.appointDate);
      setAppointTime(medAppoint.appointTime);
      setProblemDescription(medAppoint.problemDescription);
      setMedicationPrescribed(medAppoint.medicationPrescribed);
      setDosageAndPrecautions(medAppoint.dosageAndPrecautions);
    } else {
      setMedAppointRender(false);
      alert("Exame não encontrado.");
    }
  };

   // Funções para pegar a data e hora do momento

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

  // Funções para busca de pacientes

  const handleSearchPatient = () => {
    if (searchQuery.trim() === "") {
      setFoundPatientData(null);
      setFoundPatientId(null);
      return;
    }
    const patientsList = getPatients();

    const patient = patientsList.find((patient) =>
      patient.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (patient) {
      setFoundPatientData(patient);
      setFoundPatientId(patient.id);
    } else {
      setFoundPatientData(null);
      setFoundPatientId(patient.id);
      alert("Paciente não encontrado.");
    }
  };

  

  const handleInput = (event) => {
    event.preventDefault();
       const { value, id } = event.target;
    if (id === "appointReason") {
      setAppointReason(value);
      setAppointReasonError("");
    } else if (id === "appointDate") {
      setAppointDate(value);
      setAppointDateError("");
    } else if (id === "appointTime") {
      setAppointTime(value);
      setAppointTimeError("");
    } else if (id === "problemDescription") {
      setProblemDescription(value);
      setProblemDescriptionError("");
    } else if (id === "medicationPrescribed") {
      setMedicationPrescribed(value);
    } else if (id === "dosageAndPrecautions") {
      setDosageAndPrecautions(value);
      setDosageAndPrecautionsError("");
    } else if (id === "foundPatient") {
      setFoundPatientId(value);
      setFoundPatientIdError("");
    }
  };
  //Funções CRUD

  const updateMedicalAppointmentToLocalStorage = () => {
    const idFromLocalStorage = +id;
    const setMedicalAppointmentRender = {
      patient: foundPatientId,
      appointReason: appointReason,
      appointDate: appointDate,
      appointTime: appointTime,
      problemDescription: problemDescription,
      dosageAndPrecautions: dosageAndPrecautions,
      medicationPrescribed: medicationPrescribed,
    };
    updateMedAppoint(idFromLocalStorage, setMedicalAppointmentRender);
    setSaveAnimationRender(false);
    setFormMode("read");
    handleRedirect("/medical-record-list");
  };

  const addMedicalAppointmentToLocalStorage = () => {
    const newMedicalAppointment = {
      patient: foundPatientId,
      appointReason: appointReason,
      appointDate: appointDate,
      appointTime: appointTime,
      problemDescription: problemDescription,
      dosageAndPrecautions: dosageAndPrecautions,
      medicationPrescribed: medicationPrescribed,
    };
    addmedicalAppointment(newMedicalAppointment);
    setSaveAnimationRender(false);
    setCurrentDate(getCurrentDate());
    setCurrentTime(getCurrentTime());
    setFoundPatientId("");
    setAppointReason("");
    setAppointDate(getCurrentDate());
    setAppointTime(getCurrentTime());
    setProblemDescription("");
    setMedicationPrescribed("");
    setDosageAndPrecautions("");
   setSearchQuery("");
      };

  const deletMedicalAppointmentToLocalStorage = () => {
    const idFromLocalStorage = +id;
    deleteMedAppoint(idFromLocalStorage);
    alert("Consulta deletado com sucesso!");
    handleRedirect("/medical-record-list");
  };

  const handleFormSubmission = (e) => {
    e.preventDefault();

    const validationSchema = yup.object().shape({
      foundPatientData: yup
        .mixed()
        .nullable("Este campo é obrigatório")
        .test(
          "is-patient-selected",
          "Por favor, selecione um paciente.",
          (value) => {
            return value !== null;
          }
        ),
      appointReason: yup
        .string()
        .min(6, "Este campo deve ter pelo menos 6 caracteres")
        .max(60, "Este campo deve ter no máximo 60 caracteres"),
      appointDate: yup
        .date("Este campo é obrigatório")
        .required("Este campo é obrigatório")
        .nullable("Este campo é obrigatório")
        .typeError("Data de nascimento inválida"),
      appointTime: yup.string().required("Este campo é obrigatório"),
      problemDescription: yup
        .string()
        .min(15, "Este campo deve ter pelo menos 15 caracteres")
        .max(1000, "Este campo deve ter no máximo 1000 caracteres")
        .required("Este campo é obrigatório"),
      dosageAndPrecautions: yup
        .string()
        .min(15, "Este campo deve ter pelo menos 15 caracteres")
        .max(250, "Este campo deve ter no máximo 250 caracteres")
        .required("Este campo é obrigatório"),
    });

    validationSchema
      .validate(
        {
          foundPatientData,
          appointReason,
          appointDate,
          appointTime,
          problemDescription,
          dosageAndPrecautions,
        },
        { abortEarly: false }
      )
      .then(() => {
        setSaveAnimationRender(true);
        if (formMode === "register") {
          setTimeout(() => {
            addMedicalAppointmentToLocalStorage();
            alert("Nova consulta cadastrada com sucesso");
          }, 2000);
        } else {
          setTimeout(() => {
            updateMedicalAppointmentToLocalStorage();
            alert("Consulta atualizada com sucesso");
          }, 1500);
        }
      })
      .catch((error) => {
        if (error.inner) {
          error.inner.forEach((err) => {
            const { path, message } = err;
            if (path === "appointReason") {
              setAppointReasonError(message);
            } else if (path === "appointDate") {
              setAppointDateError(message);
            } else if (path === "appointTime") {
              setAppointTimeError(message);
            } else if (path === "problemDescription") {
              setProblemDescriptionError(message);
            } else if (path === "medicationPrescribed") {
              setMedicationPrescribedError(message);
            } else if (path === "dosageAndPrecautions") {
              setDosageAndPrecautionsError(message);
            } else if (path === "foundPatientData") {
              setFoundPatientDataError(message);
            }
          });
        }
      });
  };

  return (
    <>
     <p> {formMode} </p>

{formMode === "register" ? (
  <div>
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
  </div>
) : (
  <></>
)}
{!foundPatientData ? (
  <h5>Para começar, escolha um paciente</h5>
) : (
  <h5>
    Paciente Selecionado: {foundPatientData.name}
  </h5>
)}
{foundPatientDataError && <div>{foundPatientDataError}</div>}

     
<form onSubmit={handleFormSubmission} noValidate>
        <ButtonComponent
          id="editButton"
          type="button"
          label="Editar"
          disabled={editButtonDisabled}
          onClick={() => {
            setFormMode("edit");
          }}
        />
        <ButtonComponent
          id="deletButton"
          type="button"
          label="Apagar"
          disabled={deleteButtonDisabled}
          onClick={() => deletMedicalAppointmentToLocalStorage()}
        />
        <ButtonComponent
          id="save"
          type="submit"
          label="Salvar"
          onClick={handleFormSubmission}
          disabled={saveButtonDisabled}
        />
        {saveAnimationRender && (
          <div>
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Carregando...</span>
            </Spinner>
          </div>
)}
          <InputComponent
            id="appointReason"
            type="text"
            placeholder="Digite o motivo da consulta"
            label="Motivo da Consulta"
            value={appointReason}
            onInput={handleInput}
            error={appointReasonError}
            readOnly={readMode}
          />
          {appointReasonError && <div>{appointReasonError}</div>}

          <InputComponent
            id="appointDate"
            type="date"
            label="Data da Consulta"
            value={appointDate}
            onInput={handleInput}
            error={appointDate}
            readOnly={readMode}
          />
          {appointDatError && <div>{appointDatError}</div>}
          <InputComponent
            id="appointTime"
            type="time"
            label="Horário da Consulta"
            value={appointTime}
            onInput={handleInput}
            error={appointTimeError}
            readOnly={readMode}
          />
          {appointTimeError && <div>{appointTimeError}</div>}

          <InputComponent
            id="problemDescription"
            type="textarea"
            placeholder="Digite a descrição do problema"
            label="Descrição do Problema"
            value={problemDescription}
            onInput={handleInput}
            readOnly={readMode}
          />
          {problemDescriptionError && <div>{problemDescriptionError}</div>}

          <InputComponent
            id="medicationPrescribed"
            placeholder="Digite a prescrição médica"
            type="textarea"
            label="Medicação Receitada"
            value={medicationPrescribed}
            onInput={handleInput}
            readOnly={readMode}
          />

          <InputComponent
            id="dosageAndPrecautions"
            placeholder="Digite as dosagens e prescrição"
            type="textarea"
            label="Dosagem e Precauções"
            value={dosageAndPrecautions}
            onInput={handleInput}
            readOnly={readMode}
          />
          {dosageAndPrecautionsError && <div>{dosageAndPrecautionsError}</div>}
        </form>
      
    </>
  );
};

MedicalRegisterComponent.propTypes = {
  id: PropTypes.number,
};

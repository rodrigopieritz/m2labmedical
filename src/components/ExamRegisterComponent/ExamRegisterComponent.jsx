import React, { useState, useEffect } from "react";
import * as Styled from "./ExamRegisterComponent.style";
import { ButtonComponent } from "../Button/buttonComponent";
import { InputComponent } from "../Input/inputComponent";
import * as yup from "yup";
import {
  addExamRegister,
  deleteExam,
  getExamById,
  updateExamRegister,
} from "../../service/examRegister.service";
import { Spinner } from "react-bootstrap";
import PropTypes from "prop-types";
import { Navigate, useNavigate } from "react-router";
import { getPatientById, getPatients } from "../../service/patients.service";

export const ExamRegisterComponent = ({ id }) => {
  //Variáveis dos Campos do Formulário
  const [examName, setExamName] = useState("");
  const [examNameError, setExamNameError] = useState("");
  const [examDate, setExamDate] = useState("");
  const [examDateError, setExamDateError] = useState("");
  const [examTime, setExamTime] = useState("");
  const [examTimeError, setExamTimeError] = useState("");
  const [examType, setExamType] = useState("");
  const [examTypeError, setExamTypeError] = useState("");
  const [urlDoc, setUrlDoc] = useState("");
  const [urlDocError, setUrlDocError] = useState("");
  const [laboratory, setLaboratory] = useState("");
  const [laboratoryError, setLaboratoryError] = useState("");
  const [results, setResults] = useState("");
  const [resultsError, setResultsError] = useState("");

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
  const [examRender, setExamRender] = useState(null);

  const navigate = useNavigate();

  const handleRedirect = (path) => {
    navigate(path);
  };

  useEffect(() => {
    switch (id) {
      case "newExam":
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
      setExamDate(getCurrentDate());
      setExamTime(getCurrentTime());
      setExamName("");
      setExamType("");
      setUrlDoc("");
      setLaboratory("");
      setResults("");
    }
    if (formMode === "read") {
      setReadMode(true);
      setEditButtonDisabled(false);
      setDeleteButtonDisabled(true);
      setSaveButtonDisabled(true);
      setSearchPatientRender(false);
      setExamRender(getExamRenderData());
    }
    if (formMode === "edit") {
      setReadMode(false);
      setEditButtonDisabled(true);
      setDeleteButtonDisabled(false);
      setSaveButtonDisabled(false);
      setSearchPatientRender(false);
      setExamRender(getExamRenderData());
    }
  }, [formMode]);

  const getExamRenderData = () => {
    const exam = getExamById(id);
    if (exam) {
      setFoundPatientId(exam.patient);
      setExamName(exam.examName);
      setExamDate(exam.examDate);
      setExamTime(exam.examTime);
      setExamType(exam.examType);
      setUrlDoc(exam.urlDoc);
      setLaboratory(exam.laboratory);
      setResults(exam.results);
    } else {
      setExamRender(false);
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
    } else if (id === "laboratory") {
      setLaboratory(value);
      setLaboratoryError("");
    } else if (id === "results") {
      setResults(value);
      setResultsError("");
    } else if (id === "urlDoc") {
      setUrlDoc(value);
      setUrlDocError("");
    } else if (id === "foundPatient") {
      setFoundPatientId(value);
      setFoundPatientIdError("");
    }
  };

  //Funções CRUD

  const updateExamRegisterToLocalStorage = () => {
    const idFromLocalStorage = +id;
    const setExamRegister = {
      patient: foundPatientId,
      examName: examName,
      examDate: examDate,
      examTime: examTime,
      examType: examType,
      urlDoc: urlDoc,
      laboratory: laboratory,
      results: results,
    };
    updateExamRegister(idFromLocalStorage, setExamRegister);
    setSaveAnimationRender(false);
    setFormMode("read");
    handleRedirect("/medical-record-list");
  };

  const addExamRegisterToLocalStorage = () => {
    const newExamRegister = {
      patient: foundPatientId,
      examName: examName,
      examDate: examDate,
      examTime: examTime,
      examType: examType,
      urlDoc: urlDoc,
      laboratory: laboratory,
      results: results,
    };
    addExamRegister(newExamRegister);
    setSaveAnimationRender(false);
    setCurrentDate(getCurrentDate());
    setCurrentTime(getCurrentTime());
    setExamDate(getCurrentDate());
    setExamTime(getCurrentTime());
    setExamName("");
    setExamType("");
    setUrlDoc("");
    setLaboratory("");
    setResults("");
    setFoundPatientData("");
    setFoundPatientID("");
    setSearchQuery("");
    alert("Exame cadastrado com sucesso")
  };

  const deletExamRegisterToLocalStorage = () => {
    const idFromLocalStorage = +id;
    deleteExam(idFromLocalStorage);
    alert("Exame deletado com sucesso!");
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
      examName: yup
        .string()
        .min(5, "Este campo deve ter pelo menos 6 caracteres")
        .max(50, "Este campo deve ter no máximo 60 caracteres"),
      examDate: yup
        .date("Este campo é obrigatório")
        .required("Este campo é obrigatório")
        .nullable("Este campo é obrigatório")
        .typeError("Data inválida"),
      examTime: yup.string().required("Este campo é obrigatório"),
      examType: yup
        .string()
        .min(5, "Este campo deve ter pelo menos 5 caracteres")
        .max(30, "Este campo deve ter no máximo 30 caracteres")
        .required("Este campo é obrigatório"),
      laboratory: yup
        .string()
        .min(5, "Este campo deve ter pelo menos 5 caracteres")
        .max(30, "Este campo deve ter no máximo 30 caracteres")
        .required("Este campo é obrigatório"),
      urlDoc: yup.string(),
      results: yup
        .string()
        .min(15, "Este campo deve ter pelo menos 15 caracteres")
        .max(1000, "Este campo deve ter no máximo 1.000 caracteres")
        .required("Este campo é obrigatório"),
    });

    validationSchema
      .validate(
        {
          foundPatientData,
          examName,
          examDate,
          examTime,
          examType,
          laboratory,
          urlDoc,
          results,
        },
        { abortEarly: false }
      )
      .then(() => {
        setSaveAnimationRender(true);
        if (formMode === "register") {
          setTimeout(() => {
            addExamRegisterToLocalStorage();
            alert("Novo exame cadastrado com sucesso");
          }, 2000);
        } else {
          setTimeout(() => {
            updateExamRegisterToLocalStorage();
            alert("Exame atualizado com sucesso");
          }, 1500);
        }
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
            } else if (path === "laboratory") {
              setLaboratoryError(message);
            } else if (path === "urlDoc") {
              setUrlDocError(message);
            } else if (path === "results") {
              setResultsError(message);
            } else if (path === "foundPatientData") {
              setFoundPatientDataError(message);
            }
          });
        }
      });
  };

  console.log(foundPatientData);
  console.log(foundPatientId);
  console.log(id);
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
          {" "}
          <h6>Paciente Selecionado:</h6> {foundPatientData.name}
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
          onClick={() => deletExamRegisterToLocalStorage()}
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
          id="examName"
          type="text"
          placeholder="Digite o Nome do Exame"
          label="Nome do Exame"
          value={examName}
          onInput={handleInput}
          error={examNameError}
          readOnly={readMode}
        />
        {examNameError && <div>{examNameError}</div>}

        <InputComponent
          id="examDate"
          type="date"
          label="Data do Exame"
          value={examDate}
          onInput={handleInput}
          error={examDate}
          readOnly={readMode}
        />
        {examDateError && <div>{examDateError}</div>}
        <InputComponent
          id="examTime"
          type="time"
          label="Horário do Exame"
          value={examTime}
          onInput={handleInput}
          error={examTimeError}
          readOnly={readMode}
        />
        {examTimeError && <div>{examTimeError}</div>}

        <InputComponent
          id="examType"
          type="textarea"
          placeholder="Digite o tipo de Exame"
          label="Tipo de Exame"
          value={examType}
          onInput={handleInput}
          readOnly={readMode}
        />
        {examTypeError && <div>{examTypeError}</div>}

        <InputComponent
          id="urlDoc"
          placeholder="Digite a URL da documentação"
          type="textarea"
          label="URL da documentação"
          value={urlDoc}
          onInput={handleInput}
          readOnly={readMode}
        />
        {urlDocError && <div>{urlDocError}</div>}

        <InputComponent
          id="laboratory"
          placeholder="Digite o nome do laboratório"
          type="text"
          label="Laboratório"
          value={laboratory}
          onInput={handleInput}
          readOnly={readMode}
        />
        {laboratoryError && <div>{laboratoryError}</div>}

        <InputComponent
          id="results"
          placeholder="Escreva os resultados"
          type="textarea"
          label="Resultados"
          value={results}
          onInput={handleInput}
          readOnly={readMode}
        />
        {resultsError && <div>{resultsError}</div>}
      </form>
    </>
  );
};

ExamRegisterComponent.propTypes = {
  id: PropTypes.string,
};

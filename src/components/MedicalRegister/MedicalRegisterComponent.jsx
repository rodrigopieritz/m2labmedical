import React, { useState, useEffect } from "react";
import * as Styled from "./MedicalRegisterComponent.style";
import { ButtonComponent } from "../Button/buttonComponent";
import { InputComponent } from "../Input/inputComponent";
import * as yup from "yup";
import { addmedicalAppointment } from "../../service/medicalAppointment.service";
import { Spinner } from "react-bootstrap";

export const MedicalRegisterComponent = () => {
  const [appointReason, setAppointReason] = useState("");
  const [appointReasonError, setAppointReasonError] = useState("");

  const [appointDate, setAppointDate] = useState("");
  const [appointDatError, setAppointDateError] = useState("");
  const [submitButtonState, setSubmitButtonState] = useState("");
  const [editButtonState, setEditButtonState] = useState("");
  const [deleteButtonState, setDeleteButtonState] = useState("");
  const [appointTime, setAppointTime] = useState("");
  const [appointTimeError, setAppointTimeError] = useState("");
  const [problemDescription, setProblemDescription] = useState("");
  const [problemDescriptionError, setProblemDescriptionError] = useState("");
  const [medicationPrescribed, setMedicationPrescribed] = useState("");
  const [dosageAndPrecautions, setDosageAndPrecautions] = useState("");
  const [dosageAndPrecautionsError, setDosageAndPrecautionsError] =
    useState("");


    
  const handleInput = (event) => {
    event.preventDefault();
    setDeleteButtonState("true");
    setEditButtonState("true");
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
    }
  };

  const addMedicalAppointmentToLocalStorage = () => {
    const newMedicalAppointment = {
      patient: 1,
      appointReason: appointReason,
      appointDate: appointDate,
      appointTime: appointTime,
      problemDescription: problemDescription,
      dosageAndPrecautions: dosageAndPrecautions,
      medicationPrescribed: medicationPrescribed,
    };
    addmedicalAppointment(newMedicalAppointment);
    setSubmitButtonState("");
  };

  const handleFormSubmission = (e) => {
    e.preventDefault();

    const validationSchema = yup.object().shape({
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
          appointReason,
          appointDate,
          appointTime,
          problemDescription,
          dosageAndPrecautions,
        },
        { abortEarly: false }
      )
      .then(() => {
        setSubmitButtonState("Carregando...");
        setTimeout(() => {
          addMedicalAppointmentToLocalStorage();
          alert("Nova consulta médica cadastrada com sucesso");
        }, 2000);
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
              setAppointTime(message);
            } else if (path === "problemDescription") {
              setProblemDescription(message);
            } else if (path === "medicationPrescribed") {
              setMedicationPrescribed(message);
            } else if (path === "dosageAndPrecautions") {
              setDosageAndPrecautions(message);
            }
          });
        }
      });
  };

  return (
    <>
      <h3>Barra de Pesquisa de Paciente Aqui</h3>
      <Styled.MedicalRegisterComponent>
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

          <h3>Dados da Consulta</h3>

          <InputComponent
            id="appointReason"
            type="text"
            placeholder="Digite o motivo da consulta"
            label="Motivo da Consulta"
            value={appointReason}
            onInput={handleInput}
            error={appointReasonError}
          />
          {appointReasonError && <div>{appointReasonError}</div>}

          <InputComponent
            id="appointDate"
            type="date"
            placeholder="01/01/2024"
            label="Data da Consulta"
            value={appointDate}
            onInput={handleInput}
            error={appointDate}
          />
          {appointDatError && <div>{appointDatError}</div>}
          <InputComponent
            id="appointTime"
            type="time"
            label="Horário da Consulta"
            value={appointTime}
            onInput={handleInput}
            error={appointTimeError}
          />
          {appointTimeError && <div>{appointTimeError}</div>}

          <InputComponent
            id="problemDescription"
            type="textarea"
            label="Descrição do Problema"
            value={problemDescription}
            onInput={handleInput}
            error={problemDescriptionError}
          />
          {problemDescriptionError && <div>{problemDescriptionError}</div>}

          <InputComponent
            id="medicationPrescribed"
            type="textarea"
            label="Medicação Receitada"
            onInput={handleInput}
          />

          <InputComponent
            id="dosageAndPrecautions"
            type="textarea"
            label="Dosagem e Precauções"
            value={dosageAndPrecautions}
            onInput={handleInput}
            error={dosageAndPrecautionsError}
          />
          {dosageAndPrecautionsError && <div>{dosageAndPrecautionsError}</div>}
        </form>
      </Styled.MedicalRegisterComponent>
    </>
  );
};
